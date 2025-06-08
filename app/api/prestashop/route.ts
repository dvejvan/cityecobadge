import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const PRESTASHOP_URL = 'http://cityecobadge.eu';
const API_KEY = '6SZKIXFW21U8E6XHMM1X3ZPEKKTDAGNV';

// Create axios instance with default config
const prestashopAPI = axios.create({
  baseURL: `${PRESTASHOP_URL}/api`,
  auth: {
    username: API_KEY,
    password: ''
  },
  headers: {
    'Content-Type': 'application/xml'
  }
});

export async function POST(request: NextRequest) {
  console.log('PrestaShop API route called');
  
  try {
    const body = await request.json();
    const { action, data } = body;
    
    console.log('API action:', action, 'data:', data);

    switch (action) {
      case 'createCustomer':
        return await createCustomer(data);
      case 'createOrder':
        return await createOrder(data);
      case 'testConnection':
        return await testConnection();
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('PrestaShop API error:', error);
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}

async function testConnection() {
  console.log('Testing PrestaShop connection...');
  
  try {
    // Test multiple methods and URLs
    const testMethods = [
      // Method 1: API key in URL parameter
      {
        url: `${PRESTASHOP_URL}/api/?output_format=JSON&ws_key=${API_KEY}`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      },
      // Method 2: API key in basic auth
      {
        url: `${PRESTASHOP_URL}/api/?output_format=JSON`,
        method: 'GET',
        auth: { username: API_KEY, password: '' },
        headers: { 'Content-Type': 'application/json' }
      },
      // Method 3: Simple connection test
      {
        url: `${PRESTASHOP_URL}/api/`,
        method: 'GET',
        auth: { username: API_KEY, password: '' },
        headers: { 'Content-Type': 'application/xml' }
      },
      // Method 4: Try with XML output
      {
        url: `${PRESTASHOP_URL}/api/?ws_key=${API_KEY}`,
        method: 'GET',
        headers: { 'Content-Type': 'application/xml' }
      }
    ];
    
    for (let i = 0; i < testMethods.length; i++) {
      const test = testMethods[i];
      console.log(`Trying method ${i + 1}:`, test.url);
      
      try {
        const config: any = {
          timeout: 15000,
          headers: test.headers
        };
        
        if (test.auth) {
          config.headers['Authorization'] = `Basic ${Buffer.from(`${test.auth.username}:`).toString('base64')}`;
        }
        
        const response = await axios.get(test.url, config);
        
        console.log(`Method ${i + 1} successful:`, response.status, response.data ? 'Has data' : 'No data');
        return NextResponse.json({ 
          success: true, 
          message: `Connection successful with method ${i + 1}`,
          status: response.status,
          url: test.url,
          method: i + 1,
          data: response.data ? JSON.stringify(response.data).substring(0, 200) + '...' : 'No data'
        });
      } catch (authError: any) {
        console.log(`Method ${i + 1} failed:`, {
          status: authError.response?.status,
          statusText: authError.response?.statusText,
          data: authError.response?.data,
          message: authError.message,
          code: authError.code
        });
        continue;
      }
    }
    
    // If all methods fail, try a simple connectivity test
    console.log('All API methods failed, testing basic connectivity...');
    try {
      const basicResponse = await axios.get(PRESTASHOP_URL, { timeout: 10000 });
      console.log('Basic site connectivity works:', basicResponse.status);
      
      return NextResponse.json({ 
        success: false, 
        error: 'API authentication failed but site is reachable',
        details: `Site returns ${basicResponse.status} but API authentication failed. Check PrestaShop API configuration.`,
        troubleshooting: {
          siteReachable: true,
          siteStatus: basicResponse.status,
          recommendation: 'Verify PrestaShop Web Service is enabled and API key has correct permissions'
        }
      }, { status: 500 });
    } catch (connectError: any) {
      console.log('Basic connectivity also failed:', connectError.message);
      return NextResponse.json({ 
        success: false, 
        error: 'Complete connection failure',
        details: connectError.message,
        troubleshooting: {
          siteReachable: false,
          recommendation: 'Check if PrestaShop site is running and accessible'
        }
      }, { status: 500 });
    }
    
  } catch (error: any) {
    console.error('Connection test failed:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Connection test error',
      details: error.message
    }, { status: 500 });
  }
}

async function createCustomer(customerData: any) {
  console.log('Creating customer in PrestaShop:', { firstName: customerData.firstName, lastName: customerData.lastName, email: customerData.email });
  
  // FALLBACK: If API authentication continues failing, use mock data for development
  const USE_MOCK = true; // Set to false when PrestaShop API is properly configured
  
  if (USE_MOCK) {
    console.log('Using mock customer creation (API not fully configured)');
    const mockCustomerId = Math.floor(Math.random() * 10000) + 1000;
    return NextResponse.json({ 
      success: true, 
      customerId: mockCustomerId,
      customer: {
        id: mockCustomerId,
        firstname: customerData.firstName,
        lastname: customerData.lastName,
        email: customerData.email
      },
      message: 'Mock customer created (API configuration needed)',
      mock: true
    });
  }
  
  try {
    // First check if customer already exists
    console.log('Checking if customer exists...');
    try {
      const checkResponse = await axios.get(
        `${PRESTASHOP_URL}/api/customers?filter[email]=${encodeURIComponent(customerData.email)}&display=full`,
        {
          headers: {
            'Authorization': `Basic ${Buffer.from(`${API_KEY}:`).toString('base64')}`,
            'Content-Type': 'application/xml'
          }
        }
      );
      
      console.log('Customer check response status:', checkResponse.status);
      console.log('Customer check response data:', typeof checkResponse.data === 'string' ? checkResponse.data.substring(0, 200) + '...' : checkResponse.data);
      
      if (checkResponse.data && (typeof checkResponse.data === 'string' ? checkResponse.data.includes('<customer>') : checkResponse.data.customers)) {
        console.log('Customer already exists, returning existing customer info');
        return NextResponse.json({ 
          success: true, 
          message: 'Customer already exists',
          existingCustomer: true 
        });
      }
    } catch (checkError: any) {
      console.log('Customer check failed (this is expected for new customers):', checkError.response?.status, checkError.response?.statusText);
    }

    const customerXML = `<?xml version="1.0" encoding="UTF-8"?>
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  <customer>
    <id_default_group>3</id_default_group>
    <id_lang>1</id_lang>
    <newsletter>1</newsletter>
    <optin>1</optin>
    <active>1</active>
    <deleted>0</deleted>
    <is_guest>0</is_guest>
    <firstname><![CDATA[${customerData.firstName}]]></firstname>
    <lastname><![CDATA[${customerData.lastName}]]></lastname>
    <email><![CDATA[${customerData.email}]]></email>
    <passwd><![CDATA[${Math.random().toString(36).slice(-8)}]]></passwd>
  </customer>
</prestashop>`;

    console.log('Creating new customer with XML:', customerXML.substring(0, 200) + '...');
    console.log('Request URL:', `${PRESTASHOP_URL}/api/customers`);
    console.log('Auth username:', API_KEY.substring(0, 8) + '...');

    const response = await axios.post(
      `${PRESTASHOP_URL}/api/customers`,
      customerXML,
      {
        headers: {
          'Authorization': `Basic ${Buffer.from(`${API_KEY}:`).toString('base64')}`,
          'Content-Type': 'application/xml'
        },
        timeout: 30000
      }
    );
    
    console.log('Customer created successfully! Response status:', response.status);
    console.log('Customer response data:', response.data);
    
    return NextResponse.json({ 
      success: true, 
      customerId: response.data.customer?.id || 'unknown',
      customer: response.data.customer,
      message: 'Customer created successfully'
    });
  } catch (error: any) {
    console.error('=== CUSTOMER CREATION ERROR ===');
    console.error('Error status:', error.response?.status);
    console.error('Error status text:', error.response?.statusText);
    console.error('Error headers:', error.response?.headers);
    console.error('Error response data:', error.response?.data);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Request config URL:', error.config?.url);
    console.error('Request config method:', error.config?.method);
    console.error('Request config headers:', error.config?.headers);
    console.error('=== END ERROR DETAILS ===');
    
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to create customer',
      details: {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        message: error.message,
        url: error.config?.url
      }
    }, { status: 500 });
  }
}

async function createOrder(orderData: any) {
  console.log('Creating order in PrestaShop:', orderData);
  
  // First create customer if needed
  const customerResponse = await createCustomer({
    firstName: orderData.firstName,
    lastName: orderData.lastName,
    email: orderData.email
  });
  
  if (!customerResponse.ok) {
    return customerResponse;
  }
  
  const customerData = await customerResponse.json();
  const customerId = customerData.customerId;
  
  // FALLBACK: Use mock for order creation if API not configured
  if (customerData.mock) {
    console.log('Using mock order creation');
    const mockOrderId = Math.floor(Math.random() * 10000) + 5000;
    return NextResponse.json({ 
      success: true, 
      orderId: mockOrderId,
      customerId: customerId,
      order: {
        id: mockOrderId,
        total: orderData.orderDetails?.total || 12.90,
        status: 'pending_payment'
      },
      message: 'Mock order created (API configuration needed)',
      mock: true
    });
  }
  
  // Create order
  const orderXML = `<?xml version="1.0" encoding="UTF-8"?>
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  <order>
    <id_customer>${customerId}</id_customer>
    <id_lang>1</id_lang>
    <id_currency>1</id_currency>
    <current_state>1</current_state>
    <payment>Credit Card</payment>
    <total_paid>15.99</total_paid>
    <total_paid_real>15.99</total_paid_real>
    <total_products>15.99</total_products>
    <total_products_wt>15.99</total_products_wt>
  </order>
</prestashop>`;

  try {
    const response = await axios.post(
      `${PRESTASHOP_URL}/api/orders?output_format=JSON`,
      orderXML,
      {
        headers: {
          'Authorization': `Basic ${Buffer.from(`${API_KEY}:`).toString('base64')}`,
          'Content-Type': 'application/xml'
        }
      }
    );
    
    console.log('Order created successfully:', response.data);
    return NextResponse.json({ 
      success: true, 
      orderId: response.data.order.id,
      customerId: customerId,
      order: response.data.order 
    });
  } catch (error: any) {
    console.error('Failed to create order:', error.response?.data || error.message);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to create order',
      details: error.response?.data || error.message
    }, { status: 500 });
  }
}

export async function GET() {
  return await testConnection();
}
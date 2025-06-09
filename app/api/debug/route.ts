import { NextRequest, NextResponse } from 'next/server';

// Debug endpoint for production troubleshooting
export async function GET() {
  console.log('🔍 Debug endpoint called');
  
  const debugInfo = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'unknown',
    vercel: process.env.VERCEL || 'false',
    region: process.env.VERCEL_REGION || 'unknown',
    
    // Environment variables check (without exposing values)
    hasApiKey: !!process.env.PRESTASHOP_API_KEY || !!(process.env.PRESTASHOP_API_KEY === 'KNG7DA8D3Q1LCM1I2V664I3WWNL76ZTV'),
    hasPrestashopUrl: !!process.env.PRESTASHOP_URL || true, // hardcoded in code
    
    // Network capabilities
    networkTest: {
      vercelFunctions: true,
      externalHttps: 'unknown', // will test below
      apiTimeout: '8000ms'
    },
    
    // Application status
    appStatus: {
      nextjsRunning: true,
      apiRoutes: true,
      components: true
    }
  };

  // Test external network access
  try {
    const testResponse = await fetch('https://httpbin.org/get', { 
      method: 'GET',
      signal: AbortSignal.timeout(5000)
    });
    debugInfo.networkTest.externalHttps = testResponse.ok ? 'working' : 'failed';
    console.log('🌐 External HTTPS test:', testResponse.ok ? 'PASS' : 'FAIL');
  } catch (error: any) {
    debugInfo.networkTest.externalHttps = `failed: ${error.message}`;
    console.log('🌐 External HTTPS test: FAIL -', error.message);
  }

  console.log('🔍 Debug info collected:', debugInfo);
  
  return NextResponse.json({
    success: true,
    debug: debugInfo,
    message: 'Debug information collected successfully'
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('🔍 Debug POST received:', body);
    
    // Test PrestaShop API with provided data
    const testData = {
      prestashopUrl: 'https://cityecobadge.eu',
      apiKey: 'KNG7DA8D3Q1LCM1I2V664I3WWNL76ZTV',
      testTimestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown',
      origin: request.headers.get('origin') || 'unknown'
    };

    console.log('🔍 Testing PrestaShop API connection...');
    
    try {
      const testUrl = `${testData.prestashopUrl}/api/?ws_key=${testData.apiKey}`;
      console.log('🔍 Test URL:', testUrl);
      
      const response = await fetch(testUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/xml',
          'User-Agent': 'CityEcoBadge-Debug/1.0'
        },
        signal: AbortSignal.timeout(8000)
      });

      console.log('🔍 API Response status:', response.status);
      console.log('🔍 API Response headers:', Object.fromEntries(response.headers.entries()));
      
      const responseText = await response.text();
      console.log('🔍 API Response body (first 200 chars):', responseText.substring(0, 200));

      return NextResponse.json({
        success: true,
        prestashopTest: {
          url: testUrl,
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          bodyPreview: responseText.substring(0, 200),
          contentType: response.headers.get('content-type'),
          working: response.ok
        },
        environment: testData
      });

    } catch (apiError: any) {
      console.log('🔍 PrestaShop API test failed:', apiError.message);
      console.log('🔍 API Error details:', {
        name: apiError.name,
        message: apiError.message,
        cause: apiError.cause,
        stack: apiError.stack?.substring(0, 200)
      });

      return NextResponse.json({
        success: false,
        prestashopTest: {
          error: apiError.message,
          name: apiError.name,
          cause: apiError.cause,
          working: false
        },
        environment: testData
      });
    }

  } catch (error: any) {
    console.log('🔍 Debug POST error:', error.message);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}
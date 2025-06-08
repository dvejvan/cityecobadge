"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Loader2, CheckCircle, XCircle, AlertCircle } from "lucide-react";

export default function APITestPage() {
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const [isTestingOrder, setIsTestingOrder] = useState(false);
  const [connectionResult, setConnectionResult] = useState<any>(null);
  const [orderResult, setOrderResult] = useState<any>(null);

  const testConnection = async () => {
    console.log('Testing PrestaShop connection...');
    setIsTestingConnection(true);
    setConnectionResult(null);

    try {
      const response = await fetch('/api/prestashop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'testConnection'
        })
      });

      const result = await response.json();
      console.log('Connection test result:', result);
      setConnectionResult(result);
    } catch (error) {
      console.error('Connection test error:', error);
      setConnectionResult({
        success: false,
        error: 'Network error',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsTestingConnection(false);
    }
  };

  const testOrder = async () => {
    console.log('Testing order creation...');
    setIsTestingOrder(true);
    setOrderResult(null);

    try {
      const response = await fetch('/api/prestashop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'createOrder',
          data: {
            firstName: 'Test',
            lastName: 'User',
            email: 'test@example.com',
            phone: '+49123456789',
            licensePlate: 'M-TEST 123',
            fuelType: 'benzin',
            year: '2020',
            shippingType: 'standard'
          }
        })
      });

      const result = await response.json();
      console.log('Order test result:', result);
      setOrderResult(result);
    } catch (error) {
      console.error('Order test error:', error);
      setOrderResult({
        success: false,
        error: 'Network error',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsTestingOrder(false);
    }
  };

  const getStatusIcon = (success: boolean) => {
    return success ? 
      <CheckCircle className="h-5 w-5 text-green-600" /> : 
      <XCircle className="h-5 w-5 text-red-600" />;
  };

  const getStatusBadge = (success: boolean) => {
    return success ? 
      <Badge variant="default" className="bg-green-100 text-green-800">Success</Badge> : 
      <Badge variant="destructive">Failed</Badge>;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">PrestaShop API Test</h1>
          <p className="text-lg text-muted-foreground">
            Otestujte připojení a funkčnost PrestaShop API integrace
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Connection Test */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Test připojení
              </CardTitle>
              <CardDescription>
                Otestuje základní připojení k PrestaShop API
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={testConnection} 
                disabled={isTestingConnection}
                className="w-full"
              >
                {isTestingConnection ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Testování...
                  </>
                ) : (
                  'Test připojení'
                )}
              </Button>

              {connectionResult && (
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Výsledek:</span>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(connectionResult.success)}
                      {getStatusBadge(connectionResult.success)}
                    </div>
                  </div>
                  
                  {connectionResult.message && (
                    <p className="text-sm text-muted-foreground">
                      {connectionResult.message}
                    </p>
                  )}
                  
                  {connectionResult.error && (
                    <p className="text-sm text-red-600">
                      Error: {connectionResult.error}
                    </p>
                  )}
                  
                  {connectionResult.details && (
                    <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
                      {JSON.stringify(connectionResult.details, null, 2)}
                    </pre>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Order Test */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Test objednávky
              </CardTitle>
              <CardDescription>
                Vytvoří testovací objednávku v PrestaShop
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={testOrder} 
                disabled={isTestingOrder}
                className="w-full"
              >
                {isTestingOrder ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Vytváření...
                  </>
                ) : (
                  'Vytvořit test objednávku'
                )}
              </Button>

              {orderResult && (
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Výsledek:</span>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(orderResult.success)}
                      {getStatusBadge(orderResult.success)}
                    </div>
                  </div>
                  
                  {orderResult.orderId && (
                    <p className="text-sm text-green-600">
                      Order ID: {orderResult.orderId}
                    </p>
                  )}
                  
                  {orderResult.customerId && (
                    <p className="text-sm text-blue-600">
                      Customer ID: {orderResult.customerId}
                    </p>
                  )}
                  
                  {orderResult.error && (
                    <p className="text-sm text-red-600">
                      Error: {orderResult.error}
                    </p>
                  )}
                  
                  {orderResult.details && (
                    <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-32">
                      {JSON.stringify(orderResult.details, null, 2)}
                    </pre>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* API Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>API Konfigurace</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">PrestaShop URL:</span>
                <p className="text-muted-foreground">http://cityecobadge.eu</p>
              </div>
              <div>
                <span className="font-medium">API Endpoint:</span>
                <p className="text-muted-foreground">/api</p>
              </div>
              <div>
                <span className="font-medium">API Key:</span>
                <p className="text-muted-foreground font-mono">6SZK...AGNV</p>
              </div>
              <div>
                <span className="font-medium">Output Format:</span>
                <p className="text-muted-foreground">JSON</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Link back to main site */}
        <div className="text-center mt-8">
          <Button variant="outline" onClick={() => window.location.href = '/'}>
            Zpět na hlavní stránku
          </Button>
        </div>
      </div>
    </div>
  );
}
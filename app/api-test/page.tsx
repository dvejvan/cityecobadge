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
  const [serverLogs, setServerLogs] = useState<string[]>([]);
  const [showLogs, setShowLogs] = useState(false);
  const [connectionLogs, setConnectionLogs] = useState<string[]>([]);
  const [isDiagnosticRunning, setIsDiagnosticRunning] = useState(false);

  const testConnection = async () => {
    console.log('Testing PrestaShop connection...');
    setIsTestingConnection(true);
    setConnectionResult(null);
    setServerLogs([]);

    try {
      const response = await fetch('/api/prestashop', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Connection test result:', result);
      setConnectionResult(result);
      
      // Fetch server logs after the connection test
      setTimeout(fetchServerLogs, 1000);
    } catch (error) {
      console.error('Connection test error:', error);
      setConnectionResult({
        success: false,
        error: 'Network error',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
      
      // Fetch server logs even on error
      setTimeout(fetchServerLogs, 1000);
    } finally {
      setIsTestingConnection(false);
    }
  };

  const fetchServerLogs = async () => {
    try {
      const response = await fetch('/api/logs');
      if (response.ok) {
        const logs = await response.json();
        setServerLogs(logs.map((log: any) => `${log.time}: ${log.log}`));
      }
    } catch (error) {
      console.log('Failed to fetch logs:', error);
    }
  };

  const testOrder = async () => {
    console.log('Testing order creation...');
    setIsTestingOrder(true);
    setOrderResult(null);
    setServerLogs([]);

    try {
      const response = await fetch('/api/prestashop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: 'Test',
          lastName: 'User',
          email: 'test@example.com',
          phone: '+49123456789',
          street: 'Musterstraße 1',
          city: 'Berlin',
          postalCode: '12345',
          licensePlate: 'M-TEST 123',
          fuelType: 'benzin',
          year: '2020',
          shippingType: 'standard'
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Order test result:', result);
      setOrderResult(result);
      
      // Fetch server logs after the test
      setTimeout(fetchServerLogs, 1000);
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

  const runDiagnostic = async () => {
    try {
      setIsDiagnosticRunning(true);
      setConnectionLogs(['🔍 Spouštím pokročilou diagnostiku...']);
      
      // Call debug endpoint with GET method
      const debugResponse = await fetch('/api/debug', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      
      const debugData = await debugResponse.json();
      console.log('🔍 Debug data:', debugData);
      
      setConnectionLogs(prev => [
        ...prev,
        `🔍 Environment: ${debugData.debug?.environment || 'unknown'}`,
        `🔍 Vercel Region: ${debugData.debug?.region || 'unknown'}`,
        `🔍 Has API Key: ${debugData.debug?.hasApiKey ? '✅ Ano' : '❌ Ne'}`,
        `🔍 PrestaShop URL: ${debugData.debug?.hasPrestashopUrl ? '✅ Nastaveno' : '❌ Chybí'}`,
        `🔍 External HTTPS: ${debugData.debug?.networkTest?.externalHttps || 'N/A'}`,
        `🔍 API Timeout: ${debugData.debug?.networkTest?.apiTimeout || 'N/A'}`,
        '🔍 Detaily uloženy do console.log'
      ]);
      
      // Get server logs too
      const logsResponse = await fetch('/api/logs');
      const logsData = await logsResponse.json();
      setServerLogs(logsData.map((log: any) => `${log.time}: ${log.log}`));
      
    } catch (error) {
      console.error('Debug failed:', error);
      setConnectionLogs(prev => [...prev, `❌ Debug failed: ${error}`]);
    } finally {
      setIsDiagnosticRunning(false);
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
                  
                  <div className="pt-3 border-t">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setShowLogs(!showLogs)}
                      className="w-full mb-2"
                    >
                      {showLogs ? 'Skrýt server logy' : 'Zobrazit server logy'}
                    </Button>
                    
                    {showLogs && (
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-sm font-medium">Server logy:</p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={fetchServerLogs}
                          >
                            Obnovit logy
                          </Button>
                        </div>
                        <pre className="text-xs bg-black text-green-400 p-3 rounded overflow-auto max-h-60 border font-mono">
                          {serverLogs.length > 0 ? serverLogs.join('\n') : 'Žádné logy k zobrazení...'}
                        </pre>
                      </div>
                    )}
                  </div>
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
                <div className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Výsledek:</span>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(orderResult.success)}
                      {getStatusBadge(orderResult.success)}
                    </div>
                  </div>
                  
                  {orderResult.message && (
                    <div className="bg-blue-50 border border-blue-200 rounded p-3">
                      <p className="text-sm text-blue-800 font-medium">Zpráva:</p>
                      <p className="text-sm text-blue-700">{orderResult.message}</p>
                    </div>
                  )}
                  
                  {orderResult.mock && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                      <p className="text-sm text-yellow-800 font-medium">⚠️ Mock režim aktivní</p>
                      <p className="text-xs text-yellow-700">Objednávka byla vytvořena v mock režimu kvůli problémům s API</p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {orderResult.orderId && (
                      <div>
                        <span className="font-medium text-green-600">Order ID:</span>
                        <p className="font-mono text-green-700">{orderResult.orderId}</p>
                      </div>
                    )}
                    
                    {orderResult.customerId && (
                      <div>
                        <span className="font-medium text-blue-600">Customer ID:</span>
                        <p className="font-mono text-blue-700">{orderResult.customerId}</p>
                      </div>
                    )}
                  </div>
                  
                  {orderResult.apiError && (
                    <div className="bg-red-50 border border-red-200 rounded p-3">
                      <p className="text-sm text-red-800 font-medium">API Chyba:</p>
                      <p className="text-sm text-red-700">{orderResult.apiError}</p>
                    </div>
                  )}
                  
                  {orderResult.error && (
                    <div className="bg-red-50 border border-red-200 rounded p-3">
                      <p className="text-sm text-red-800 font-medium">Chyba:</p>
                      <p className="text-sm text-red-700">{orderResult.error}</p>
                    </div>
                  )}
                  
                  {orderResult.order && (
                    <div>
                      <p className="text-sm font-medium mb-2">Detaily objednávky:</p>
                      <pre className="text-xs bg-gray-100 p-3 rounded overflow-auto max-h-32 border">
                        {JSON.stringify(orderResult.order, null, 2)}
                      </pre>
                    </div>
                  )}
                  
                  {orderResult.details && (
                    <div>
                      <p className="text-sm font-medium mb-2">Technické detaily:</p>
                      <pre className="text-xs bg-gray-100 p-3 rounded overflow-auto max-h-32 border">
                        {JSON.stringify(orderResult.details, null, 2)}
                      </pre>
                    </div>
                  )}
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Kompletní odpověď:</p>
                    <pre className="text-xs bg-gray-50 p-3 rounded overflow-auto max-h-40 border">
                      {JSON.stringify(orderResult, null, 2)}
                    </pre>
                  </div>
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
                <p className="text-muted-foreground">https://cityecobadge.eu</p>
              </div>
              <div>
                <span className="font-medium">API Endpoint:</span>
                <p className="text-muted-foreground">/api</p>
              </div>
              <div>
                <span className="font-medium">API Key:</span>
                <p className="text-muted-foreground font-mono">KNG7...6ZTV</p>
              </div>
              <div>
                <span className="font-medium">Output Format:</span>
                <p className="text-muted-foreground">JSON</p>
              </div>
            </div>
            
            {/* Enhanced Debug Section */}
            <div className="mt-6 pt-6 border-t">
              <h3 className="font-semibold mb-4 text-lg">🔍 Pokročilá diagnostika</h3>
              <div className="space-y-3">
                <Button
                  onClick={runDiagnostic}
                  disabled={isDiagnosticRunning}
                  className="bg-purple-600 text-white hover:bg-purple-700 w-full"
                >
                  {isDiagnosticRunning ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Spouštím diagnostiku...
                    </>
                  ) : (
                    '🔍 Spustit diagnostiku pro produkci'
                  )}
                </Button>

                {connectionLogs.length > 0 && (
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Výsledky diagnostiky:</h4>
                    <pre className="text-xs bg-black text-green-400 p-3 rounded overflow-auto max-h-60 border font-mono">
                      {connectionLogs.join('\n')}
                    </pre>
                  </div>
                )}
                
                <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded">
                  <p><strong>Tip:</strong> Pokud v produkci nevidíte logy, použijte tuto diagnostiku pro detailní analýzu problémů s API.</p>
                  <p>Všechny výsledky se ukládají také do browser console (F12 → Console).</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Link back to main site */}
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            asChild
          >
            <a href="/">Zpět na hlavní stránku</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RefreshCw, Download, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface LogEntry {
  time: string;
  stream: string;
  log: string;
}

interface OrderData {
  email: string;
  city: string;
  licenseplate: string;
  timestamp: string;
  status: string;
}

export default function AdminDashboard() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [orders, setOrders] = useState<OrderData[]>([]);
  const [stats, setStats] = useState({
    totalOrders: 0,
    successfulOrders: 0,
    failedOrders: 0,
    mockOrders: 0,
    uptime: '99.5%'
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchLogs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/logs');
      const data = await response.json();
      setLogs(data);
      console.log('Admin dashboard: Logs fetched', data);
    } catch (error) {
      console.error('Admin dashboard: Failed to fetch logs', error);
    }
    setIsLoading(false);
  };

  const fetchStats = async () => {
    // Simulace statistik - v produkci by se braly z databáze
    const mockStats = {
      totalOrders: Math.floor(Math.random() * 1000) + 500,
      successfulOrders: Math.floor(Math.random() * 800) + 400,
      failedOrders: Math.floor(Math.random() * 50) + 10,
      mockOrders: Math.floor(Math.random() * 200) + 50,
      uptime: '99.5%'
    };
    setStats(mockStats);
    console.log('Admin dashboard: Stats updated', mockStats);
  };

  const fetchOrders = async () => {
    // Simulace objednávek - v produkci by se braly z databáze/logů
    const mockOrders = [
      {
        email: 'kunde@example.com',
        city: 'Berlin',
        licenseplate: 'B-AB 123',
        timestamp: new Date().toISOString(),
        status: 'success'
      },
      {
        email: 'test@example.de',
        city: 'München',
        licenseplate: 'M-CD 456',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        status: 'mock'
      },
      {
        email: 'info@example.org',
        city: 'Hamburg',
        licenseplate: 'HH-EF 789',
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        status: 'failed'
      }
    ];
    setOrders(mockOrders);
    console.log('Admin dashboard: Orders fetched', mockOrders);
  };

  useEffect(() => {
    fetchLogs();
    fetchStats();
    fetchOrders();
    
    // Auto-refresh každých 30 sekund
    const interval = setInterval(() => {
      fetchLogs();
      fetchStats();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const exportLogs = () => {
    const dataStr = JSON.stringify(logs, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `logs-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    console.log('Admin dashboard: Logs exported');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return <Badge className="bg-green-500"><CheckCircle className="w-3 h-3 mr-1" />Úspěch</Badge>;
      case 'failed':
        return <Badge variant="destructive"><AlertTriangle className="w-3 h-3 mr-1" />Chyba</Badge>;
      case 'mock':
        return <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" />Mock</Badge>;
      default:
        return <Badge variant="outline">Neznámý</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Monitoring systému Umweltplakette</p>
          </div>
          <Button onClick={fetchLogs} disabled={isLoading} className="bg-green-600 hover:bg-green-700">
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Obnovit
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Celkem objednávek</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.totalOrders}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Úspěšné</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.successfulOrders}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Chybné</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{stats.failedOrders}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Mock režim</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{stats.mockOrders}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Uptime</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{stats.uptime}</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="logs" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 bg-white">
            <TabsTrigger value="logs">Server Logy</TabsTrigger>
            <TabsTrigger value="orders">Objednávky</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          </TabsList>

          <TabsContent value="logs" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Server Logy</CardTitle>
                    <CardDescription>Real-time logy ze serveru</CardDescription>
                  </div>
                  <Button variant="outline" onClick={exportLogs}>
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96 w-full border rounded-lg p-4 bg-gray-50">
                  {logs.length > 0 ? (
                    logs.map((log, index) => (
                      <div key={index} className="mb-2 text-sm font-mono">
                        <span className="text-gray-500">{new Date(log.time).toLocaleString()}</span>
                        <span className="mx-2 text-blue-600">[{log.stream}]</span>
                        <span>{log.log}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      Žádné logy k zobrazení
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Poslední objednávky</CardTitle>
                <CardDescription>Přehled posledních objednávek a jejich stavů</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {orders.map((order, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium">{order.email}</div>
                        <div className="text-sm text-gray-600">{order.city} • {order.licenseplate}</div>
                        <div className="text-xs text-gray-500">{new Date(order.timestamp).toLocaleString()}</div>
                      </div>
                      <div>
                        {getStatusBadge(order.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>API Zdraví</CardTitle>
                  <CardDescription>Stav připojení k PrestaShop API</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>PrestaShop API</span>
                      <Badge variant="destructive">Nedostupné (Sandbox omezení)</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Fallback režim</span>
                      <Badge className="bg-green-500">Aktivní</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Log systém</span>
                      <Badge className="bg-green-500">Funkční</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Výkonnost</CardTitle>
                  <CardDescription>Metriky výkonnosti aplikace</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Průměrná doba odpovědi</span>
                      <span className="font-mono">245ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Success rate</span>
                      <span className="font-mono text-green-600">94.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Error rate</span>
                      <span className="font-mono text-red-600">5.8%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
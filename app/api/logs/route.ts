import { NextResponse } from 'next/server';

// Globální log storage pro development
let logStorage: Array<{time: string, stream: string, log: string}> = [];

export function addLog(message: string, stream = 'stdout') {
  const logEntry = {
    time: new Date().toISOString(),
    stream,
    log: message
  };
  logStorage.push(logEntry);
  
  // Udržuj pouze posledních 100 logů
  if (logStorage.length > 100) {
    logStorage = logStorage.slice(-100);
  }
  
  console.log(`[${stream}] ${message}`);
}

export async function GET() {
  try {
    // Vrať real logy nebo mock data pokud nejsou k dispozici
    const logs = logStorage.length > 0 ? logStorage : [
      {
        time: new Date().toISOString(),
        stream: 'system',
        log: 'Admin dashboard initialized'
      },
      {
        time: new Date().toISOString(),
        stream: 'info',
        log: 'Waiting for API activities...'
      }
    ];

    return NextResponse.json(logs);
  } catch (error) {
    console.error('Failed to fetch logs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch logs' },
      { status: 500 }
    );
  }
}
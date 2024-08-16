'use client';
import StockBookmark from '@/components/StockBookmark';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Check if the script has already been added
    if (!document.getElementById('tradingview-widget-script')) {
      const script = document.createElement('script');
      script.id = 'tradingview-widget-script'; // Give the script an ID
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500 Index' },
          { proName: 'FOREXCOM:NSXUSD', title: 'US 100 Cash CFD' },
          { proName: 'FX_IDC:EURUSD', title: 'EUR to USD' },
          { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
          { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' },
        ],
        showSymbolLogo: true,
        isTransparent: true,
        displayMode: 'adaptive',
        colorTheme: 'light',
        locale: 'en',
      });
      document.getElementById('tradingview-widget')?.appendChild(script);
    }
  }, []);

  return (
    <div className="App">
      <div>
        <div id="tradingview-widget"></div>
      </div>
      <StockBookmark />
    </div>
  );
}

export default App;

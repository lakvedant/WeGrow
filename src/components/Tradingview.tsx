import React, { useEffect } from 'react';

interface TradingViewWidgetProps {
  symbol: string;
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ symbol }) => {
  useEffect(() => {
    const containerId = `tradingview-widget-container-${symbol}`;
    const existingScript = document.getElementById(containerId)?.querySelector('script');

    // Check if the script already exists in the container
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbol: symbol,
        width: '100%',
        colorTheme: 'light',
        isTransparent: false,
        locale: 'en',
      });
      document.getElementById(containerId)?.appendChild(script);
    }
  }, [symbol]);

  return (
    <div id={`tradingview-widget-container-${symbol}`} className='h-[100px] w-[350px] mt-8'>
    </div>
  );
};

export default TradingViewWidget;

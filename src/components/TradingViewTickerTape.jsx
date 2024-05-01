import React, { useEffect } from 'react';

const TradingViewTickerTape = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
        { description: "Dodge", proName: "BITFINEX:DOGEUSD" },
        { description: "Shiba", proName: "COINBASE:SHIBUSD" },
        { description: "Avalance", proName: "BINANCE:AVAUSD" },
        { description: "Ripple", proName: "KRAKEN:XRPUSD" },
        { description: "BNB", proName: "BINANCE:BNBUSD" },
        { description: "Jupiter", proName: "COINBASE:JTOUSD" },
        { description: "DOT", proName: "BINANCE:DOTUSDT" },
        { description: "Google", proName: "NASDAQ:GOOG" },
        { description: "Amazon", proName: "NASDAQ:AMZN" },
        { description: "Netflix", proName: "NASDAQ:NFLX" },
        { description: "Meta", proName: "NASDAQ:META" },
        { description: "Tesla", proName: "NASDAQ:TSLA" },
        { description: "Solona", proName: "CRYPTO:SOLUSD" }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en"
    });

    // Append the script to the #tradePrice element
    const tradePriceElement = document.getElementById('tradePrice');
    if (tradePriceElement) {
      tradePriceElement.appendChild(script);
    }

    // Clean up by removing the script from the #tradePrice element when the component unmounts
    return () => {
      if (tradePriceElement && script.parentNode === tradePriceElement) {
        tradePriceElement.removeChild(script);
      }
    };
  }, []);

  // return (
  //   <div className="tradingview-widget-container">
  //     <div className="tradingview-widget-container__widget"></div>
  //     <div className="tradingview-widget-copyright">
  //       <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
  //         <span className="blue-text">Track all markets on TradingView</span>
  //       </a>
  //     </div>
  //   </div>
  // );
};

export default TradingViewTickerTape;

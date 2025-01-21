import React, { useState } from 'react';
import TradingViewWidget from './Tradingview';

const StockBookmark: React.FC = () => {
  const [bookmarks, setBookmarks] = useState([
    { symbol: 'NASDAQ:AAPL', name: 'Apple' },
    { symbol: 'NASDAQ:GOOGL', name: 'Google' },
  ]);

  const [newSymbol, setNewSymbol] = useState('');
  const [newName, setNewName] = useState('');

  const addBookmark = () => {
    if (newSymbol && newName) {
      setBookmarks([...bookmarks, { symbol: newSymbol, name: newName }]);
      setNewSymbol('');
      setNewName('');
    }
  };

  return (
    <div className="text-center pt-8">
      <div>
        <input
          type="text"
          placeholder="Stock Name"
          value={newSymbol}
          onChange={(e) => setNewSymbol(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Stock Ref Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={addBookmark} style={{ marginLeft: '10px' }}>
          Add Bookmark
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-14'>
        {bookmarks.map((bookmark, index) => (
          <div key={`${bookmark.symbol}-${index}`}>
            <TradingViewWidget symbol={bookmark.symbol} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockBookmark;

import React from 'react';
import Terminal from 'react-terminal-ui';

const commands = {
    'greet': () => 'Hello, world!',
    'date': () => new Date().toString(),
  };
  
  function App() {
    return (
      <Terminal commands={commands} />
    );
  }
  
  export default App;

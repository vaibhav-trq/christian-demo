import React from 'react';
import './App.css';

const ENVIRONMENT = process.env.NODE_ENV;

const Prompt = () =>
  <p>
    (Edit <code>components/web/src/App.js</code> and save to reload)
  </p>

const App = () => 
  <div className="App">
    <header className="App-header">
      <h1>
        Your new web app, stamped out with <span role="img" aria-label="love">💖</span> and care by&nbsp; 
        <a className="bp-link" href="https://platter.dev" target="_blank" rel="noopener noreferrer">Platter</a>
      </h1>
      <h2>
        <span role="img" aria-label="GOGOGO">🏃</span> now get going!
      </h2>
      { ENVIRONMENT === 'development' ? <Prompt /> : null }
    </header>
  </div>;

export default App;

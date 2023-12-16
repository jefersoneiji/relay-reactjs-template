import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RelayProvider } from './relay/relay-provider';
import { RelayConsumer } from './relay-consumer';

function App() {
  return (
    <RelayProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <RelayConsumer />
        </header>
      </div>
    </RelayProvider>

  );
}

export default App;
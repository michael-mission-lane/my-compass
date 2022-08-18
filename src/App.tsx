import React from 'react';
import logo from './logo.svg';
import './App.css';
import { P1 } from '@missionlane/compass-ui';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <P1>
          Edit <code>src/App.tsx</code> and save to reload.
        </P1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
// Handle console logs
import 'utils/dropConsole';
import './App.css';
import logo from './assets/images/logo.svg';
import {SharedComp, ComplexShared} from './components';
// import Home from "./pages/Home"
import Home from "pages/Home"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SharedComp />
        <Home />
        <ComplexShared />
        <img src={logo} width="50px" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

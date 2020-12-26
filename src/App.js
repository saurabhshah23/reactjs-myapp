import React, { useState } from "react";
// Handle console logs
import "utils/dropConsole";
import "fontsource-roboto";
import "./App.css";
import logo from "./assets/images/logo.svg";
import { SharedComp, ComplexShared } from "./components";
// ROUTER
import Home from "pages/Home";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";
// MUI Theme
import { ThemeProvider, Button, createMuiTheme } from "@material-ui/core";
// import theme from "styles/muiTheme";
import { Typography } from "@material-ui/core";
import { ThemeSwitch } from "components/ThemeSwitch";
import { dark, light } from "styles/muiTheme";

function App() {
  const [darkState, setDarkState] = useState(true);
  const handleThemeChange = () => {
    setDarkState(!darkState);
    console.log("theme=", darkState ? "dark" : "light");
  };

  return (
    <>
      <div>
        <ThemeProvider theme={darkState ? dark() : light()}>
          <ThemeSwitch
            darkState={darkState}
            handleThemeChange={handleThemeChange}
          />
          <BrowserRouter>
            <RouterConfig />
          </BrowserRouter>
        </ThemeProvider>
      </div>
      <div style={{ display: "block" }}>
        <br />
        <hr />
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
    </>
  );
}

export default App;

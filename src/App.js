import React, { useState } from "react";
// Handle console logs
import "utils/dropConsole";
// Styles
import "fontsource-roboto";
// ROUTER
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";
// MUI Theme
import { ThemeProvider, Button, createMuiTheme } from "@material-ui/core";
import { ThemeSwitch } from "components/ThemeSwitch";
import { dark, light } from "styles/muiTheme";
import "./App.css";
import { ProvideAuth } from "navigation/Auth/ProvideAuth";
// Redux
import { Provider } from "react-redux";
import {store} from "redux/store";

function App() {
  const [darkState, setDarkState] = useState(false);
  const handleThemeChange = () => {
    setDarkState(!darkState);
    console.log("theme=", darkState ? "dark" : "light");
  };

  return (
    <>
      <div>
        <Provider store={store}>
          <ThemeProvider theme={darkState ? dark() : light()}>
            <ThemeSwitch
              darkState={darkState}
              handleThemeChange={handleThemeChange}
            />
            <ProvideAuth>
              <BrowserRouter>
                <RouterConfig />
              </BrowserRouter>
            </ProvideAuth>
          </ThemeProvider>
        </Provider>
      </div>
    </>
  );
}

export default App;

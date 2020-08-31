import React, { useEffect, useContext } from "react";
import { Store } from "./store";
import { Switch, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import "./App.scss";

import LanguageSwitch from "./components/LanguageSwitch";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

import { _showMessage } from "./utils/showMessage";
import { _cursorEffect } from "./utils/cursorEffect";

import { theme } from "./style/theme";

function App() {
  const {
    mediaQueries: { isItSmallerThanLaptop },
  } = useContext(Store);

  const location = useLocation();

  useEffect(() => {
    _showMessage();
    if (!isItSmallerThanLaptop)
      document.querySelector(".hover-container").addEventListener("mousemove", _cursorEffect);
    else document.querySelector(".hover-container").removeEventListener("mousemove", _cursorEffect);
  }, [location]);

  return (
    <div className="App">
      <div className="hover-container"></div>
      <ThemeProvider theme={theme}>
        <LanguageSwitch />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;

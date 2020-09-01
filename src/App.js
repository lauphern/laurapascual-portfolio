import React, { useEffect, useContext } from "react";
import { Store } from "./store";
import { Switch, Route, useLocation } from "react-router-dom";
import { Fab } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import CodeSharpIcon from "@material-ui/icons/CodeSharp";
import "./App.scss";

import LanguageSwitch from "./components/LanguageSwitch";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

import { _showMessage } from "./utils/showMessage";
import { _cursorEffect } from "./utils/cursorEffect";

import { theme } from "./style/theme";

import { useAppStyles } from "./style/useStyles";

function App() {
  const {
    mediaQueries: { isItSmallerThanLaptop },
  } = useContext(Store);

  const location = useLocation();

  const appClasses = useAppStyles();

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
        <Fab
          variant="extended"
          size="medium"
          href="https://github.com/users/lauphern/projects/2"
          className={`${appClasses.sourceCodeBtn} ${appClasses.routerBtn}`}
          target="_blank"
          rel="noopener"
        >
          <CodeSharpIcon fontSize="small" />
          &nbsp;
          <span>
            Source
            <br />
            code
          </span>
        </Fab>
      </ThemeProvider>
    </div>
  );
}

export default App;

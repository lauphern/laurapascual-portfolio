import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Fab } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import CodeSharpIcon from "@material-ui/icons/CodeSharp";
import "./App.scss";

import LanguageSwitch from "./components/LanguageSwitch";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

import { _showMessage } from "./utils/showMessage";

import { theme } from "./style/theme";

import { useAppStyles } from "./style/useStyles";

function App() {
  const location = useLocation();

  const appClasses = useAppStyles();

  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    _showMessage();
  }, [location]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div style={{display: !domReady ? "none" : "block"}}>
          <LanguageSwitch />
          <Switch>
            <Route exact path="/">
              <Home setDomReady={setDomReady}/>
            </Route>
            <Route path="/resume">
              <Resume setDomReady={setDomReady}/>
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
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;

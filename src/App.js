import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import "./App.scss";

import LanguageSwitch from "./components/LanguageSwitch";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

import { theme } from "./style/theme";

function App() {
  return (
    <div className="App">
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

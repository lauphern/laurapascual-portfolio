import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import "./App.scss";

import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

import { theme } from "./style/theme";

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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

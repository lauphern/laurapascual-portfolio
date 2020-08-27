import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { ThemeProvider } from "@material-ui/core/styles";
import "./App.scss";

import Home from "./pages/Home";
import Resume from "./pages/Resume";

import { theme } from "./style/theme";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    // trail: 1000,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {transitions.map(({ item: location, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={location}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
            </Switch>
          </animated.div>
        ))}
      </ThemeProvider>
    </div>
  );
}

export default App;

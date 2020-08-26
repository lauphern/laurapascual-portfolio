import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Container, Grid } from "@material-ui/core";
import "./App.scss";

import { Switch, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import Bio from "./components/Bio";
import Links from "./components/Links";

import { theme } from "./style/theme";
import { useAppStyles } from "./style/useStyles";
import { _cursorEffect } from "./utils/cursorEffect";

function App() {
  const classes = useAppStyles();

  const isItSmallDevice = useMediaQuery("(max-width:320px)");
  const isItSmallTablet = useMediaQuery("(max-width:834px)");
  const isItTablet = useMediaQuery("(max-width:1100px)");
  const isItSmallerThanLaptop = useMediaQuery("(max-width:1199px)");

  useEffect(() => {
    if (!isItSmallerThanLaptop)
      document.querySelector(".hover-container").addEventListener("mousemove", _cursorEffect);
    else document.querySelector(".hover-container").removeEventListener("mousemove", _cursorEffect);
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <div className="hover-container"></div>
            <Container className={`${classes.mainContainer} ${classes.layout}`} disableGutters>
              <Grid
                className={classes.layout}
                container
                alignContent="center"
                justify="space-between"
              >
                <Bio isItSmallDevice={isItSmallDevice} isItSmallTablet={isItSmallTablet} />
                <Links isItSmallTablet={isItSmallTablet} isItTablet={isItTablet} />
              </Grid>
            </Container>
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

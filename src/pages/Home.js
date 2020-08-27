import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import { Container, Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Bio from "../components/Bio";
import Links from "../components/Links";

import { useAppStyles } from "../style/useStyles";
import { _cursorEffect } from "../utils/cursorEffect";

const Home = props => {
  const classes = useAppStyles();

  const isItSmallDevice = useMediaQuery("(max-width:320px)");
  const isItSmallTablet = useMediaQuery("(max-width:834px)");
  const isItTablet = useMediaQuery("(max-width:1100px)");
  const isItSmallerThanLaptop = useMediaQuery("(max-width:1199px)");

  const [show, set] = useState(true);
  const leftPanelTransition = useTransition(show, null, {
    unique: true,
    reset: true,
    from: { transform: "translate3d(-500px,0,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
    leave: { transform: "translate3d(-500px,0,0)", opacity: 0 },
  });
  const rightPanelTransition = useTransition(show, null, {
    unique: true,
    reset: true,
    from: { transform: "translate3d(500px,0,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
    leave: { transform: "translate3d(500px,0,0)", opacity: 0 },
  });

  useEffect(() => {
    if (!isItSmallerThanLaptop)
      document.querySelector(".hover-container").addEventListener("mousemove", _cursorEffect);
    else document.querySelector(".hover-container").removeEventListener("mousemove", _cursorEffect);
  });

  return (
    <>
      <div className="hover-container"></div>
      <Container className={`${classes.mainContainer} ${classes.layout}`} disableGutters>
        <Grid className={classes.layout} container alignContent="center" justify="space-between">
          {leftPanelTransition.map(
            ({ item, props, key }) =>
              item && (
                <animated.div key={key} style={props}>
                  <Bio isItSmallDevice={isItSmallDevice} isItSmallTablet={isItSmallTablet} />
                </animated.div>
              )
          )}
          {rightPanelTransition.map(
            ({ item, props, key }) =>
              item && (
                <animated.div key={key} style={props}>
                  <Links isItSmallTablet={isItSmallTablet} isItTablet={isItTablet} />
                </animated.div>
              )
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Home;

import React, { useEffect } from "react";
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
          <Bio isItSmallDevice={isItSmallDevice} isItSmallTablet={isItSmallTablet} />
          <Links isItSmallTablet={isItSmallTablet} isItTablet={isItTablet} />
        </Grid>
      </Container>
    </>
  );
};

export default Home;

import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Bio from "../components/home/Bio";
import Links from "../components/home/Links";

import { useAppStyles } from "../style/useStyles";
import { _cursorEffect } from "../utils/cursorEffect";

const Home = props => {
  const classes = useAppStyles();

  //TODO tal vez usar context para todos los media queries? Y mas cosas que se puedan centralizar
  // const isItSmallDevice = useMediaQuery("(max-width:400px)");
  // const isItSmallTablet = useMediaQuery("(max-width:834px)");
  // const isItTablet = useMediaQuery("(max-width:1100px)");
  const isItSmallerThanLaptop = useMediaQuery("(max-width:1199px)");

  useEffect(() => {
    if (!isItSmallerThanLaptop)
      document.querySelector(".hover-container").addEventListener("mousemove", _cursorEffect);
    else document.querySelector(".hover-container").removeEventListener("mousemove", _cursorEffect);
  });

  return (
    <>
      <div className="hover-container"></div>
        <Grid container className={classes.layout} alignContent="center" justify="space-between">
          <Bio />
          <Links />
        </Grid>
    </>
  );
};

export default Home;

import React, { useEffect, useContext } from "react";
import { Store } from "../store";
import { Grid } from "@material-ui/core";

import Bio from "../components/home/Bio";
import Links from "../components/home/Links";

import { useAppStyles } from "../style/useStyles";
import { _cursorEffect } from "../utils/cursorEffect";

const Home = props => {
  const classes = useAppStyles();

  const { mediaQueries: { isItSmallerThanLaptop } } = useContext(Store);

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

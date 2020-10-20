import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";

import Bio from "../components/home/Bio";
import Links from "../components/home/Links";

import { useAppStyles } from "../style/useStyles";

const Home = props => {
  const classes = useAppStyles();

  useEffect(() => {
    // props.setDomReady(true);
    let i = 0;
    const counter = setInterval(() => {
      document.querySelector("#domLoader > span").innerText = i;
      i += 2;
      if (i > 100) return clearInterval(counter);
    }, 100);
    setTimeout(() => {
      props.setDomReady(true);
      document.querySelector("#domLoader").style.display = "none";
    }, 1000);
  }, []);

  return (
    <>
      <Grid container className={classes.layout} alignContent="center" justify="space-between">
        <Bio />
        <Links />
      </Grid>
    </>
  );
};

export default Home;

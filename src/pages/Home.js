import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";

import Bio from "../components/home/Bio";
import Links from "../components/home/Links";

import { useAppStyles } from "../style/useStyles";

const Home = props => {
  const classes = useAppStyles();

  useEffect(() => {
    setTimeout(() => {
      props.setDomReady(true);
      document.querySelector("#domLoader").classList.add("progressFade");
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

import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";

import Bio from "../components/home/Bio";
import Links from "../components/home/Links";

import { useAppStyles } from "../style/useStyles";

const Home = props => {
  const classes = useAppStyles();

  const { setLoaderNumber, counterRef } = props;

  useEffect(() => {
    clearInterval(counterRef.current);
    setLoaderNumber(0);
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

import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

import { useBioStyles } from "../style/useStyles";

const Typewriter = props => {
  const bioClasses = useBioStyles();

  return (
    <Typography variant="h1" className={props.isItSmallDevice && bioClasses.h1Mobile}>
      <span className={bioClasses.firstName}>Laura</span>
      <br />
      Pascual
      <span className={bioClasses.type}>_</span>
    </Typography>
  );
};

export default Typewriter;

import React from "react";
import { Typography } from "@material-ui/core";

import Typewriter from "../components/Typewriter";

import { useBioStyles } from "../style/useStyles";

import { translations } from "../data/translations";

const Header = props => {
  const bioClasses = useBioStyles();

  return (
    <>
      <Typewriter isItSmallDevice={props.isItSmallDevice} />
      <Typography variant="h2" className={props.isItSmallDevice && bioClasses.h2Mobile}>
        {translations[props.lang].subtitle}
      </Typography>
    </>
  );
};

export default Header;

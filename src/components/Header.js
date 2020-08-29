import React from "react";
import { Typography } from "@material-ui/core";
import { useTranslation } from 'react-i18next';

import Typewriter from "../components/Typewriter";

import { useBioStyles } from "../style/useStyles";


const Header = props => {
  const { t, i18n } = useTranslation();

  const bioClasses = useBioStyles();

  return (
    <>
      <Typewriter isItSmallDevice={props.isItSmallDevice} />
      <Typography variant="h2" className={props.isItSmallDevice && bioClasses.h2Mobile}>
        {t("subtitle")}
      </Typography>
    </>
  );
};

export default Header;

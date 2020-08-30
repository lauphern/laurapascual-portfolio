import React from "react";
import { Typography } from "@material-ui/core";
import { useTranslation } from 'react-i18next';
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Typewriter from "../components/Typewriter";

import { useAppStyles } from "../style/useStyles";


const Header = props => {
  const { t, i18n } = useTranslation();

  const isItSmallDevice = useMediaQuery("(max-width:400px)");

  const appClasses = useAppStyles();

  return (
    <>
      <Typewriter />
      <Typography variant="h2" className={isItSmallDevice && appClasses.h2Mobile}>
        {t("subtitle")}
      </Typography>
    </>
  );
};

export default Header;

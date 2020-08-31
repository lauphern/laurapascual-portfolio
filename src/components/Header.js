import React, { useContext } from "react";
import { Store } from "../store";
import { Typography } from "@material-ui/core";
import { useTranslation } from 'react-i18next';

import Typewriter from "../components/Typewriter";

import { useAppStyles } from "../style/useStyles";


const Header = props => {
  const { t, i18n } = useTranslation();

  const { mediaQueries: {isItSmallDevice} } = useContext(Store);

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

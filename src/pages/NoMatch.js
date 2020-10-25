import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Container, Typography, Button } from "@material-ui/core";
import ErrorSharpIcon from '@material-ui/icons/ErrorSharp';
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";

import { useAppStyles } from "../style/useStyles";

const NoMatch = props => {
  let history = useHistory();

  const appClasses = useAppStyles();

  const { t } = useTranslation();

  const { setLoaderNumber, counterRef } = props;

  useEffect(() => {
    clearInterval(counterRef.current);
    setLoaderNumber(0);
  }, []);

  return (
    <Container className={appClasses["404Page"]}>
      <Typography variant="h3"><ErrorSharpIcon fontSize="inherit" /> 404</Typography>
      <Typography variant="h3">{t("404Error")}</Typography>
      <Button
        variant="outlined"
        className={`${appClasses.routerBtn}`}
        size="small"
        onClick={() => history.goBack()}
      ><ArrowBackIosSharpIcon />
        &nbsp;{t("goBack")}
      </Button>
    </Container>
  );
};

export default NoMatch;

import React from 'react';
import {
  ButtonGroup,
  Button
} from "@material-ui/core";
import { useTranslation } from 'react-i18next';


import { useAppStyles, useBioStyles } from "../style/useStyles";

const LanguageSwitch = props => {
  const bioClasses = useBioStyles();
  const appClasses = useAppStyles();

  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const getLanguage = () => i18n.language || window.localStorage.i18nextLng || '';

  return(
    <ButtonGroup variant="text" size="small" className={bioClasses.languageSwitch}>
        <Button
          onClick={() => changeLanguage("en")}
          className={`${bioClasses.pointer} ${appClasses.link} ${bioClasses.languageBtn} ${
            getLanguage().includes("en") && bioClasses.languageBtnActive
          }`}
        >
          EN
        </Button>
        <Button
          onClick={() => changeLanguage("es")}
          className={`${bioClasses.pointer} ${appClasses.link} ${bioClasses.languageBtn} ${
            getLanguage().includes("es") && bioClasses.languageBtnActive
          }`}
        >
          ES
        </Button>
      </ButtonGroup>
  )
}

export default LanguageSwitch
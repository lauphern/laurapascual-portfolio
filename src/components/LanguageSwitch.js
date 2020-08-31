import React from "react";
import { useLocation } from "react-router-dom";
import { ButtonGroup, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useTransition, animated } from "react-spring";

import { useAppStyles } from "../style/useStyles";

const LanguageSwitch = props => {
  const appClasses = useAppStyles();

  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  //TODO poner en Context
  const getLanguage = () => i18n.language || window.localStorage.i18nextLng || "";

  const location = useLocation();
  const fadeInOut = useTransition(location, location => location.pathname, {
    unique: true,
    reset: true,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      {fadeInOut.map(
        ({ item, props, key }) =>
          item && (
            <animated.div key={key} style={props}>
              <ButtonGroup variant="text" size="small" className={appClasses.languageSwitch}>
                <Button
                  onClick={() => changeLanguage("en")}
                  className={`${appClasses.pointer} ${appClasses.languageBtn} ${
                    getLanguage().includes("en") && appClasses.languageBtnActive
                  }`}
                >
                  EN
                </Button>
                <Button
                  onClick={() => changeLanguage("es")}
                  className={`${appClasses.pointer} ${appClasses.languageBtn} ${
                    getLanguage().includes("es") && appClasses.languageBtnActive
                  }`}
                >
                  ES
                </Button>
              </ButtonGroup>
            </animated.div>
          )
      )}
    </>
  );
};

export default LanguageSwitch;

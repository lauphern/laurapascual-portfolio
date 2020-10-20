import React, { useState, useEffect, useContext } from "react";
import { Store } from "../store";
import { Link as RouterLink } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { Container, Box, Button } from "@material-ui/core";
import KeyboardReturnSharpIcon from "@material-ui/icons/KeyboardReturnSharp";
import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import Pdf from "../components/resume/Pdf";
import Docs from "../components/resume/Docs";

import { useAppStyles, useResumeStyles } from "../style/useStyles";

const Resume = props => {
  const { t, i18n } = useTranslation();

  const {
    mediaQueries: { isItSmallTablet },
  } = useContext(Store);

  const resumeClasses = useResumeStyles();
  const appClasses = useAppStyles();

  const [show, set] = useState(true);
  const headerTransition = useTransition(show, null, {
    unique: true,
    reset: true,
    from: { transform: "translate3d(0,-200px,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
    leave: { transform: "translate3d(0,-200px,0)", opacity: 0 },
  });
  const resumeTransition = useTransition(show, null, {
    unique: true,
    reset: true,
    from: { transform: "translate3d(0,200px,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
    leave: { transform: "translate3d(0,200px,0)", opacity: 0 },
  });

  useEffect(() => {
    // props.setDomReady(true);
    setTimeout(()=>props.setDomReady(true), 1000)
  }, []);

  return (
    <>
      <Box className={resumeClasses.headerPlaceholder}></Box>
      <Container className={resumeClasses.headerContainer} disableGutters>
        {headerTransition.map(
          ({ item, props, key }) =>
            item && (
              <animated.div key={key} style={props}>
                <Container className={resumeClasses.headerText} disableGutters>
                  <Header />
                  <Button
                    variant="outlined"
                    className={`${appClasses.routerBtn} ${appClasses.pointer}`}
                    component={RouterLink}
                    to="/"
                    size="small"
                  >
                    <KeyboardReturnSharpIcon />
                    &nbsp;{t("home")}
                  </Button>
                </Container>
              </animated.div>
            )
        )}
      </Container>
      <Container
        className={`${resumeClasses.resumeContainer} ${
          isItSmallTablet && resumeClasses.resumeContainerMobile
        }`}
        disableGutters
      >
        {resumeTransition.map(
          ({ item, props, key }) =>
            item && (
              <animated.div key={key} style={props}>
                <>
                  <Pdf />
                  <Docs />
                </>
              </animated.div>
            )
        )}
        <Box className={resumeClasses.resumeContainerBg} />
      </Container>
    </>
  );
};

export default Resume;

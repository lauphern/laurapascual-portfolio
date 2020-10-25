import React, { useState, useEffect, useContext } from "react";
import { Store } from "../store";
import { Link as RouterLink } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { Container, Box, Button } from "@material-ui/core";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import Docs from "../components/resume/Docs";

import { useAppStyles, useResumeStyles } from "../style/useStyles";

//TODO style children

const Resume = props => {
  const { t } = useTranslation();

  const { setLoaderNumber, counterRef } = props;

  const {
    mediaQueries: { isItSmallTablet, isItShortHeight },
  } = useContext(Store);

  const resumeClasses = useResumeStyles();
  const appClasses = useAppStyles();

  const [show, setShow] = useState(true);
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
    clearInterval(counterRef.current);
    setLoaderNumber(0);
  }, []);

  return (
    <>
      <Box
        className={`${resumeClasses.headerPlaceholder} ${
          isItShortHeight && resumeClasses.headerPlaceholderLandscape
        }`}
      ></Box>
      <Container
        className={`${resumeClasses.headerContainer} ${
          isItShortHeight && resumeClasses.headerContainerLandscape
        }`}
        disableGutters
      >
        {headerTransition.map(
          ({ item, props, key }) =>
            item && (
              <animated.div key={key} style={props}>
                <Container className={resumeClasses.headerText} disableGutters>
                  <Header />
                  <Button
                    variant="outlined"
                    className={`${appClasses.routerBtn}`}
                    component={RouterLink}
                    to="/"
                    size="small"
                  >
                    <ArrowBackIosSharpIcon />
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
        {/* {resumeTransition.map(
          ({ item, props, key }) =>
            item && (
              <animated.div key={key} style={props}>
                <> */}
                  <Docs />
                {/* </>
              </animated.div>
            )
        )} */}
      </Container>
    </>
  );
};

export default Resume;

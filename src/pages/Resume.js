import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { Container, Button } from "@material-ui/core";
import KeyboardReturnSharpIcon from "@material-ui/icons/KeyboardReturnSharp";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

import Header from "../components/Header";

import { translations } from "../data/translations";

import "./Resume.scss";
import { useAppStyles } from "../style/useStyles";
import { useResumeStyles } from "../style/useStyles";

const Resume = props => {
  const resumeClasses = useResumeStyles();
  const appClasses = useAppStyles();

  // const [items, set] = useState([...])
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

  return (
    <>
      {/* TODO the lang prop is only temporary */}
      <Container className={resumeClasses.headerContainer} disableGutters>
        {headerTransition.map(
          ({ item, props, key }) =>
            item && (
              <animated.div key={key} style={props}>
                <Container className={resumeClasses.headerText} disableGutters>
                  <Header lang="es" />
                  <Button
                    variant="outlined"
                    className={`${appClasses.routerBtn}`}
                    component={RouterLink}
                    to="/"
                    size="small"
                  >
                    {/* TODO the lang prop is only temporary */}
                    <KeyboardReturnSharpIcon /> {translations["es"].home}
                  </Button>
                </Container>
              </animated.div>
            )
        )}
      </Container>
      {resumeTransition.map(
        ({ item, props, key }) =>
          item && (
            <animated.div key={key} style={props}>
              <Container className={resumeClasses.resumeContainer}>
                <SwaggerUI url="https://resume-api.vercel.app/definition.yaml" />
              </Container>
            </animated.div>
          )
      )}
    </>
  );
};

export default Resume;

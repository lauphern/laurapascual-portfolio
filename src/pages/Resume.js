import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import KeyboardReturnSharpIcon from '@material-ui/icons/KeyboardReturnSharp';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

import Header from "../components/Header";

import { translations } from "../data/translations";

import "./Resume.scss";
import { useAppStyles } from "../style/useStyles";
import { useResumeStyles } from "../style/useStyles";

//TODO
//meter el component SwaggerUI en una ventana, y que lo de alrededor tenga el estilo
//(y el boton) del resto de la web, para unificar un poco
//TODO
//y mirar lo que puedo customizar del SwaggerUI
const Resume = props => {
  const resumeClasses = useResumeStyles();
  const appClasses = useAppStyles();

  return (
    <>
      {/* TODO the lang prop is only temporary */}
      <Container className={resumeClasses.headerContainer} disableGutters>
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
      </Container>
      <Container className={resumeClasses.resumeContainer}>
        <SwaggerUI url="https://resume-api.vercel.app/definition.yaml" />
      </Container>
    </>
  );
};

export default Resume;

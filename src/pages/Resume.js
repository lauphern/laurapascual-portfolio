import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { Container, ButtonGroup, Button } from "@material-ui/core";
import KeyboardReturnSharpIcon from "@material-ui/icons/KeyboardReturnSharp";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { Document, Page, pdfjs } from "react-pdf";
import { useTranslation } from "react-i18next";

import LanguageSwitch from "../components/LanguageSwitch";
import Header from "../components/Header";

import "./Resume.scss";
import { useAppStyles } from "../style/useStyles";
import { useResumeStyles } from "../style/useStyles";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = props => {
  const { t, i18n } = useTranslation();

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

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [fileUrl, setFileUrl] = useState("");

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    fetch("https://lauphern-resume-server.glitch.me/api/v1/download")
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob], { type: "application/pdf" }));
        setFileUrl(url);
      });
  }, []);

  return (
    <>
      <Container className={resumeClasses.headerContainer} disableGutters>
        <LanguageSwitch />
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
                    <KeyboardReturnSharpIcon /> {t("home")}
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
                <Document
                  file={{ url: "https://lauphern-resume-server.glitch.me/api/v1/download" }}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={console.error}
                  // TODO loader
                  loading={<div>Please wait!</div>}
                  noData={<div>No pdf found</div>}
                >
                  <ButtonGroup variant="contained">
                    <Button
                      disabled={pageNumber === 1}
                      onClick={() => setPageNumber(pageNumber - 1)}
                    >
                      {t("pdf.previous")}
                    </Button>
                    <Button
                      disabled={pageNumber === numPages}
                      onClick={() => setPageNumber(pageNumber + 1)}
                    >
                      {t("pdf.next")}
                    </Button>
                  </ButtonGroup>
                  <Page pageNumber={pageNumber} />
                </Document>
                {numPages && <>
                  <p>
                    {t("pdf.key", {pageNumber, numPages})}
                  </p>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://lauphern-resume-server.glitch.me/api/v1/download"
                  >
                    {t("pdf.full")}
                  </a>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={fileUrl}
                    download="Resume_LauraPascual.pdf"
                  >
                    {t("pdf.download")}
                  </a>
                </>}
                <img
                  src={
                    "http://validator.swagger.io/validator?url=https://resume-api.vercel.app/definition.yaml"
                  }
                  alt="Validation badge"
                ></img>
                {/* TODO do custom layout */}
                <SwaggerUI
                  url="https://resume-api.vercel.app/definition.yaml"
                  validatorUrl="https://validator.swagger.io"
                  defaultModelsExpandDepth={2}
                />
              </Container>
            </animated.div>
          )
      )}
    </>
  );
};

export default Resume;

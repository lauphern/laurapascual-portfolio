import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { Container, ButtonGroup, Button } from "@material-ui/core";
import KeyboardReturnSharpIcon from "@material-ui/icons/KeyboardReturnSharp";
import SwaggerUI from "swagger-ui-react";
// https://github.com/swagger-api/swagger-ui/blob/master/docs/customization/custom-layout.md
import "swagger-ui-react/swagger-ui.css";
import { Document, Page, pdfjs } from "react-pdf";

import Header from "../components/Header";

import { translations } from "../data/translations";

import "./Resume.scss";
import { useAppStyles } from "../style/useStyles";
import { useResumeStyles } from "../style/useStyles";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
              <Document
                file={{ url: "https://lauphern-resume-server.glitch.me/api/v1/download" }}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={console.error}
                // TODO loader
                loading={<div>Please wait!</div>}
                noData={<div>No pdf found</div>}
              >
                {/* TODO translations */}
                <ButtonGroup variant="contained">
                  <Button disabled={pageNumber === 1} onClick={() => setPageNumber(pageNumber - 1)}>
                    Previous page
                  </Button>
                  <Button
                    disabled={pageNumber === numPages}
                    onClick={() => setPageNumber(pageNumber + 1)}
                  >
                    Next page
                  </Button>
                </ButtonGroup>
                <Page pageNumber={pageNumber} />
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://lauphern-resume-server.glitch.me/api/v1/download"
              >
                Full screen
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={fileUrl}
                download="Resume_LauraPascual.pdf"
              >
                Download
              </a>
              <Container className={resumeClasses.resumeContainer}>
              <img src={"http://validator.swagger.io/validator?url=https://resume-api.vercel.app/definition.yaml"} alt="Validation badge"></img>
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

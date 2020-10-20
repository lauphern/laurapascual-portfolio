import React, { useState, useEffect, useContext } from "react";
import { Store } from "../../store";
import { useTranslation } from "react-i18next";
import { Container, Box, ButtonGroup, Button, Typography } from "@material-ui/core";
import CloudDownloadSharpIcon from "@material-ui/icons/CloudDownloadSharp";
import FullscreenSharpIcon from "@material-ui/icons/FullscreenSharp";
import PictureAsPdfSharpIcon from "@material-ui/icons/PictureAsPdfSharp";
import CachedSharpIcon from "@material-ui/icons/CachedSharp";
import ErrorSharpIcon from "@material-ui/icons/ErrorSharp";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Document, Page, pdfjs } from "react-pdf";

import { useAppStyles, useResumeStyles } from "../../style/useStyles";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pdf = props => {
  const { t, i18n } = useTranslation();

  const {
    mediaQueries: { isItSmallDevice, isItSmallTablet },
  } = useContext(Store);

  const resumeClasses = useResumeStyles();
  const appClasses = useAppStyles();

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [fileUrl, setFileUrl] = useState("");
  const [documentError, setDocumentError] = useState(false);
  const ErrorMsg = () => (
    <Typography variant="caption">
      <ErrorSharpIcon className={resumeClasses.textIcon} />
      &nbsp;{t("pdf.nodata")}
    </Typography>
  );

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_MAIN_SERVER_URL}/download`)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob], { type: "application/pdf" }));
        setFileUrl(url);
      })
      .catch(err => {
        fetch(`${process.env.REACT_APP_BACKUP_SERVER_URL}/download`)
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob], { type: "application/pdf" }));
            setFileUrl(url);
          })
      });
  }, []);
  return (
    <Container
      className={`${isItSmallTablet ? resumeClasses.pdfSectionMobile : resumeClasses.pdfSection}`}
    >
      <Box className={resumeClasses.pdfTextContainer}>
        <Typography variant="h3" className={resumeClasses.pdfTitle}>
          <PictureAsPdfSharpIcon className={resumeClasses.textIcon} />
          &nbsp;{t("pdf.title")}
        </Typography>
        <Typography variant="subtitle1">{t("pdf.subtitle")}</Typography>
        {numPages && (
          <ButtonGroup variant="contained" orientation="vertical">
            <Button
              className={`${appClasses.secondaryBtn} ${appClasses.pointer}`}
              rel="noopener noreferrer"
              target="_blank"
              href={`${process.env.REACT_APP_MAIN_SERVER_URL}/download`}
            >
              <FullscreenSharpIcon className={resumeClasses.textIcon} />
              &nbsp;{t("pdf.full")}
            </Button>
            <Button
              className={`${appClasses.secondaryBtn} ${appClasses.pointer}`}
              rel="noopener noreferrer"
              target="_blank"
              href={fileUrl}
              download="Resume_LauraPascual.pdf"
            >
              <CloudDownloadSharpIcon className={resumeClasses.textIcon} />
              &nbsp;{t("pdf.download")}
            </Button>
          </ButtonGroup>
        )}
      </Box>
      <Box className={resumeClasses.pdfContainer}>
        {documentError ? (
          <Box>
            <ErrorMsg />
          </Box>
        ) : (
          <>
            <Document
              className={numPages && resumeClasses.document}
              // TODO try with the backup url if this one doesn't work
              file={{ url: `${process.env.REACT_APP_MAIN_SERVER_URL}/download` }}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={() => setDocumentError(true)}
              loading={<CachedSharpIcon className={resumeClasses.loader} />}
              noData={<ErrorMsg />}
            >
              <ButtonGroup variant="contained" className={resumeClasses.pdfNav}>
                <Button
                  aria-label="before"
                  className={`${appClasses.secondaryBtn} ${appClasses.pointer}`}
                  disabled={pageNumber === 1}
                  onClick={() => setPageNumber(pageNumber - 1)}
                >
                  <NavigateBeforeIcon />
                </Button>
                <Button
                  aria-label="next"
                  className={`${appClasses.secondaryBtn} ${appClasses.pointer}`}
                  disabled={pageNumber === numPages}
                  onClick={() => setPageNumber(pageNumber + 1)}
                >
                  <NavigateNextIcon />
                </Button>
              </ButtonGroup>
              <Page
                pageNumber={pageNumber}
                scale={isItSmallTablet ? (isItSmallDevice ? 0.25 : 0.5) : 0.7}
              />
            </Document>
            {numPages && (
              <Typography variant="overline">{t("pdf.key", { pageNumber, numPages })}</Typography>
            )}
          </>
        )}
      </Box>
    </Container>
  );
};

export default Pdf;

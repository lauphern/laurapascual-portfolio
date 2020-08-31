import React, { useState, useEffect, useContext } from "react";
import { Store } from "../../store";
import { useTranslation } from "react-i18next";
import { Container, Box, ButtonGroup, Button, Typography } from "@material-ui/core";
import CloudDownloadSharpIcon from "@material-ui/icons/CloudDownloadSharp";
import FullscreenSharpIcon from "@material-ui/icons/FullscreenSharp";
import PictureAsPdfSharpIcon from "@material-ui/icons/PictureAsPdfSharp";
import CachedSharpIcon from "@material-ui/icons/CachedSharp";
import ErrorSharpIcon from "@material-ui/icons/ErrorSharp";
import { Document, Page, pdfjs } from "react-pdf";

import { useAppStyles, useResumeStyles } from "../../style/useStyles";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pdf = props => {
  const { t, i18n } = useTranslation();

  const { mediaQueries: {isItSmallTablet} } = useContext(Store);

  const resumeClasses = useResumeStyles();
  const appClasses = useAppStyles();

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [fileUrl, setFileUrl] = useState("");
  const [documentError, setDocumentError] = useState(false);
  const ErrorMsg = () => (
    //TODO style
    <Typography variant="caption">
      <ErrorSharpIcon className={resumeClasses.textIcon} /> {t("pdf.nodata")}
    </Typography>
  );

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
    <Container className={`${isItSmallTablet ? resumeClasses.pdfSectionMobile : resumeClasses.pdfSection}`}>
      <Box>
        <Typography variant="h3" className={resumeClasses.pdfTitle}>
          <PictureAsPdfSharpIcon className={resumeClasses.textIcon} /> {t("pdf.title")}
        </Typography>
        <Typography variant="subtitle1">{t("pdf.subtitle")}</Typography>
        {numPages && (
          <ButtonGroup variant="contained" orientation="vertical">
            <Button
              className={`${appClasses.secondaryBtn} ${appClasses.pointer}`}
              rel="noopener noreferrer"
              target="_blank"
              href="https://lauphern-resume-server.glitch.me/api/v1/download"
            >
              <FullscreenSharpIcon className={resumeClasses.textIcon} /> {t("pdf.full")}
            </Button>
            <Button
              className={`${appClasses.secondaryBtn} ${appClasses.pointer}`}
              rel="noopener noreferrer"
              target="_blank"
              href={fileUrl}
              download="Resume_LauraPascual.pdf"
            >
              <CloudDownloadSharpIcon className={resumeClasses.textIcon} /> {t("pdf.download")}
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
              file={{ url: "https://lauphern-resume-server.glitch.me/api/v1/download" }}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={() => setDocumentError(true)}
              loading={<CachedSharpIcon className={resumeClasses.loader} />}
              noData={<ErrorMsg />}
            >
              <ButtonGroup variant="contained" className={resumeClasses.pdfNav}>
                <Button
                  className={`${appClasses.secondaryBtn} ${appClasses.pointer}`}
                  disabled={pageNumber === 1}
                  onClick={() => setPageNumber(pageNumber - 1)}
                >
                  {t("pdf.previous")}
                </Button>
                <Button
                  className={`${appClasses.secondaryBtn} ${appClasses.pointer}`}
                  disabled={pageNumber === numPages}
                  onClick={() => setPageNumber(pageNumber + 1)}
                >
                  {t("pdf.next")}
                </Button>
              </ButtonGroup>
              {/* TODO media query for scale */}
              <Page pageNumber={pageNumber} scale={isItSmallTablet ? 0.25 : 0.7} />
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
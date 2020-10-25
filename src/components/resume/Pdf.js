import React, { useState, useContext } from "react";
import { Store } from "../../store";
import { useTranslation } from "react-i18next";
import { Box, ButtonGroup, Button, Typography, CircularProgress } from "@material-ui/core";
import CloudDownloadSharpIcon from "@material-ui/icons/CloudDownloadSharp";
import FullscreenSharpIcon from "@material-ui/icons/FullscreenSharp";
import ErrorSharpIcon from "@material-ui/icons/ErrorSharp";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Document, Page, pdfjs } from "react-pdf";

import { useAppStyles, useResumeStyles } from "../../style/useStyles";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pdf = props => {
  const { url } = props;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [documentError, setDocumentError] = useState(false);

  const { t } = useTranslation();

  const {
    mediaQueries: { isItSmallDevice, isItSmallTablet },
  } = useContext(Store);

  const appClasses = useAppStyles();
  const resumeClasses = useResumeStyles();

  const ErrorMsg = () => (
    <Typography variant="caption">
      <ErrorSharpIcon className={resumeClasses.textIcon} />
      &nbsp;{t("pdf.nodata")}
    </Typography>
  );

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Box className={resumeClasses.pdfContainer}>
      {documentError ? (
        <Box>
          <ErrorMsg />
        </Box>
      ) : (
        <div>
          <Document
            className={numPages && resumeClasses.document}
            file={{ url: url }}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={() => setDocumentError(true)}
            loading={<CircularProgress />}
            noData={<ErrorMsg />}
          >
            <ButtonGroup variant="contained" className={resumeClasses.pdfNav}>
              <Button
                aria-label="before"
                className={`${appClasses.secondaryBtn}`}
                disabled={pageNumber === 1}
                onClick={() => setPageNumber(pageNumber - 1)}
              >
                <NavigateBeforeIcon />
              </Button>
              <Button
                aria-label="next"
                className={`${appClasses.secondaryBtn}`}
                disabled={pageNumber === numPages}
                onClick={() => setPageNumber(pageNumber + 1)}
              >
                <NavigateNextIcon />
              </Button>
            </ButtonGroup>
            {numPages && (
              <Typography variant="overline">{t("pdf.key", { pageNumber, numPages })}</Typography>
            )}
            <Page
              pageNumber={pageNumber}
              scale={isItSmallTablet ? (isItSmallDevice ? 0.25 : 0.5) : 0.7}
            />
          </Document>
        </div>
      )}
      {url && (
        <ButtonGroup variant="contained" orientation="vertical">
          <Button
            className={`${appClasses.secondaryBtn}`}
            rel="noopener noreferrer"
            target="_blank"
            href={url}
          >
            <FullscreenSharpIcon className={resumeClasses.textIcon} />
            &nbsp;{t("pdf.full")}
          </Button>
          <Button
            className={`${appClasses.secondaryBtn}`}
            rel="noopener noreferrer"
            target="_blank"
            href={url}
            download="Resume_LauraPascual.pdf"
          >
            <CloudDownloadSharpIcon className={resumeClasses.textIcon} />
            &nbsp;{t("pdf.download")}
          </Button>
        </ButtonGroup>
      )}
    </Box>
  );
};

export default Pdf;

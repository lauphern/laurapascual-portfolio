import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Typography,
  Chip,
  TableBody,
  Table,
  TableContainer,
  Paper,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";

import RequestForm from "./RequestForm";
import DescriptionTable from "./DescriptionTable";
import Response from "./Response";

import { useResumeStyles } from "../../style/useStyles";

const Panel = props => {
  const { endpoint, value, index, ...other } = props;

  const resumeClasses = useResumeStyles();

  const { i18n } = useTranslation();

  const getLanguage = () => i18n.language || window.localStorage.i18nextLng || "en";

  const [apiResponse, setApiResponse] = useState({});
  const [apiError, setApiError] = useState("");
  const [formValues, setFormValues] = useState({
    "Accept-Language": "",
    year: "",
    type: "",
    level: "",
    school: "",
  });
  const [open, setOpen] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    import("../../utils/panelMethods").then(({ handleSubmit }) => {
      handleSubmit({
        setOpen,
        clearPanelState,
        formValues,
        endpoint,
        getLanguage,
        setApiResponse,
        setApiError,
      });
    });
  };

  const handlePdfDownload = e => {
    e.preventDefault();
    import("../../utils/panelMethods").then(({ handlePdfDownload }) => {
      handlePdfDownload({
        setOpen,
        clearPanelState,
        endpoint,
        formValues,
        getLanguage,
        setApiResponse,
        setApiError,
      });
    });
  };

  const clearPanelState = ({ clearForm = true }) => {
    setApiResponse({});
    setApiError("");
    if (clearForm) {
      setFormValues({
        "Accept-Language": "",
        year: "",
        type: "",
        level: "",
        school: "",
      });
    }
  };

  useEffect(() => {
    clearPanelState({});
  }, [value]);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography variant="h5">
            {endpoint.title} <Chip size="small" label={endpoint.method} />
          </Typography>
          <Typography variant="subtitle1">{endpoint.description}</Typography>
          <RequestForm
            formValues={formValues}
            setFormValues={setFormValues}
            handleSubmit={endpoint.path === "/download" ? handlePdfDownload : handleSubmit}
            clearPanelState={clearPanelState}
            parameters={endpoint.parameters}
          />
          {open ? (
            <Backdrop className={resumeClasses.backdrop} open={open} onClick={() => setOpen(false)}>
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : null}
          {apiError ? <p>{apiError}</p> : null}
          {Object.keys(apiResponse).length > 0 ? (
            <TableContainer component={Paper}>
              <Table aria-label="spanning table">
                <TableBody>
                  <Response response={apiResponse} />
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <DescriptionTable endpoint={endpoint} />
          )}
        </Box>
      )}
    </div>
  );
};

export default Panel;

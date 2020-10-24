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
    //TODO handle download route
    setOpen(true);
    clearPanelState({ clearForm: false });
    e.preventDefault();
    let params = { ...formValues };
    for (const key in params) {
      if (key === "Accept-Language") delete params[key];
      else if (params[key].length === 0) delete params[key];
    }
    import("../../utils/apiRequest").then(({defaultServer, backupServer}) => {
      defaultServer
        .get(endpoint.path, {
          headers: { "Accept-Language": formValues["Accept-Language"] || getLanguage() },
          params,
        })
        .then(res => {
          // let test = response.value.match(/\n\s*\n/)
          import("../../utils/parseResponse").then(({parseResponse}) => {
            const response = parseResponse({ res, endpoint });
            setApiResponse(response);
            setOpen(false);
          });
        })
        .catch(err => {
          return backupServer
            .get(endpoint.path, {
              headers: { "Accept-Language": formValues["Accept-Language"] || getLanguage() },
              params,
            })
            .then(res => {
              import("../../utils/parseResponse").then(({parseResponse}) => {
                const response = parseResponse({ res, endpoint });
                setApiResponse(response);
                setOpen(false);
              });
            })
            .catch(err => {
              const errorObject = {
                code: err.response && err.response.status,
                description: err.response && err.response.statusText,
                mediaType: "application/json",
                value: `{\n  "code": "${err.response && err.response.status}",\n  "message": "${
                  err.message
                }"\n}`,
              };
              if (
                err.response &&
                typeof err.response.data == "string" &&
                err.response.data.length > 0 &&
                err.response.data.indexOf("DOCTYPE") < 0
              )
                setApiError(err.response.data);
              else setApiError(err.message);
              setApiResponse(errorObject);
              setOpen(false);
            });
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
            handleSubmit={handleSubmit}
            clearPanelState={clearPanelState}
            parameters={endpoint.parameters}
          />
          <Backdrop className={resumeClasses.backdrop} open={open} onClick={() => setOpen(false)}>
            <CircularProgress color="inherit" />
          </Backdrop>
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

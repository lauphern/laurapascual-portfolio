import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, Chip, TableBody, Table, TableContainer, Paper } from "@material-ui/core";

import RequestForm from "./RequestForm";
import DescriptionTable from "./DescriptionTable";
import Response from "./Response";

import { defaultServer, backupServer } from "../../utils/apiRequest";

const Panel = props => {
  const { endpoint, value, index, ...other } = props;

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

  const parseResponse = ({ res, endpoint }) => {
    //TODO llevar a utils
    let response = endpoint.responses.find(el => parseInt(el.code[0]) === res.status / 100);
    let indentation = 0;
    //TODO it doesn't work for all responses
    response.value = JSON.stringify(res.data).replace(
      /([":/\w":\s-\d]*[{[,])|(],?|},?)|(".*")/g,
      match => {
        let returnStr = "";
        if (
          match.indexOf("}") >= 0 ||
          match.indexOf("]") >= 0 ||
          match.indexOf("},") >= 0 ||
          match.indexOf("],") >= 0
        ) {
          indentation--;
        }
        returnStr = `${"  ".repeat(indentation)}${match}\n`;
        if (match.indexOf("{") >= 0 || match.indexOf("[") >= 0) {
          indentation++;
        }
        return returnStr;
      }
    );
    return response;
  };

  const handleSubmit = e => {
    //TODO handle download route
    clearPanelState({clearForm: false});
    e.preventDefault();
    let params = { ...formValues };
    for (const key in params) {
      if (key === "Accept-Language") delete params[key];
      else if (params[key].length === 0) delete params[key];
    }
    debugger;
    defaultServer
      .get(endpoint.path, {
        headers: { "Accept-Language": formValues["Accept-Language"] || getLanguage() },
        params,
      })
      .then(res => {
        // let test = response.value.match(/\n\s*\n/)
        const response = parseResponse({ res, endpoint });
        setApiResponse(response);
      })
      .catch(err => {
        debugger;
        return backupServer
          .get(endpoint.path, {
            headers: { "Accept-Language": formValues["Accept-Language"] || getLanguage() },
            params,
          })
          .then(res => {
            const response = parseResponse({ res, endpoint });
            setApiResponse(response);
          })
          .catch(err => {
            debugger;
            const errorObject = {
              code: err.response && err.response.status,
              description: err.response && err.response.statusText,
              mediaType: "application/json",
              value: `{\n  "code": "${err.response && err.response.status}",\n  "message": "${err.message}"\n}`,
            };
            debugger;
            if (
              err.response && typeof err.response.data == "string" &&
              err.response.data.length > 0 &&
              err.response.data.indexOf("DOCTYPE") < 0
            )
              setApiError(err.response.data);
            else setApiError(err.message);
            setApiResponse(errorObject);
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
          {/* TODO do loader with backdrop */}
          {/* 2nd params
          3rd fix regex */}
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

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, Chip, TableBody, Table, TableContainer, Paper } from "@material-ui/core";

import RequestForm from "./RequestForm";
import DescriptionTable from "./DescriptionTable";
import Response from "./Response";

import { defaultServer, backupServer } from "../../utils/apiRequest";

const TabPanel = props => {
  const { endpoint, value, index, ...other } = props;

  const { i18n } = useTranslation();
  //TODO revisar
  const getLanguage = () => i18n.language || window.localStorage.i18nextLng || "en";

  const [apiResponse, setApiResponse] = useState({});
  const [apiError, setApiError] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    defaultServer
      .get("/", { headers: { "Accept-Language": getLanguage() } })
      .then(res => {
        // res.status
        // endpoint.responses[x].code
        debugger;
        let response = endpoint.responses.find(el => parseInt(el.code[0]) === res.status / 100);
        let indentation = 0;
        response.value = JSON.stringify(res.data).replace(
          /([":/\w":\s-\d]*[{[,])|(],?|},?)|(".*")/g,
          (match) => {
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
        let test = response.value.match(/\n\s*\n/)
        debugger;
        setApiResponse(response);
        debugger;
      })
      .catch(err => {
        //TODO error handling
        setApiError(err);
        return backupServer
          .get("/", { headers: { "Accept-Language": getLanguage() } })
          .then(res => {
            setApiResponse(res.data);
          })
          .catch(err => {
            setApiError(err);
          });
      });
  };

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
          <RequestForm handleSubmit={handleSubmit} />
          {Object.keys(apiResponse).length > 0 ? (
            <TableContainer component={Paper}>
              <Table aria-label="spanning table">
                <TableBody>
                  <Response response={apiResponse} />
                </TableBody>
              </Table>
            </TableContainer>
          ) : null}
          {/* TODO error handling */}
          {Object.keys(apiError).length > 0 ? <p>Something went wrong!</p> : null}
          <DescriptionTable endpoint={endpoint} />
        </Box>
      )}
    </div>
  );
};

export default TabPanel;

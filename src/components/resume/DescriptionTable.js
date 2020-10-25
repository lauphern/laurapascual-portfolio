import React from "react";
import { useTranslation } from "react-i18next";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";

import Response from "./Response";

const DescriptionTable = props => {
  const { endpoint } = props;

  const { t } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              {t("requestTable.parameters")}
            </TableCell>
          </TableRow>
          {endpoint.parameters.length > 0 ? <TableRow>
            <TableCell>{t("requestTable.name")}</TableCell>
            <TableCell>{t("requestTable.in")}</TableCell>
            <TableCell>{t("requestTable.type")}</TableCell>
          </TableRow> : null}
        </TableHead>
        {endpoint.parameters.length > 0 ? <TableBody>
          {endpoint.parameters.map(param => (
            <TableRow>
              <TableCell>{param.name}</TableCell>
              <TableCell>{param.in}</TableCell>
              <TableCell>{param.type}</TableCell>
            </TableRow>
          ))}
        </TableBody> : <TableBody>
            <TableRow>
              <TableCell colSpan={3}>{t("requestTable.none")}</TableCell>
            </TableRow>
        </TableBody>}
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              {t("requestTable.responses")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t("requestTable.code")}</TableCell>
            <TableCell colSpan={2}>{t("requestTable.description")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {endpoint.responses.map(response => (
            <Response response={response} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DescriptionTable;

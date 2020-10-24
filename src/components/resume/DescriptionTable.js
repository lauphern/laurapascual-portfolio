import React from "react";
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

  return (
    <TableContainer component={Paper}>
      <Table aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Parameters
            </TableCell>
          </TableRow>
          {endpoint.parameters.length > 0 ? <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>In</TableCell>
            <TableCell>Type</TableCell>
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
              <TableCell colSpan={3}>None</TableCell>
            </TableRow>
        </TableBody>}
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Responses
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell colSpan={2}>Description</TableCell>
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

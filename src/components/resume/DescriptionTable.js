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
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell colSpan={2}>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Name of param</TableCell>
            <TableCell colSpan={2}>This is the description</TableCell>
          </TableRow>
        </TableBody>
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

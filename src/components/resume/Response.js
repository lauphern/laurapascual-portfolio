import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

const Response = props => {

  const { response } = props;
  
  return (
    <>
      <TableRow key={response.code}>
        <TableCell rowSpan={4}>{response.code}</TableCell>
        <TableCell>{response.description}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Media type: {response.mediaType}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Example value:</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <code>{response.value}</code>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Response;

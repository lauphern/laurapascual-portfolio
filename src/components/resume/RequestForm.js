import React from "react";
import { InputLabel, Select, MenuItem, Button } from "@material-ui/core";

const RequestForm = props => {

  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <InputLabel id="parameter">Parameter</InputLabel>
      <Select value="parameter" labelId="parameter">
        <MenuItem value="">A parameter</MenuItem>
      </Select>
      <Button type="submit">Try it out</Button>
    </form>
  );
};

export default RequestForm;

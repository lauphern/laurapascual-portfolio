import React, { useState } from "react";
import { InputLabel, Select, MenuItem, TextField, Button } from "@material-ui/core";

const CustomInput = props => {

  const { param } = props;

  const [test, setTest] = useState("")

  return (
    <>
      <p>In: {param.in}</p>
      <InputLabel id={param.name}>{param.name}</InputLabel>
      {/* value should point to state */}
      {param.enum.length > 0 ? (
        <Select name="" value={test} labelId={param.name} displayEmpty renderValue={()=> "Select parameter"} required={param.required}>
          {/* <MenuItem value="" disabled>
            Select language
          </MenuItem> */}
          {param.enum.map(val => (
            <MenuItem value={val}>{val}</MenuItem>
          ))}
        </Select>
      ) : (
        <TextField
          type={param.type}
          labelId={param.name}
          required={param.required}
          placeholder={param.example}
          // name=""
          // value{}
        />
      )}
    </>
  );
};

const RequestForm = props => {
  const { handleSubmit, clearResponse, parameters } = props;

  return (
    <form onSubmit={handleSubmit}>
      {parameters.map(param => (
        <CustomInput param={param} />
      ))}
      <Button type="submit">Try it out</Button>
      <Button onClick={clearResponse}>Clear</Button>
    </form>
  );
};

export default RequestForm;

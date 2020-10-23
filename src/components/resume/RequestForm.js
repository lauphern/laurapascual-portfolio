import React from "react";
import { InputLabel, Select, MenuItem, TextField, Button } from "@material-ui/core";

const CustomInput = props => {
  const { param, formValues, setFormValues } = props;

  return (
    <>
      <p>In: {param.in}</p>
      <InputLabel id={param.name} required={param.required}>{param.name}</InputLabel>
      {/* value should point to state */}
      {param.enum.length > 0 ? (
        <Select
          name={param.name}
          value={formValues[param.name]}
          labelId={param.name}
          required={param.required}
          displayEmpty
          renderValue={value => value || "Choose a value"}
          onChange={e => setFormValues({...formValues, [param.name]: e.target.value})}
        >
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
          name={param.name}
          value={formValues[param.name]}
          InputProps={{ inputProps: { min: 2010 } }}
          min={param.type === "number" ? 2010 : null}
          // TODO si, lo que pasa es que no se actualiza el valor, en el display tampoco
          onChange={e => setFormValues({...formValues, [param.name]: e.target.value})}
        />
      )}
    </>
  );
};

const RequestForm = props => {
  const { handleSubmit, clearPanelState, parameters, formValues, setFormValues } = props;

  return (
    <form onSubmit={handleSubmit}>
      {parameters.map(param => (
        <CustomInput formValues={formValues} setFormValues={setFormValues} param={param} />
      ))}
      <Button type="submit">Try it out</Button>
      <Button onClick={() => clearPanelState({})}>Clear</Button>
    </form>
  );
};

export default RequestForm;

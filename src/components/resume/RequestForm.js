import React from "react";
import { useTranslation } from "react-i18next";
import { Typography, InputLabel, Select, MenuItem, TextField, Button } from "@material-ui/core";

const CustomInput = props => {
  const { param, formValues, setFormValues } = props;

  const { t } = useTranslation();

  return (
    <>
      <Typography variant="body1">{t("requestTable.in")}: {param.in}</Typography>
      <InputLabel id={param.name} required={param.required}>
        {param.name}
      </InputLabel>
      {param.enum.length > 0 ? (
        <Select
          name={param.name}
          value={formValues[param.name]}
          labelId={param.name}
          required={param.required}
          displayEmpty
          renderValue={value => value || t("requestForm.select")}
          onChange={e => setFormValues({ ...formValues, [param.name]: e.target.value })}
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
          onChange={e => setFormValues({ ...formValues, [param.name]: e.target.value })}
        />
      )}
    </>
  );
};

const RequestForm = props => {
  const { handleSubmit, clearPanelState, parameters, formValues, setFormValues } = props;

  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit}>
      {parameters.map(param => (
        <CustomInput formValues={formValues} setFormValues={setFormValues} param={param} />
      ))}
      <Button type="submit">{t("requestForm.tryBtn")}</Button>
      <Button onClick={() => clearPanelState({})}>{t("requestForm.clearBtn")}</Button>
    </form>
  );
};

export default RequestForm;

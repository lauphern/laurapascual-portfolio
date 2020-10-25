import React from "react";
import { useTranslation } from "react-i18next";
import {
  Typography,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
  TextField,
  Button,
  ButtonGroup,
} from "@material-ui/core";

import { useResumeStyles } from "../../style/useStyles";

const CustomInput = props => {
  const { param, formValues, setFormValues } = props;

  const { t } = useTranslation();

  const resumeClasses = useResumeStyles();

  return (
    <div>
      <InputLabel id={param.name} required={param.required}>
        {param.name}
      </InputLabel>
      {param.enum.length > 0 ? (
        <>
          <Select
            className={resumeClasses.inputField}
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
          <FormHelperText>
            {t("requestTable.in")}: {param.in}
          </FormHelperText>
        </>
      ) : (
        <>
          <TextField
            className={resumeClasses.inputField}
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
          <FormHelperText>
            {t("requestTable.in")}: {param.in}
          </FormHelperText>
        </>
      )}
    </div>
  );
};

const RequestForm = props => {
  const { handleSubmit, clearPanelState, parameters, formValues, setFormValues } = props;

  const { t } = useTranslation();

  const resumeClasses = useResumeStyles();

  return (
    <form onSubmit={handleSubmit} className={resumeClasses.requestForm}>
      {parameters.map(param => (
        <CustomInput formValues={formValues} setFormValues={setFormValues} param={param} />
      ))}
      <ButtonGroup>
        <Button type="submit">{t("requestForm.tryBtn")}</Button>
        <Button onClick={() => clearPanelState({})}>{t("requestForm.clearBtn")}</Button>
      </ButtonGroup>
    </form>
  );
};

export default RequestForm;

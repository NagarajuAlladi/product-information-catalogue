import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  Grid,
  Typography,
  FormControl,
  MenuItem,
  FormHelperText,
  FormGroup,
  InputLabel,
  Select,
  Checkbox,
  TextField,
  RadioGroup,
} from "@mui/material/";
import {
  generateValidationForForm,
  verifyCondition,
} from "../../utils/forms/functions";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TimePicker from "@mui/lab/TimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import _ from "lodash";
import { Box } from "@mui/system";

const GenerateForm = React.forwardRef(
  (
    {
      fields,
      colWidth,
      spacing,
      submitCSS,
      onSubmit = () => { },
      hideButtons,
      onChange,
      labelBold,
      submitLabel,
      value,
      disableIfInvalid,
      buttonsDisabled,
      userData,
      ...props
    },
    ref
  ) => {
    let initialState = {};
    let initialValidation = null;
    const [fieldValues, setFieldValues] = useState(null);
    let [selectInputAttempts, setSelectInputAttempts] = useState({});
    let [selectInputHistory, setSelectInputHistory] = useState({});

    let secondarySetFieldValue;

    // useEffect(() => {
    if (!initialValidation) {
      if (!value) {
        fields &&
          fields.forEach((field) => {
            if (field.name)
              initialState[field.name] = field.value || "";
          });
      } else {
        initialState = value;
      }
    }

    if (!initialValidation) {
      initialValidation = generateValidationForForm(fields);
    }

    const customValidation = (validation, value) => {
      if (typeof validation == "string") {
        if (validation == "noNameOrEmail" && !!userData) {
          return !(
            value
              .toLowerCase()
              .includes(userData?.firstName?.toLowerCase()) ||
            value
              .toLowerCase()
              .includes(userData?.lastName?.toLowerCase()) ||
            value
              .toLowerCase()
              .includes(userData?.email?.toLowerCase())
          );
        }
        if (validation == "match") {
          if (value) {
            // return value[validation.matchTo] == value;
          }
        }
        return false;
      } else {
        return validation(value);
      }
    };

    const fullValidation = (rules, value) => {
      let pass = true;
      rules.forEach((rule) => {
        if (!customValidation(rule.validation, value)) {
          pass = false;
          return;
        }
      });

      return pass;
    };

    const renderField = (
      values,
      setFieldValue,
      setFieldTouched,
      errors,
      touched
    ) => {
      if (fields) {
        return fields.map((field, index) => {
          const {
            additionalConfig: {
              visibleIf: {
                relatedTo = false,
                condition,
                value,
              } = {},
            } = {},
          } = field;
          return (
            <Grid
              item
              xs={field.colWidth || 12}
            >
              {!relatedTo
                ? switchField(
                  field,
                  values,
                  setFieldValue,
                  setFieldTouched,
                  errors,
                  touched
                )
                : verifyCondition(
                  values[relatedTo],
                  value,
                  condition
                )
                  ? switchField(
                    field,
                    values,
                    setFieldValue,
                    setFieldTouched,
                    errors,
                    touched
                  )
                  : values[field.name] !== ""
                    ? setFieldValue(field.name, "")
                    : null}
            </Grid>
          );
        });
      }
    };

    // use hoisted set field value function to make sure select values are up to date even after key filtering
    useEffect(() => {
      if (secondarySetFieldValue) {
        if (selectInputHistory) {
          let keys = Object.keys(selectInputHistory);
          keys.forEach((key) => {
            secondarySetFieldValue(key, selectInputHistory[key]);
          });
        }
      }
    }, [selectInputHistory]);

    function switchField(
      field,
      values,
      setFieldValue,
      setFieldTouched,
      errors,
      touched
    ) {
      secondarySetFieldValue = setFieldValue;
      const fieldName = field.name;
      const hasError =
        !!errors[fieldName] &&
        !Array.isArray(errors[fieldName]) &&
        touched[fieldName];
      switch (field.type) {
        case "text":
        case "password":
          return (
            <Box key={"text" + fieldName}>
              <TextField
                name={fieldName}
                fullWidth
                id={fieldName}
                type={field.type}
                label={field.label}
                error={hasError}
                defaultValue=""
                value={_.get(values, fieldName) || null}
                onChange={(e) => {
                  setFieldValue(
                    fieldName,
                    e && e.target.value
                  );
                }}
                helperText={hasError && errors[fieldName]}
              />
            </Box>
          );

        case "textarea":
          return (
            <Box sx={{ width: "100%" }} key={"textarea" + fieldName}>
              <TextField
                name={fieldName}
                fullWidth
                id={fieldName}
                type={field.type}
                label={field.label}
                error={hasError}
                multiline
                rows={field.additionalConfig.rows || 4}
                value={_.get(values, fieldName) || null}
                onChange={(e) => {
                  setFieldValue(
                    fieldName,
                    e && e.target.value
                  );
                }}
                helperText={hasError && errors[fieldName]}
              />
            </Box>
          );

        case "select":
          return (
            <Box sx={{ width: "100%" }} key={"select" + fieldName}>
              <FormControl
                error={hasError}
                variant="outlined"
                fullWidth
              >
                <InputLabel>{field.label}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id={field.id}
                  name={fieldName}
                  label={field.label}
                  value={_.get(values, fieldName) || null}
                  onChange={(e) => {
                    setFieldValue(
                      fieldName,
                      e && e.target.value
                    );
                  }}
                >
                  {field.options.map((option) => (
                    <MenuItem
                      value={option.value}
                      key={
                        "menuitem-" +
                        option.value +
                        option.label
                      }
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  {hasError && errors[fieldName]}
                </FormHelperText>
              </FormControl>
            </Box>
          );

        case "checkbox":
          return (
            <Box sx={{ width: "100%" }} key={"checkbox" + fieldName}>
              <FormControl error={hasError} component="fieldset">
                {field.label && (
                  <FormLabel component="legend">
                    {field.label}
                  </FormLabel>
                )}
                <FormGroup
                  row={
                    field.additionalConfig?.displayType ===
                    "row"
                  }
                >
                  {field.options.map((option) => (
                    <FormControlLabel
                      key={"option" + option.value}
                      control={
                        <Checkbox
                          checked={values[
                            fieldName
                          ]?.includes(option.value)}
                          onChange={(e) => {
                            const value =
                              option.value;
                            const set = new Set(
                              values[fieldName]
                            );
                            if (set.has(value)) {
                              set.delete(value);
                            } else {
                              set.add(value);
                            }
                            setFieldValue(
                              fieldName,
                              Array.from(set)
                            );
                          }}
                          name={fieldName}
                        />
                      }
                      label={option.label}
                    />
                  ))}
                </FormGroup>
                <FormHelperText>
                  {hasError && errors[fieldName]}
                </FormHelperText>
              </FormControl>
            </Box>
          );

        case "radio":
          return (
            <Box sx={{ width: "100%" }} key={"radio" + fieldName}>
              <FormControl error={hasError} component="fieldset">
                {field.label && (
                  <FormLabel component="legend">
                    {field.label}
                  </FormLabel>
                )}
                <RadioGroup
                  value={_.get(values, fieldName) || null}
                  onChange={(e) => {
                    setFieldValue(
                      fieldName,
                      e && e.target.value
                    );
                  }}
                  name={fieldName}
                  row={
                    field.additionalConfig?.displayType ===
                    "row"
                  }
                >
                  {field.options.map((option) => (
                    <FormControlLabel
                      value={option.value}
                      control={<Radio />}
                      label={option.label}
                    />
                  ))}
                </RadioGroup>
                <FormHelperText>
                  {hasError && errors[fieldName]}
                </FormHelperText>
              </FormControl>
            </Box>
          );

        case "date":
          return (
            <Box sx={{ width: "100%" }} key={"date" + fieldName}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label={field.label}
                  id={fieldName + "-datePicker"}
                  inputFormat="mm/dd/yyyy"
                  name={fieldName}
                  value={values[fieldName] || null}
                  onChange={(e) => {
                    setFieldValue(
                      fieldName,
                      e && e.toISOString()
                    );
                  }}
                  renderInput={(params) => (
                    <TextField
                      fullWidth
                      helperText={
                        hasError && errors[fieldName]
                      }
                      {...params}
                      // name={fieldName}
                      error={hasError}
                    />
                  )}
                />
              </LocalizationProvider>
            </Box>
          );

        case "time":
          return (
            <Box sx={{ width: "100%" }} key={"time" + fieldName}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  label={field.label}
                  id={fieldName + "-timePicker"}
                  name={fieldName}
                  value={values[fieldName] || null}
                  onChange={(e) => {
                    setFieldValue(
                      fieldName,
                      e && e.toISOString()
                    );
                  }}
                  renderInput={(params) => (
                    <TextField
                      fullWidth
                      helperText={
                        hasError && errors[fieldName]
                      }
                      {...params}
                      // name={fieldName}
                      error={hasError}
                    />
                  )}
                />
              </LocalizationProvider>
            </Box>
          );
        default:
          return null;
      }
    }

    function handleWholeFormChange(values, errors) {
      setFieldValues(values);
      onChange(values);
    }

    return (
      <>
        {fields && (
          <div key={fields + "generateForm"} {...props}>
            <Formik
              initialValues={initialState}
              onSubmit={(values) => {
                onSubmit(values);
              }}
              key={fields + "formik"}
              validationSchema={initialValidation}
              innerRef={ref}
            >
              {({
                values,
                submitForm,
                isSubmitting,
                setFieldValue,
                setFieldTouched,
                isValid,
                dirty,
                errors,
                touched,
                setFieldError,
              }) => {
                return (
                  <Form noValidate>
                    {onChange &&
                      handleWholeFormChange(
                        values,
                        errors
                      )}
                    <Grid container spacing={spacing || 6}>
                      {renderField(
                        values,
                        setFieldValue,
                        setFieldTouched,
                        errors,
                        touched
                      )}
                    </Grid>
                    {!hideButtons && (
                      <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        size="large"
                        // className={`${submitCSS}` || 'w-100'}
                        sx={{
                          mt: "1.5rem",
                          color: "white",
                          width: "100%",
                        }}
                        disabled={
                          (disableIfInvalid &&
                            !(
                              isValid &&
                              dirty &&
                              !!values?.coverPhoto
                            )) ||
                          buttonsDisabled
                        }
                      >
                        {submitLabel || "Submit"}
                      </Button>
                    )}
                  </Form>
                );
              }}
            </Formik>
          </div>
        )}
      </>
    );
  }
);

export default GenerateForm;

import * as Yup from "yup";
import { ALERT_TOGGLE, ALERT_ERROR } from "../../redux/types";
import { useDispatch } from "react-redux";

function titleCase(str) {
  return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
}

export const generateValidationForForm = (fields = []) => {
  const initialValidation = {};
  fields.forEach((field) => {
    switch (field.type) {
      case "text":
      case "textarea":
      case "radio":
      case "password":
      case "file":
        return (initialValidation[field.name] = getValidationsForField(field));
      case "checkbox":
        if (!field.validations && field.required)
          field.validations = Yup.array()
            .min(1, "This field is required")
            .required("This field is required");
        return (initialValidation[field.name] = getValidationsForField(field));
      case "select":
        return (initialValidation[field.name] = getValidationsForField(
          field,
          "",
          "select"
        ));
      case "date":
        return (initialValidation[field.name] = getValidationsForField(
          field,
          "",
          "date"
        ));
      case "time":
        return (initialValidation[field.name] = getValidationsForField(
          field,
          "",
          "time"
        ));
      default:
        return field.type;
    }
  });
  return Yup.object().shape(initialValidation);
};

// export const getFieldName = (name) => name.charAt(0).toUpperCase() + name.substring(1)

export const getValidationsForField = (
  field,
  schemaType = "string",
  validationType
) => {
  if (!validationType) {
    if (field.validations) {
      return field.validations;
    } else if (field.required) {
      return Yup[schemaType]().required("This field is required");
    } else if (field.additionalConfig?.visibleIf) {
      return Yup[schemaType]().when(
        field.additionalConfig.visibleIf.relatedTo,
        {
          is: (value1) =>
            verifyCondition(
              value1,
              field.additionalConfig.visibleIf.value,
              field.additionalConfig.visibleIf.condition
            ),
          then: Yup[schemaType]().required("This field is required"),
          otherwise: Yup[schemaType](),
        }
      );
    }
    return null;
  } else {
    if (validationType === "select") {
      const oneOfOptions = Yup.string().oneOf(
        field.options.map((option) => option.value),
        "Choose correct option"
      );
      if (field.validations) {
        return field.validations;
      }
      if (field.required) {
        return oneOfOptions.required(`${titleCase(field.name)} is a required field`);
      }
      if (field.additionalConfig?.visibleIf) {
        return Yup.string().when(field.additionalConfig.visibleIf.relatedTo, {
          is: (value1) =>
            verifyCondition(
              value1,
              field.additionalConfig.visibleIf.value,
              field.additionalConfig.visibleIf.condition
            ),
          then: oneOfOptions.required("Please select Option"),
          otherwise: Yup.string(),
        });
      }
      return oneOfOptions;
    } else if (validationType === "date") {
      if (field.validations) {
        return field.validations;
      }
      else if (field.required) {
        return Yup.string().required("This field is required")
      }
      else {
        return Yup.date().nullable();
      }
    } else if (validationType === "time") {
      if (field.validations) {
        return field.validations;
      }
      else if (field.required) {
        return Yup.string().required("This field is required")
      }
      else {
        return Yup.date().nullable();
      }
    }
  }
};

export const verifyCondition = (value1, value2, condition) => {
  if (value1 !== "") {
    switch (condition) {
      case "=":
        return value1 === value2;
      case "<":
        return value1 < value2;
      case ">":
        return value1 > value2;
      default:
        return false;
    }
  }
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const toFormData = (object) => {
  const formData = new FormData();
  Object.keys(object).forEach((key) => formData.append(key, object[key]));
  return formData;
};

export const handleError = (error, dispatch) => {

  console.log("Unsuccessful", error);
  dispatch({
    type: ALERT_TOGGLE,
    payload: {
      show: true,
      content: "Something went wrong! Please try again.",
      severity: ALERT_ERROR,
    },
  });
}

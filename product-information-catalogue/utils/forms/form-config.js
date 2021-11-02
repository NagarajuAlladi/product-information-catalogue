import moment from "moment";

import * as Yup from "yup";
import {
  CONFIRM_PASSWORD_VALIDATOR,
  EMAIL_VALIDATOR,
  NAME_VALIDATOR,
  PASSWORD_VALIDATOR,
  PHONE_VALIDATOR,
  REQUIRED_SCHEMA,
  WEBSITE_VALIDATOR,
} from "./yup-validators";
// import { NATIONALITIES } from "./nationalities";
// import allCountriesAndCity from "./allCountriesAndCity";
// import languages from "./languages";

const digitsOnly = (value) => /^\d+$/.test(value);
const alphabetsOnly = (value) => /^[aA-zZ\s]+$/.test(value);
const isEmail = (value) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
const numberValid = (value) => value >= 20;
const isFilled = (value) => {
  console.log(value, "popo");
  return true;
};

export const LOGIN_FORM = [
  {
    type: "text",
    label: "First Name",
    name: "firstName",
    required: true,
    colWidth: 6,
  },
  {
    type: "text",
    label: "Last Name",
    name: "lastName",
    validations: Yup.string().required("Last name is Required."),
    colWidth: 6,
  },
  {
    type: "password",
    label: "Password",
    name: "password",
    validations: PASSWORD_VALIDATOR,
  },
  {
    type: "textarea",
    label: "Address",
    name: "address",
    required: true,
    additionalConfig: {
      rows: 6,
    },
  },
  {
    name: "country",
    type: "select",
    required: true,
    options: [
      {
        label: "United States",
        value: "USA",
      },
      {
        label: "Canada",
        value: "canada",
      },
      {
        label: "India",
        value: "india",
      },
    ],
    label: "Country",
  },
  {
    name: "hobby",
    type: "checkbox",
    label: "Hobby",
    required: true,
    additionalConfig: {
      displayType: "row",
    },
    options: [
      {
        label: "Coding",
        value: "coding",
      },
      {
        label: "Gym",
        value: "gym",
      },
    ],
  },
  {
    name: "gender",
    type: "radio",
    required: true,
    label: "Gender",
    additionalConfig: {
      displayType: "row",
    },
    options: [
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "female",
      },
      {
        label: "Transgender",
        value: "transgender",
      },
    ],
  },
  {
    name: "date",
    type: "date",
    label: "Date",
    validations: Yup.string().required("Date is Required."),
  },
  {
    name: "time",
    type: "time",
    label: "Time",
    required: "true",
  },
];

export const GENERAL_INFORMATION = [
  {
    type: "text",
    label: "Brand Name",
    name: "brandName",
    required: true,
    colWidth: 6,
  },
  {
    type: "text",
    label: "Default Name",
    name: "defaultName",
    required: true,
    colWidth: 6,
  },

  {
    type: "text",
    label: "Description",
    name: "descripetion",
    required: true,
    colWidth: 12,
  },
  {
    name: "fit",
    type: "select",
    required: true,
    options: [
      {
        label: "Slim Fit",
        value: "slimFit",
      },
      {
        label: "XL",
        value: "xl",
      },
      {
        label: "XXL",
        value: "xxl",
      },
    ],
    label: "Fit",
    colWidth: 4,
  },
  {
    type: "text",
    label: "Composition",
    name: "Composition",
    required: true,
    colWidth: 8,
  },
  {
    type: "text",
    label: "Washing Information",
    name: "washingInformtion",
    required: true,
    colWidth: 12,
    rows: 4,
  },
  {
    type: "text",
    label: "Care",
    name: "care",
    required: true,
    colWidth: 12,
  },
];

export const VARIENT_ATTRIBUTES = [
  {
    type: "text",
    label: "Color",
    name: "color",
    required: true,
    colWidth: 6,
  },
  {
    name: "colorCode",
    type: "select",
    required: true,
    options: [
      {
        label: "312/Drak Blue",
        value: "darkBlue",
      },
      {
        label: "Blue",
        value: "blue",
      },
      {
        label: "White",
        value: "white",
      },
    ],
    label: "Color Code",
    colWidth: 6,
  },
  {
    name: "season",
    type: "select",
    required: true,
    options: [
      {
        label: "Autumn/Winter 2018",
        value: "winter",
      },
      {
        label: "Rainy",
        value: "Rainy",
      },
    ],
    label: "Season",
    colWidth: 6,
  },
  {
    type: "text",
    label: "Price(USD)",
    name: "price",
    required: true,
    colWidth: 6,
  },
];

export const PRODUCT_PHOTOS = [
  {
    type: "text",
    label: "Model Features",
    name: "features",
    required: true,
    colWidth: 6,
  },
];

export const SEO_FORM = [
  {
    type: "text",
    label: "SEO Title",
    name: "seo",
    required: true,
    colWidth: 12,
  },
  {
    type: "text",
    label: "SEO Description",
    name: "seoDescription",
    required: true,
    colWidth: 12,
  },
  {
    type: "text",
    label: "SEO Keywords",
    name: "keywords",
    required: true,
    colWidth: 12,
  },
  {
    type: "text",
    label: "Preview",
    name: "preview",
    required: true,
    colWidth: 12,
  },
];

export const VARIENT_SIZES = [
  {
    name: "colorCode",
    type: "select",
    required: true,
    options: [
      {
        label: "European",
        value: "european",
      },
    ],
    label: "Size Type",
    colWidth: 6,
  },
];

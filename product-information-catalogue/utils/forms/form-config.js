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

export const DEPARTMENT_FORM = [
  {
    type: "text",
    label: "Department Name",
    name: "departmentName",
    required: true,
  },
  {
    type: "text",
    label: "Department Code",
    name: "departmentCode",
    required: true,
  },
  {
    type: "text",
    label: "Department Head",
    name: "departmentHead",
    required: true,
  },
];

export const ACCOUNT_FORM = [
  {
    type: "text",
    label: "Name",
    name: "name",
    required: true,
  },
  {
    type: "text",
    label: "Email",
    name: "email",
    required: EMAIL_VALIDATOR,
  },
  {
    type: "password",
    label: "Password",
    name: "password",
    validations: PASSWORD_VALIDATOR,
  },
  {
    type: "text",
    label: "Conatct No",
    name: "contactNo",
    required: PHONE_VALIDATOR,
  },
];

export const SEAT_FORM = [
  {
    type: "text",
    label: "Seat Title",
    name: "name",
    required: true,
  },
  {
    name: "expiryDate",
    type: "date",
    label: "Expiry Date",
    validations: Yup.string().required("Date is Required."),
  },
];

export const INTERVIEW_FORM = [
  {
    name: "round",
    type: "select",
    required: true,
    options: [
      {
        label: "Round 1",
        value: "round1",
      },
      {
        label: "Round 2",
        value: "round2",
      },
      {
        label: "HR",
        value: "hr",
      },
    ],
    label: "Round",
  },
  {
    name: "modeOfInterview",
    type: "select",
    required: true,
    options: [
      {
        label: "OnSite",
        value: "onSite",
      },
      {
        label: "Virtual",
        value: "virtual",
      },
    ],
    label: "Mode Of Interview",
  },
  {
    name: "time",
    type: "time",
    label: "Start Time",
    required: "true",
  },
  {
    name: "date",
    type: "date",
    label: "Date",
    validations: Yup.string().required("Date is Required."),
  },
];

export const COMMENT_FORM = [
  {
    type: "textarea",
    label: "Note",
    name: "note",
    required: true,
    additionalConfig: {
      rows: 4,
    },
  },
];

export const SIGNUP_FORM = [
  {
    type: "text",
    label: "First Name",
    name: "firstName",
    colWidth: 6,
    validations: Yup.string().required("First name is Required."),
  },
  {
    type: "text",
    label: "Last Name",
    name: "lastName",
    colWidth: 6,
    validations: Yup.string().required("Last name is Required."),
  },
  {
    type: "text",
    label: "Email",
    name: "email",
    colWidth: 6,
    validations: EMAIL_VALIDATOR,
  },
  {
    name: "date",
    type: "date",
    label: "Date",
    colWidth: 6,
    validations: Yup.string().required("Date is Required."),
  },
  {
    type: "text",
    label: "Mobile Number",
    name: "mobileNumber",
    colWidth: 6,
    validations: Yup.string().required("Mobile Number is Required."),
  },
  {
    type: "text",
    label: "Alternate Mobile Number",
    name: "alternateMobileNumber",
    colWidth: 6,
  },
  {
    name: "expirence",
    type: "select",
    colWidth: 6,
    required: true,
    options: [
      {
        label: "<1 year",
        value: "lessthanOne",
      },
      {
        label: "1 year",
        value: "One",
      },
      {
        label: "2 year",
        value: "Two",
      },
    ],
    label: "Expirence",
  },
  {
    type: "text",
    label: "Year Of Graduation",
    name: "yearOfGraduation",
    colWidth: 6,
    validations: Yup.string().required("Year Of Graduation is Required."),
  },
  {
    name: "backlogs",
    type: "select",
    colWidth: 6,
    required: true,
    options: [
      {
        label: "Yes",
        value: "yes",
      },
      {
        label: "No",
        value: "no",
      },
    ],
    label: "Backlog(s) If Any",
  },
  {
    type: "text",
    label: "Current Annual CTC",
    name: "ctc",
    colWidth: 6,
    validations: Yup.string().required("Current Annual CTC is Required."),
  },
  {
    type: "text",
    label: "Position Applied For",
    name: "position",
    colWidth: 6,
    validations: Yup.string().required("Applied Position is Required."),
  },
  {
    name: "noticePeriod",
    type: "select",
    required: true,
    colWidth: 6,
    options: [
      {
        label: "Immediate Joiner",
        value: "immediate",
      },
      {
        label: "<15days",
        value: "15",
      },
      {
        label: "One Month",
        value: "One",
      },
      {
        label: "Two Months",
        value: "Two",
      },
    ],
    label: "Notice Period",
  },
  {
    name: "source",
    type: "select",
    colWidth: 6,
    required: true,
    options: [
      {
        label: "Facebook",
        value: "facebook",
      },
      {
        label: "LinkedIn",
        value: "linkedin",
      },
      {
        label: "Monstar",
        value: "monstar",
      },
      {
        label: "Others",
        value: "others",
      },
    ],
    label: "Source",
  },
  {
    type: "text",
    label: "Job Code",
    name: "jobCode",
    colWidth: 6,
    validations: Yup.string().required("Job Code is Required."),
  },
  {
    type: "text",
    colWidth: 6,
    label: "Current Location",
    name: "currentLocation",
    validations: Yup.string().required("Current Location is Required."),
  },
];


export const LOGIN=[
  {
    type: "text",
    label: "Email",
    name: "email",
    required: EMAIL_VALIDATOR,
  },
  {
    type: "password",
    label: "Password",
    name: "password",
    validations: PASSWORD_VALIDATOR,
  },
]
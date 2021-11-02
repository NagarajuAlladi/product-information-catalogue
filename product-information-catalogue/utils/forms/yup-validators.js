import * as Yup from "yup";
import { ERR_REQ } from "./error-strings";
export const EMAIL_VALIDATOR = Yup.string()
    .email("Please enter a valid email")
    .max(255)
    .required("This field is required");

export const WEBSITE_VALIDATOR = Yup.string()
    .matches(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
        "Please enter a valid website"
    )
    .max(255);

export const PASSWORD_LOGIN_VALIDATOR = Yup.string()
    .max(36)
    .min(8, "Your Password must be at least 8 characters. Please try again.")
    .required("This field is required");

export const CITY_VALIDATOR = Yup.string()
    .min(2, "Please enter a valid city")
    .max(36)
    .matches(/^[A-Za-z]+$/, "Please enter a valid city")
    .required("This field is required");

export const NAME_VALIDATOR = Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(50)
    .min(2, "Please enter minimum 2 characters")
    .required(ERR_REQ);

export const PHONE_VALIDATOR = Yup.string()
    .matches(
        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        "Please enter valid phone number"
    )
    .required("This field is required");

export const PASSWORD_VALIDATOR = Yup.string()
    .required(ERR_REQ)
    .min(8, "Minimum Length Required is 8")
    .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Must Contain At least 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    );
export const CONFIRM_PASSWORD_VALIDATOR = Yup.string()
    .required(ERR_REQ)
    .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
    });
export const OTP_VALIDATOR = Yup.string()
    .required(ERR_REQ)
    .min(6, "OTP must be 6 digits long")
    .max(6, "OTP must be 6 digits long");

export const RegistrationSchema = (admin) =>
    Yup.object({
        firstName: Yup.string().required(ERR_REQ).min(2),
        lastName: Yup.string().required(ERR_REQ).min(2),
        phone: Yup.string()
            .required(ERR_REQ)
            .min(10)
            .matches(
                /^((\+){0,1}91(\s){0,1})?([6-9]\d{9})$/,
                "Enter valid Phone Number"
            ),
        email: Yup.string().required(ERR_REQ).email(),
        role: admin ? Yup.string().required(ERR_REQ) : Yup.string(),
    });

export const PasswordSchema = Yup.object({
    password: Yup.string()
        .required(ERR_REQ)
        .min(8)
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain At least 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    confirmPassword: Yup.string()
        .required(ERR_REQ)
        .min(8)
        .test("passwords-match", "Passwords must match", function (value) {
            return this.parent.password === value;
        }),
});

export const REQUIRED_SCHEMA = Yup.string().required(ERR_REQ);

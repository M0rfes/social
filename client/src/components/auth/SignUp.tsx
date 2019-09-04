import React, { FC, useState, useEffect } from "react";

import { FaTerminal } from "react-icons/fa";
import { Link, RouteComponentProps, Redirect } from "react-router-dom";
import { withFormik, FormikProps, Field, FieldProps } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import "./SignIn.css";
import { SIGN_UP } from "../../mutations/index";
import Errors from "../utils/Errors";
import Input from "./Input";
import AbsoluteWraper from "../utils/AbsoluteWraper";

enum Gender {
  male = "male",
  female = "female",
  unspecified = "unspecified",
}

interface FormValues {
  displayName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  cPassword?: string;
  gender?: Gender;
}
interface otherProps extends RouteComponentProps {}
const SignIn: FC<FormikProps<FormValues> & otherProps> = props => {
  const { handleSubmit: HS, isValid, setErrors, values } = props;
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [sGender, setGender] = useState(values.gender);
  const genders = [Gender.male, Gender.female, Gender.unspecified];
  const [signIn, { data }] = useMutation(SIGN_UP);

  const handelSubmit = (e: any) => {
    e.preventDefault();
    HS(e);
    const data = {
      displayName,
      firstName,
      lastName,
      email,
      password,
      gender: sGender,
    };
    signIn({ variables: { data } });
  };
  useEffect(() => {
    if (data) {
      if (data.createUser) {
        props.history.push(`/`);
      } else {
        setErrors({
          email: "Email or Display Name already exist",
          displayName: "Email or Display Name already exist",
        });
      }
    }
  }, [data]);

  return (
    <AbsoluteWraper>
      <div className="pt-6 flex  flex justify-center  w-full text-5xl text-blue-400 ">
        <FaTerminal />
      </div>

      <form
        className="grid mt-10 border w-10/12 max-w-lg m-auto border-solid border-black-300 shadow p-4 text-center bg-white lg:max-w-6xl lg:w-11/12"
        onSubmit={handelSubmit}
      >
        <Field
          name="displayName"
          render={({ form, field }: FieldProps<FormValues>) => {
            setDisplayName(field.value);

            const error =
              form.dirty && form.touched.displayName && form.errors.displayName
                ? "border border-solid border-red-600 text-red-600 bg-red-100"
                : "";
            return (
              <Input
                type="text"
                label="Display Name"
                field={field}
                error={error}
              >
                {error && <Errors>{form.errors.displayName}</Errors>}
              </Input>
            );
          }}
        />
        <Field
          name="firstName"
          render={({ form, field }: FieldProps<FormValues>) => {
            setFirstName(field.value);
            const error =
              form.dirty && form.touched.firstName && form.errors.firstName
                ? "border border-solid border-red-600 text-red-600 bg-red-100"
                : "";
            return (
              <Input type="text" label="First Name" error={error} field={field}>
                {error && <Errors>{form.errors.firstName}</Errors>}
              </Input>
            );
          }}
        />
        <Field
          name="lastName"
          render={({ form, field }: FieldProps<FormValues>) => {
            setLastName(field.value);
            const error =
              form.dirty && form.touched.lastName && form.errors.lastName
                ? "border border-solid border-red-600 text-red-600 bg-red-100"
                : "";
            return (
              <Input type="text" label="Last Name" error={error} field={field}>
                {error && <Errors>{form.errors.lastName}</Errors>}
              </Input>
            );
          }}
        />
        <Field
          name="email"
          render={({ form, field }: FieldProps<FormValues>) => {
            setEmail(field.value);
            const error =
              form.dirty && form.touched.email && form.errors.email
                ? "border border-solid border-red-600 text-red-600 bg-red-100"
                : "";
            return (
              <Input type="email" label="Email" error={error} field={field}>
                {error && <Errors>{form.errors.email}</Errors>}
              </Input>
            );
          }}
        />
        <Field
          name="password"
          render={({ form, field }: FieldProps<FormValues>) => {
            setPassword(field.value);
            const error =
              form.dirty && form.touched.password && form.errors.password
                ? "border border-solid border-red-600 text-red-600 bg-red-100"
                : "";
            return (
              <Input
                type="password"
                label="Password"
                error={error}
                field={field}
              >
                {error && <Errors>{form.errors.password}</Errors>}
              </Input>
            );
          }}
        />
        <Field
          name="cPassword"
          render={({ form, field }: FieldProps<FormValues>) => {
            const error =
              form.dirty && form.touched.cPassword && form.errors.cPassword
                ? "border border-solid border-red-600 text-red-600 bg-red-100"
                : "";

            return (
              <Input
                type="password"
                label="Conform Password"
                field={field}
                error={error}
              >
                {error && <Errors>{form.errors.cPassword}</Errors>}
              </Input>
            );
          }}
        />
        <div className="span-full my-4 flex justify-around">
          <Field
            name="gender"
            render={({ form, field }: FieldProps<FormValues>) => {
              return genders.map(gender => (
                <div className="inline-block " key={gender}>
                  <label
                    className="inline-flex items-center justify-between"
                    key={gender}
                  >
                    <span className="mr-1">{gender}</span>
                    <input
                      type="checkbox"
                      className="sr-only mr-1"
                      checked={gender === sGender}
                      {...field}
                      onChange={() => setGender(gender)}
                    />
                    <span
                      className="form-checkbox text-blue-400"
                      aria-hidden="true"
                    ></span>
                  </label>
                </div>
              ));
            }}
          />
        </div>
        <div className="flex justify-between content-center my-4 span-full">
          <button
            type="submit"
            className={`py-4 px-3 rounded-lg border border-solid border-black-100 shadow focus:outline-none w-full ${
              isValid ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isValid}
          >
            Signup
          </button>
        </div>
      </form>
      <div className="my-5 text-center">
        <Link to="/">Already a user Login? Signin</Link>
      </div>
    </AbsoluteWraper>
  );
};

// Seating up formik

export default withFormik<otherProps, FormValues>({
  validateOnChange: true,
  validateOnBlur: true,
  validate(form, prop) {
    if (form.password !== form.cPassword) {
      return {
        password: "password and conform password must match",
        cPassword: "password and conform password must match",
      };
    }
  },
  validationSchema: Yup.object().shape({
    displayName: Yup.string()
      .min(5)
      .required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required(),
    cPassword: Yup.string()
      .min(6)
      .required("conform password is required"),
    firstName: Yup.string()
      .min(2)
      .required(),
    lastName: Yup.string()
      .min(2)
      .required(),
    gender: Yup.string()
      .oneOf([Gender.male, Gender.female, Gender.unspecified])
      .required(),
  }),
  mapPropsToValues(p) {
    return {
      gender: Gender.unspecified,
    };
  },
  handleSubmit(_) {},
})(SignIn);

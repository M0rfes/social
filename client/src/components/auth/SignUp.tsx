import React, { FC, useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import { FaTerminal } from "react-icons/fa";
import { Link, RouteComponentProps, Redirect } from "react-router-dom";
import { withFormik, FormikProps, Field, FieldProps } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import "./SignIn.css";
import { SIGN_UP } from "../../mutations/index";
import Errors from "../utils/Errors";

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

const SignIn: FC<FormikProps<FormValues> & RouteComponentProps> = props => {
  const { handleSubmit: HS, isValid, setErrors, values } = props;
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [sGender, setGender] = useState(values.gender);
  const genders = [Gender.male, Gender.female, Gender.unspecified];
  const animation = useSpring({
    from: {
      transform: "translateX(-100vw)",
    },
    to: {
      transform: "translate(0)",
    },
    config: config.wobbly,
  });
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
        props.history.push(`/${data.createUser.id}`);
      } else {
        setErrors({
          email: "Email or Display Name already exist",
          displayName: "Email or Display Name already exist",
        });
      }
    }
  }, [data]);
  return (
    <animated.div style={animation}>
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
              <>
                <label htmlFor="displayName" className="block mt-4">
                  Display Name
                </label>
                <div>
                  <input
                    type="text"
                    required
                    id="displayName"
                    className={`block form-input mt-2  w-full ${error}`}
                    {...field}
                  />
                  {error && <Errors>{form.errors.displayName}</Errors>}
                </div>
              </>
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
              <>
                <label htmlFor="firstName" className="block mt-4">
                  First Name
                </label>
                <div>
                  <input
                    type="text"
                    required
                    id="firstName"
                    className={`block form-input mt-2  w-full ${error}`}
                    {...field}
                  />
                  {error && <Errors>{form.errors.firstName}</Errors>}
                </div>
              </>
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
              <>
                <label htmlFor="lastName" className="block mt-4">
                  Last Name
                </label>
                <div>
                  <input
                    type="text"
                    required
                    id="lastName"
                    className={`block form-input mt-2  w-full ${error}`}
                    {...field}
                  />
                  {error && <Errors>{form.errors.lastName}</Errors>}
                </div>
              </>
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
              <>
                <label htmlFor="userEmail" className="block mt-4">
                  Email
                </label>
                <div>
                  <input
                    type="email"
                    required
                    name="email"
                    id="userEmail"
                    className={`block form-input mt-2  w-full ${error}`}
                    {...field}
                  />
                  {form.touched.email && form.errors.email && (
                    <Errors>{form.errors.email}</Errors>
                  )}
                </div>
              </>
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
              <>
                <label htmlFor="password" className="block mt-4">
                  Password
                </label>
                <div>
                  <input
                    type="password"
                    required
                    id="password"
                    className={`block form-input mt-2  w-full ${error}`}
                    {...field}
                  />
                  {error && <Errors>{form.errors.password}</Errors>}
                </div>
              </>
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
              <>
                <label htmlFor="cPassword" className="block mt-4">
                  Conform Password
                </label>
                <div>
                  <input
                    type="password"
                    required
                    id="cPassword"
                    className={`block form-input mt-2 focus:outline-none w-full ${error}`}
                    {...field}
                  />
                  {error && <Errors>{form.errors.cPassword}</Errors>}
                </div>
              </>
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
    </animated.div>
  );
};

// Seating up formik

export default withFormik<{}, FormValues>({
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
})(SignIn as any);

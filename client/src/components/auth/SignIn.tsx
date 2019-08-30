import React, { FC, useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import { FaTerminal } from "react-icons/fa";
import { Link, RouteComponentProps } from "react-router-dom";
import { withFormik, FormikProps, Field, FieldProps } from "formik";
import * as Yup from "yup";
import { useLazyQuery } from "@apollo/react-hooks";
import useLocalStorage from "react-use-localstorage";

import "./SignIn.css";
import { SIGN_IN } from "../../queries/index";
import Errors from "../utils/Errors";

interface FormValues {
  email: string;
  password: string;
}

const SignIn: FC<FormikProps<FormValues>> = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSubmit: HS, isValid, setErrors } = props;
  const animation = useSpring({
    from: {
      transform: "translateX(-100vw)"
    },
    to: {
      transform: "translate(0)"
    },
    config: config.wobbly
  });
  const [submit, { data, loading, error }] = useLazyQuery(SIGN_IN);
  const [, setToken] = useLocalStorage("token", undefined);
  const handelSubmit = (e: any) => {
    e.preventDefault();
    HS(e);
    submit({ variables: { data: { email, password } } });
  };
  useEffect(() => {
    if (data) {
      if (data.login) {
        setToken(data.login.token);
      } else {
        setErrors({
          email: "invalid credentials",
          password: "invalid credentials"
        });
      }
      // TODO: redrict to App
    }
  }, [data]);
  return (
    <animated.div style={animation}>
      <div className="pt-6 flex  flex justify-center  w-full text-5xl text-blue-400 ">
        <FaTerminal />
      </div>

      <form
        className="mt-10 border w-10/12 max-w-lg m-auto border-solid border-black-300 shadow p-4 text-center"
        onSubmit={handelSubmit}
      >
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
                <input
                  type="password"
                  required
                  id="password"
                  className={`block form-input mt-2 focus:outline-none w-full ${error}`}
                  {...field}
                />
                {form.touched.password && form.errors.password && (
                  <Errors>{form.errors.password}</Errors>
                )}
              </>
            );
          }}
        />

        <div className="flex justify-between content-center my-4">
          <button
            type="submit"
            className={`py-4 px-3 rounded-lg border border-solid border-black-100 shadow focus:outline-none ${
              isValid ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isValid}
          >
            Signup
          </button>
          <Link to="/" className="py-4 ">
            forgot?
          </Link>
        </div>
      </form>
      <div className="mt-5 text-center">
        <Link to="/signup">Don't have a account? Signup</Link>
      </div>
    </animated.div>
  );
};

// Seating up formik

export default withFormik<{}, FormValues>({
  validateOnChange: true,
  validateOnBlur: true,
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required()
  }),
  handleSubmit(_) {}
})(SignIn);

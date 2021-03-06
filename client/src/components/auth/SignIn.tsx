import React, { FC, useState, useEffect, useContext } from "react";
import { FaTerminal } from "react-icons/fa";
import { Link, RouteComponentProps, Redirect } from "react-router-dom";
import { withFormik, FormikProps, Field, FieldProps } from "formik";
import * as Yup from "yup";
import { useLazyQuery } from "@apollo/react-hooks";

import "./SignIn.css";
import { SIGN_IN } from "../../queries/index";
import Errors from "../utils/Errors";
import { AuthContext } from "../../context/AuthContext";
import Input from "./Input";
import AbsoluteWraper from "../utils/AbsoluteWraper";

interface FormValues {
  email: string;
  password: string;
}
interface otherProps extends RouteComponentProps {}
const SignIn: FC<FormikProps<FormValues> & otherProps> = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSubmit: HS, isValid, setErrors } = props;
  const [submit, { data }] = useLazyQuery(SIGN_IN);
  const { setToken } = useContext(AuthContext);
  const handelSubmit = (e: any) => {
    e.preventDefault();
    HS(e);
    submit({ variables: { data: { email, password } } });
  };
  useEffect(() => {
    if (data) {
      if (data.login) {
        setToken(data.login.token);
        props.history.push("/app");
      } else {
        setErrors({
          email: "invalid credentials",
          password: "invalid credentials",
        });
      }
    }
  }, [data]);
  return (
    <AbsoluteWraper>
      <div className="h-screen">
        <div className="pt-6 flex  flex justify-center  w-full text-5xl text-blue-400 ">
          <FaTerminal />
        </div>

        <form
          className="mt-10 border w-10/12 max-w-lg m-auto border-solid border-black-300 shadow p-4 text-center bg-white"
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
      </div>
    </AbsoluteWraper>
  );
};

// Seating up formik

export default withFormik<otherProps, FormValues>({
  validateOnChange: true,
  validateOnBlur: true,
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required(),
  }),
  handleSubmit(_) {},
})(SignIn);

import React, { useState } from 'react';
import { InputContainer, Title, SubmitButton, Errors } from './styled';
import { Field, withFormik, FormikProps } from 'formik';
import { Container } from './styled/index';
import * as Yup from 'yup';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { SIGN_UP } from '../mutation/index';
import { useMutation } from '@apollo/react-hooks';
type Gender = 'male' | 'female' | 'unspecified';

interface SignUpFormValues {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  password: string;
  cPassword: string;
  gender?: Gender;
}

interface SignUpFormProps extends RouteComponentProps {
  lastName?: string;
  firstName?: string;
  displayName?: string;
  email?: string;
  password?: string;
  gender?: string;
}
const SignUP: React.FC<
  FormikProps<SignUpFormValues> & SignUpFormProps
> = props => {
  const [formData, setFormVal] = useState<SignUpFormValues>({
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    cPassword: '',
    gender: 'unspecified',
  });
  const [signUP, { loading, error }] = useMutation(SIGN_UP);
  const {
    displayName,
    email,
    firstName,
    lastName,
    password,
    gender,
  } = formData;
  const handleChange = (e: any) => {
    props.handleChange(e);
    setFormVal({ ...formData, [e.target.name]: e.target.value });
  };
  const handelSubmit = async (e: any) => {
    props.handleSubmit(e);
    try {
      const { data }: any = await signUP({
        variables: {
          data: { firstName, lastName, email, displayName, password },
        },
      });
      console.log(data.createUser);
      props.history.push(`/signin/${data.createUser.email}`);
    } catch {
      props.setErrors({
        displayName: 'Display name or email all ready in use',
        email: 'Display name or email all ready in use',
      });
    }
  };
  return (
    <>
      <Title>Create your account</Title>
      <Container>
        <form onSubmit={handelSubmit}>
          <InputContainer
            error={props.touched.displayName && props.errors.displayName}
          >
            <label>Display Name</label>
            <Field
              component="input"
              name="displayName"
              value={displayName}
              onChange={handleChange}
            />
          </InputContainer>
          {props.touched.displayName && props.errors.displayName && (
            <Errors>{props.errors.displayName}</Errors>
          )}
          <InputContainer error={props.touched.email && props.errors.email}>
            <label>Email</label>
            <Field
              component="input"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </InputContainer>
          {props.touched.email && props.errors.email && (
            <Errors>{props.errors.email}</Errors>
          )}
          <InputContainer
            error={props.touched.firstName && props.errors.firstName}
          >
            <label>First Name</label>
            <Field
              component="input"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
          </InputContainer>
          {props.touched.firstName && props.errors.firstName && (
            <Errors>{props.errors.firstName}</Errors>
          )}
          <InputContainer
            error={props.touched.lastName && props.errors.lastName}
          >
            <label>Last Name</label>
            <Field
              component="input"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </InputContainer>
          {props.touched.lastName && props.errors.lastName && (
            <Errors>{props.errors.lastName}</Errors>
          )}
          <InputContainer
            error={props.touched.password && props.errors.password}
          >
            <label>Password</label>
            <Field
              component="input"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </InputContainer>
          {props.touched.password && props.errors.password && (
            <Errors>{props.errors.password}</Errors>
          )}
          <InputContainer
            error={props.touched.cPassword && props.errors.cPassword}
          >
            <label>Conform Password</label>
            <Field
              component="input"
              type="password"
              name="cPassword"
              onChange={handleChange}
            />
          </InputContainer>
          {props.touched.cPassword && props.errors.cPassword && (
            <Errors>{props.errors.cPassword}</Errors>
          )}
          <InputContainer>
            <label>Gender</label>
            <Field component="select" name="gender" value={gender}>
              <option value="male">male</option>
              <option value="female">Female</option>
              <option value="unspecified">unspecified</option>
            </Field>
          </InputContainer>
          <SubmitButton type="submit" disabled={loading || !props.isValid}>
            Submit
          </SubmitButton>
        </form>
      </Container>
    </>
  );
};
const signUpSchema = Yup.object<SignUpFormValues>({
  displayName: Yup.string()
    .min(2)
    .max(255)
    .required(),
  firstName: Yup.string()
    .min(2)
    .max(255)
    .required(),
  lastName: Yup.string()
    .min(2)
    .max(255)
    .required(),
  email: Yup.string()
    .email('Enter a email ')
    .required(),
  password: Yup.string()
    .min(6)
    .max(255)
    .required(),
  cPassword: Yup.string()
    .min(6)
    .max(255)
    .required('conform password is a required field'),
});
export default withFormik<SignUpFormProps, SignUpFormValues>({
  mapPropsToValues(props) {
    return {
      email: props.email || '',
      password: props.password || '',
      firstName: props.firstName || '',
      lastName: props.lastName || '',
      displayName: props.displayName || '',
      cPassword: props.password || '',
      gender: 'unspecified',
    };
  },
  validate({ password, cPassword }) {
    if (password !== cPassword) {
      return {
        cPassword: 'password and conform password must match',
      };
    }
  },
  validationSchema: signUpSchema,
  validateOnBlur: true,
  handleSubmit(props) {},
})(SignUP);

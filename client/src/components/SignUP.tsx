import React from 'react';
import { InputContainer, Title, SubmitButton, Error } from './styled';
import { Form, Field, withFormik, FormikProps } from 'formik';
import { Container } from './styled/index';
import * as Yup from 'yup';
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

interface SignUpFormProps {
  lastName?: string;
  firstName?: string;
  displayName?: string;
  email?: string;
  password?: string;
}

const SignUP: React.FC<FormikProps<SignUpFormValues>> = props => {
  return (
    <>
      <Title>Create your account</Title>
      <Container>
        <Form>
          <InputContainer focus>
            <label>Display Name</label>
            <Field component="input" name="displayName" />
          </InputContainer>
          {props.touched.displayName && props.errors.displayName && (
            <Error>{props.errors.displayName}</Error>
          )}
          <InputContainer focus>
            <label>Email</label>
            <Field component="input" type="email" name="email" />
          </InputContainer>
          <InputContainer focus>
            <label>First Name</label>
            <Field component="input" name="text" />
          </InputContainer>
          <InputContainer focus>
            <label>Last Name</label>
            <Field component="input" name="lastName" />
          </InputContainer>
          <InputContainer focus>
            <label>Password</label>
            <Field component="input" type="password" name="password" />
          </InputContainer>
          <InputContainer focus>
            <label>Conform Password</label>
            <Field component="input" type="password" name="cPassword" />
          </InputContainer>
          <InputContainer focus>
            <label>Gender</label>
            <Field component="select" name="gender" value={props.values.gender}>
              <option value="male">male</option>
              <option value="female">Female</option>
              <option value="unspecified">unspecified</option>
            </Field>
          </InputContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
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
  password: Yup.string().required(),
  cPassword: Yup.string().required(),
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
  validationSchema: signUpSchema,
  validateOnBlur: true,

  handleSubmit(props) {
    console.log(props);
  },
})(SignUP);

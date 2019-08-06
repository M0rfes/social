import React from 'react';
import { InputContainer, Title, SubmitButton, Lead } from './styled';
import { Form, Field, withFormik, FormikProps } from 'formik';
import { Container } from './styled/index';

type Gender = 'male' | 'female' | 'unspecified';

interface SignUpFormValues {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  password: string;
  cPassword: string;
  gender: Gender;
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
  handleSubmit(props) {
    console.log(props);
  },
})(SignUP);

import React, { useState } from 'react';
import { InputContainer, Title, SubmitButton, Errors } from './styled';
import { Field, withFormik, FormikProps } from 'formik';
import { Container } from './styled/index';
import * as Yup from 'yup';
import { RouteComponentProps } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import { SIGN_IN } from '../queries/index';
import { useContext } from 'react';
import { AuthContext } from '../context/Auth.Context';
interface SignInFormValues {
  email: string;
  password: string;
}

interface SignInFormProps extends RouteComponentProps {
  email?: string;
  password?: string;
}
const SignIn: React.FC<
  FormikProps<SignInFormValues> & SignInFormProps
> = props => {
  const iniEmail = (props.match.params as any).email || '';
  const [formData, setFormVal] = useState<SignInFormValues>({
    email: iniEmail,
    password: '',
  });
  const { token, setToken } = useContext(AuthContext);
  const client = useApolloClient();
  const { email, password } = formData;
  const handleChange = (e: any) => {
    props.handleChange(e);
    setFormVal({ ...formData, [e.target.name]: e.target.value });
  };
  const handelSubmit = async (e: any) => {
    props.handleSubmit(e);
    try {
      const { data, errors } = await client.query({
        query: SIGN_IN,
        variables: { data: { email, password } },
      });
      console.log(data.login);
      setToken(data.login.token);
      if (errors || !data.login) {
        throw errors;
      }
    } catch {
      props.setErrors({
        email: 'invalid credentials',
        password: 'invalid credentials',
      });
    }
  };
  return (
    <>
      <Title>Create your account</Title>
      <Container>
        <form onSubmit={handelSubmit}>
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
          <SubmitButton type="submit" disabled={!props.isValid}>
            Submit
          </SubmitButton>
        </form>
      </Container>
    </>
  );
};
const signUpSchema = Yup.object<SignInFormValues>({
  email: Yup.string()
    .email('Enter a email ')
    .required(),
  password: Yup.string()
    .min(6)
    .max(255)
    .required(),
});
export default withFormik<SignInFormProps, SignInFormValues>({
  mapPropsToValues(props) {
    return {
      email: props.email || '',
      password: props.password || '',
    };
  },

  validationSchema: signUpSchema,
  validateOnBlur: true,
  handleSubmit(props) {},
})(SignIn);

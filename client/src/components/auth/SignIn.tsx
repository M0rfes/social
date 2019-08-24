import React, { useState, useContext } from 'react';
import {
  InputContainer,
  Title,
  SubmitButton,
  Errors,
  FlexWrapper,
} from '../styled';
import { Field, withFormik, FormikProps } from 'formik';
import { Container } from '../styled/index';
import * as Yup from 'yup';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { SIGN_IN, IS_LOGIN } from '../../queries/index';

import { AuthContext } from '../../context/AuthContext';

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
  const { data } = useQuery(IS_LOGIN);
  console.log(data);
  const iniEmail = (props.match.params as any).email || '';
  const [formData, setFormVal] = useState<SignInFormValues>({
    email: iniEmail,
    password: '',
  });
  const { setToken } = useContext(AuthContext);
  const [ref, setRef] = useState(false);
  const client = useApolloClient();
  const { email, password } = formData;
  const handleChange = (e: any) => {
    props.handleChange(e);
    setFormVal({ ...formData, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e: any) => {
    props.handleSubmit(e);
    try {
      const { data, errors, loading } = await client.query({
        query: SIGN_IN,
        variables: { data: { email, password } },
      });
      props.setStatus({
        loading,
      });
      if (errors || !data.login) {
        throw errors;
      }
      setToken(data.login.token);
      setRef(true);
      props.history.push('/profile');
    } catch {
      props.setErrors({
        email: 'invalid credentials',
        password: 'invalid credentials',
      });
    }
  };
  const { from } = props.location.state || { from: '/' };
  if (ref) {
    return <Redirect to={from} />;
  }
  if (data.isLogin) {
    return <Redirect to="/profile" />;
  }
  return (
    <FlexWrapper>
      <Title>Login</Title>
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
    </FlexWrapper>
  );
};

export default withFormik<SignInFormProps, SignInFormValues>({
  mapPropsToValues(props) {
    return {
      email: props.email || '',
      password: props.password || '',
    };
  },

  validationSchema: Yup.object<SignInFormValues>({
    email: Yup.string()
      .email('Enter a email ')
      .required(),
    password: Yup.string()
      .min(6)
      .max(255)
      .required(),
  }),
  validateOnBlur: true,
  handleSubmit(_) {},
})(SignIn);

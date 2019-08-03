import React from 'react';
import Input from './Input';
import { Title, Container } from './styled/index';

const SignUP = () => {
  return (
    <>
      <Title>Create your account</Title>
      <Container>
        <form>
          <Input label="Display Name" type="Text" name="displayName" />
          <Input label="Email" type="email" name="email" />
        </form>
      </Container>
    </>
  );
};

export default SignUP;

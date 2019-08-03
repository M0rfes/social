import React from 'react';

import { Logo, Wrapper, Section, Title, Lead, Button } from './styled/index';

const LoginSignUp = () => {
  console.log();
  return (
    <Wrapper>
      <Section>
        <Logo primary className="fas fa-terminal" />
        <Title>See What's happening in Engineering world right now</Title>
        <Lead>Join us Today.</Lead>
        <Button primary block to="/signup">
          SignUp
        </Button>
        <Button block to="/login">
          login
        </Button>
      </Section>
      <Section primary>
        <Title>Follow interesting people</Title>
        <Title>Take part in conversion</Title>
        <Title>Form a community</Title>
        <Title>Be polite</Title>
      </Section>
    </Wrapper>
  );
};

export default LoginSignUp;

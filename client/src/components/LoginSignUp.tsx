import React from 'react';

import { Logo, Wrapper, Section, Title, Lead, SLink } from './styled/index';

const LoginSignUp = () => {
  console.log();
  return (
    <Wrapper>
      <Section>
        <Logo primary className="fas fa-terminal" />
        <Title>See What's happening in Engineering world right now</Title>
        <Lead>Join us Today.</Lead>
        <SLink primary block to="/signup">
          SignUp
        </SLink>
        <SLink block to="/login">
          login
        </SLink>
      </Section>
      <Section primary>
        <Logo className="fas fa-user-friends" />
        <Title>Follow interesting people</Title>
        <Logo className="fas fa-comments" />
        <Title>Take part in conversion</Title>
      </Section>
    </Wrapper>
  );
};

export default LoginSignUp;

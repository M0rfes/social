import React from 'react';

import { Wrapper, Section, Title, Lead, SLink, Icon } from './styled/index';
import { FaTerminal, FaUserFriends, FaComment } from 'react-icons/fa';

const LoginSignUp = () => {
  console.log();
  return (
    <Wrapper>
      <Section>
        <Icon primary>
          <FaTerminal />
        </Icon>
        <Title>See What's happening in Engineering world right now</Title>
        <Lead>Join us Today.</Lead>
        <SLink primary block to="/signup">
          SignUp
        </SLink>
        <SLink block to="/signin">
          login
        </SLink>
      </Section>
      <Section primary>
        <Icon>
          <FaUserFriends />
        </Icon>
        <Title>Follow interesting people</Title>
        <Icon>
          <FaComment />
        </Icon>
        <Title>Take part in conversion</Title>
      </Section>
    </Wrapper>
  );
};

export default LoginSignUp;

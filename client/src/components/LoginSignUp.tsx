import React, { FC, useContext, useEffect } from 'react';

import { Wrapper, Section, Title, Lead, SLink, Icon } from './styled/index';
import { FaTerminal, FaUserFriends, FaComment } from 'react-icons/fa';
import { RouteComponentProps } from 'react-router';
import { useSpring, animated } from 'react-spring';

const LoginSignUp: FC<RouteComponentProps> = () => {
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

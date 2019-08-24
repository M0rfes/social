import React, { FC } from 'react';

import { Wrapper, Section, Title, Lead, SLink, Icon } from './styled/index';
import { FaTerminal, FaUserFriends, FaComment } from 'react-icons/fa';
import { RouteComponentProps } from 'react-router';
import { useSpring } from 'react-spring';

const LoginSignUp: FC<RouteComponentProps> = () => {
  const slidFromTop = useSpring({
    from: {
      transform: `translateY(-100vh)`,
    },
    to: {
      transform: `translateY(0)`,
    },
    config: {
      delay: 500,
    },
  });
  const slidFromBottom = useSpring({
    from: {
      transform: `translateY(100vh)`,
    },
    to: {
      transform: `translateY(0)`,
    },
    config: {
      delay: 500,
    },
  });
  return (
    <Wrapper>
      <Section style={slidFromTop}>
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
      <Section primary style={slidFromBottom}>
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

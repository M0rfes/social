import React from 'react';
import { Nav } from './styled/nave';
import { Title } from './styled';
import { FC } from 'react';

interface NavProp {
  title: string;
}

const NavBar: FC<NavProp> = props => {
  return (
    <Nav>
      <Title>{props.title}</Title>
    </Nav>
  );
};

export default NavBar;

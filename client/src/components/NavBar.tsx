import React from 'react';
import { Nav, NaveImage, ActionBar } from './styled/nave';
import { Title, Background, Icon } from './styled';
import { FC } from 'react';
import '../index.scss';
import alex from './alex.jpg';

import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
interface NavProp {
  title: string;
  user: {
    displayImage: string;
  };
}

const NavBar: FC<NavProp> = props => {
  return (
    <Background>
      <Nav>
        <NaveImage src={alex} />
        <Title>{props.title}</Title>
      </Nav>
      <ActionBar>
        <Link to="#">
          <Icon primary>
            <FaHome />
          </Icon>
        </Link>
      </ActionBar>
    </Background>
  );
};

export default NavBar;

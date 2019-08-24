import React from 'react';
import { Nav, NaveImage, ActionBar } from './styled/nave';
import { Title, FlexWrapper, Icon } from './styled';
import { FC } from 'react';

import { FaHome, FaSearch, FaUserFriends, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IUser } from '../interface/User';
interface NavProp {
  title: string;
  user: IUser;
}

const NavBar: FC<NavProp> = props => {
  return (
    <div>
      <Nav>
        <Link to="profile">
          <NaveImage src={props.user.displayImage} />
        </Link>
        <Title>{props.title}</Title>
      </Nav>
      <ActionBar>
        <Link to="#">
          <Icon primary>
            <FaHome />
          </Icon>
        </Link>
        <Link to="#">
          <Icon>
            <FaSearch />
          </Icon>
        </Link>
        <Link to="#">
          <Icon>
            <FaUserFriends />
          </Icon>
        </Link>
        <Link to="#">
          <Icon>
            <FaHeart />
          </Icon>
        </Link>
      </ActionBar>
    </div>
  );
};

export default NavBar;

import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { IUser } from '../../interface/User';
import NavBar from '../NavBar';
import { FlexWrapper } from '../styled';
import {
  ProfileCard,
  ProfileImage,
  EditButton,
  Bio,
  Name,
  Icon,
} from '../styled/profile';
import { FaComment, FaUserFriends, FaUser, FaUsers } from 'react-icons/fa';
import { IconTray } from '../styled/profile';
// import console = require('console');

interface Prop {
  user: IUser;
}
const Profile: FC<RouteComponentProps & Prop> = props => {
  useEffect(() => {
    return () => {};
  }, []);
  console.log(props.user.numOfFollowers);
  return (
    <FlexWrapper>
      <NavBar title="profile" user={props.user} />
      <ProfileCard>
        <ProfileImage src={props.user.displayImage} />
        <Name>{props.user.name}</Name>
        <IconTray>
          <Icon>
            {props.user.posts.length} <FaComment />
          </Icon>
          <Icon>
            {props.user.numOfFollowing} <FaUserFriends />
          </Icon>
          <Icon>
            {props.user.numOfFollowers} <FaUsers />
          </Icon>
        </IconTray>
        <EditButton to="edit">Edit</EditButton>
        <Bio>
          <strong>BIO:</strong>
          {props.user.bio
            ? props.user.bio
            : 'Add Bio....................... ... ...'}
        </Bio>
      </ProfileCard>
    </FlexWrapper>
  );
};

export default Profile;

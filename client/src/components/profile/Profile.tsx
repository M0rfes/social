import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { IUser } from '../../interface/User';
import NavBar from '../NavBar';
import { FlexWrapper, Title } from '../styled';
import { ProfileCard, ProfileImage, EditButton, Bio } from '../styled/profile';
import { prop } from 'typegoose';
interface Prop {
  user: IUser;
}
const Profile: FC<RouteComponentProps & Prop> = props => {
  console.log(props);
  return (
    <FlexWrapper>
      <NavBar title="profile" user={props.user} />
      <ProfileCard>
        <ProfileImage src={props.user.displayImage} />
        <EditButton to="edit">
          <Title>Edit</Title>
        </EditButton>

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

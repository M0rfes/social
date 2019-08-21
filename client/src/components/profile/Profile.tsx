import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { IUser } from '../../interface/User';
interface Prop {
  user: IUser;
}
const Profile: FC<RouteComponentProps & Prop> = props => {
  console.log(props);
  return <div>Profile</div>;
};

export default Profile;

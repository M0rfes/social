import React, { ComponentType } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_ME } from '../../queries/index';
import { IUser } from '../../interface/User';
import Loader from '../Loader';

interface Prop {
  component: ComponentType<any>;
  path: string;
  exact?: boolean;
}
const ProtectedRout: React.FC<Prop> = ({
  component: Component,
  exact,
  ...rest
}) => {
  const { loading, error, data } = useQuery<{ me: IUser }>(GET_ME);

  return (
    <Route
      {...rest}
      exact={exact ? true : false}
      render={props => {
        if (error) {
          return (
            <Redirect
              to={{
                pathname: '/signin',
                state: { from: props.location },
              }}
            />
          );
        } else {
          return loading ? (
            <Loader />
          ) : (
            <Component {...props} user={data!.me} />
          );
        }
      }}
    />
  );
};

export default ProtectedRout;

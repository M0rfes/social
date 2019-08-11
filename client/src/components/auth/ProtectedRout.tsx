import React, { ComponentType } from 'react';
import { RouteComponentProps, Redirect, Route } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from '../../queries/index';
interface Prop {
  component: ComponentType<any>;
  path: string;
}
const ProtectedRout: React.FC<Prop> = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(GET_ME);
  return (
    <Route
      {...rest}
      render={props => {
        if (error) {
          return (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          );
        } else {
          return <Component {...props} user={data.me} />;
        }
      }}
    />
  );
};

export default ProtectedRout;

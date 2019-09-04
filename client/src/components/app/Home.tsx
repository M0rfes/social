import React from "react";
import { FC } from "react";
import { RouteComponentProps, Link } from "react-router-dom";

import { IUser } from "../../interface/User";
import Layout from "../Layout";
type Prop = {
  user: IUser;
} & RouteComponentProps;
const Home: FC<Prop> = ({ user }) => {
  return (
    <Layout user={user}>
      Hello {user.name}
      <Link to="/me/edit">go to edit page</Link>
    </Layout>
  );
};

export default Home;

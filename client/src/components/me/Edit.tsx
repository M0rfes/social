import React from "react";
import { FC } from "react";
import { RouteComponentProps } from "react-router";
import { IUser } from "../../interface/User";

interface Props extends RouteComponentProps {
  user: IUser;
}

const Edit: FC<Props> = props => {
  return <div>edit</div>;
};

export default Edit;

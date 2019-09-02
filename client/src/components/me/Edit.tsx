import React, { useRef, useState } from "react";
import { FC } from "react";
import { RouteComponentProps } from "react-router";
import { IUser } from "../../interface/User";
import Layout from "../Layout";
import UseImagePreview from "../utils/hooks/UseImagePreview";
import Image from "./Image";
interface Props extends RouteComponentProps {
  user: IUser;
}

const Edit: FC<Props> = props => {
  const { user } = props;
  const [src, setSrc] = useState(user.displayImage);
  const imagePreview = UseImagePreview(setSrc);
  return (
    <Layout user={{ ...user, displayImage: src }}>
      <form className="w-10/12 m-auto mt-4 ">
        <Image src={src} imagePreview={imagePreview} />
      </form>
    </Layout>
  );
};

export default Edit;

import React, { useRef, useState } from "react";
import { FC } from "react";
import { RouteComponentProps } from "react-router";
import { IUser } from "../../interface/User";
import Layout from "../Layout";

interface Props extends RouteComponentProps {
  user: IUser;
}

const Edit: FC<Props> = props => {
  const { user } = props;
  const [src, setSrc] = useState(user.displayImage);
  return (
    <Layout user={user}>
      <form>
        <div>
          <img src={src} />
          <input
            type="file"
            onChange={e => {
              const reader = new FileReader();
              reader.onload = e => {
                const s = (e.target as any).result;
                console.log((e.target as any).result);
                setSrc((e.target as any).result);
              };
              reader.readAsDataURL(e.target.files![0]);
              console.log();
            }}
          />
        </div>
      </form>
    </Layout>
  );
};

export default Edit;

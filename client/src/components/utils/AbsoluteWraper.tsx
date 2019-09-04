import React from "react";
import { FC } from "react";

const AbsoluteWraper: FC = ({ children }) => {
  return <div className="absolute w-full top-0 ">{children}</div>;
};

export default AbsoluteWraper;

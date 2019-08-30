import React, { FC } from "react";

const Errors: FC = ({ children }) => {
  return <small className="text-center text-red-500">{children}</small>;
};

export default Errors;

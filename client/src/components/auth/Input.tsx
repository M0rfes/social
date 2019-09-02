import React, { FC } from "react";
type Prop = {
  type: string;
  label: string;
  error: string;
  field: any;
};
const Input: FC<Prop> = ({ type, label, error, field, children }) => {
  return (
    <>
      <label htmlFor={label} className="block mt-4">
        {label}
      </label>
      <div>
        <input
          type={type}
          required
          id={label}
          className={`block form-input mt-2 focus:outline-none w-full ${error}`}
          autoComplete="current-password "
          {...field}
        />
        {children}
      </div>
    </>
  );
};

export default Input;

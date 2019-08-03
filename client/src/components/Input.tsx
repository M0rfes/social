import React from 'react';
const Input: React.FC<{ label: string; type: string; name: string }> = ({
  label,
  type,
  name,
}) => {
  return (
    <div className="input">
      <label htmlFor={label} className="mt-1 ml-1">
        Display Name
      </label>
      <input
        type={type}
        name={name}
        className="p-1 mx-1"
        onFocus={console.log}
      />
    </div>
  );
};

export default Input;

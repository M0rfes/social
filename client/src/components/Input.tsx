import React from 'react';
import { InputContainer } from './styled';
const Input: React.FC<{ label: string; type: string; name: string }> = ({
  label,
  type,
  name,
}) => {
  return (
    <InputContainer>
      <label htmlFor={label}>Display Name</label>
      <input type={type} name={name} onFocus={console.log} required />
    </InputContainer>
  );
};

export default Input;

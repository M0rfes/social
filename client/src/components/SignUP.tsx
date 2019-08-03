import React from 'react';
import Input from './Input';

const SignUP = () => {
  return (
    <main>
      <h1 className="m-3 p-5">Create your account</h1>
      <form className="m-4 p-4">
        <Input label="Display Name" type="Text" name="displayName" />
      </form>
    </main>
  );
};

export default SignUP;

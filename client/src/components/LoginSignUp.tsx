import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './styled/index';
const LoginSignUp = () => {
  return (
    <main>
      <section className="Right">
        <Logo className="fas fa-terminal" />
        <h1 className="my-2 p-2">
          See What's happening in Engineering world right now
        </h1>
        <p className="mb-1 p-1">Join us Today.</p>
        <Link to="/signup" className="btn btn-primary btn-block mb-1">
          SignUp
        </Link>
        <button className="btn btn-secondary border-primary btn-block">
          login
        </button>
      </section>
      <section className="Left bg-primary">
        <h1 className="m-3 p-3">Follow interesting people</h1>
        <h1 className="m-3 p-3">Take part in conversion</h1>
      </section>
    </main>
  );
};

export default LoginSignUp;

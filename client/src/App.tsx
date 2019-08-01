import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import LoginSignUp from './components/auth/LoginSignUp';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginSignUp} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

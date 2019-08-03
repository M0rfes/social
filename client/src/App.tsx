import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LoginSignUp from './components/LoginSignUp';
import SignUP from './components/SignUP';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginSignUp} />
          <Route path="/signup" exact component={SignUP} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;

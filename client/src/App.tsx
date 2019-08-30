import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { IconContext } from "react-icons";

import AppContext from "./context";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

const App: React.FC = () => {
  return (
    <AppContext>
      <IconContext.Provider value={{}}>
        <div className="container  w-screen max-w-full">
          <Router>
            <Switch>
              <Route path="/" exact component={SignIn} />
              <Route path="/signup" exact component={SignUp} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </div>
      </IconContext.Provider>
    </AppContext>
  );
};

export default App;

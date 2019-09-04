import React, { useContext } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { __RouterContext } from "react-router";
import { useTransition, animated } from "react-spring";

import { IconContext } from "react-icons";
import AppContext from "./context";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Edit from "./components/me/Edit";
import ProtectedRout from "./components/auth/ProtectedRout";
import Home from "./components/app/Home";

const App: React.FC = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" },
  });
  return (
    <AppContext>
      <IconContext.Provider value={{}}>
        <div className="container  w-screen max-w-full">
          {transitions.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
              <Switch location={item}>
                <Route path="/" exact component={SignIn} />
                <Route path="/signup" exact component={SignUp} />
                <ProtectedRout path="/app" exact component={Home} />
                <ProtectedRout path="/me/edit" exact component={Edit} />
                <Redirect to="/" />
              </Switch>
            </animated.div>
          ))}
        </div>
      </IconContext.Provider>
    </AppContext>
  );
};

export default App;

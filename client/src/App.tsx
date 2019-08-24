import React, { FC } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LoginSignUp from './components/LoginSignUp';
import SignUP from './components/auth/SignUP';
import { ThemeProvider } from 'styled-components';
import SignIn from './components/auth/SignIn';
import ProtectedRout from './components/auth/ProtectedRout';
import { IconContext } from 'react-icons';

import Profile from './components/profile/Profile';
import AppContext from './context';
import { useSpring, animated, config } from 'react-spring';
import { RouteComponentProps } from 'react-router-dom';
// TODO: add theme context and theme reducer

const withAnimation = (Component: any) => {
  const Animated: FC<RouteComponentProps> = props => {
    const anim = useSpring({
      from: {
        opacity: 0.1,
      },
      to: {
        opacity: 1,
      },
      config: config.wobbly,
    });
    return (
      <animated.div style={anim}>
        <Component {...props} />
      </animated.div>
    );
  };
  return Animated;
};

const App: React.FC = () => {
  const theme = {
    primary: '#38a1f3',
    primaryDarker: '#2875b0',
    secondary: '#F9F9F9',
    warning: '#9f6000',
    error: '#d8000c',
    success: '#dff2bf',
    info: '#bde5f8',
    infoDarker: '#9fbfcf',
    dark: '#010101',
  };
  return (
    <AppContext>
      <ThemeProvider theme={theme}>
        <IconContext.Provider value={{}}>
          <Router>
            <Switch>
              <Route path="/" exact component={LoginSignUp} />
              <Route path="/signup" exact component={withAnimation(SignUP)} />
              <Route path="/signin" exact component={withAnimation(SignIn)} />
              <Route path="/signin/:email" component={withAnimation(SignIn)} />
              <ProtectedRout
                path="/profile"
                exact
                component={withAnimation(Profile)}
              />
              <ProtectedRout
                path="/profile/:id"
                component={withAnimation(Profile)}
              />
              <Redirect to="/" />
            </Switch>
          </Router>
        </IconContext.Provider>
      </ThemeProvider>
    </AppContext>
  );
};

export default App;

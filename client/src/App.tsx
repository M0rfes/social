import React from 'react';
import './index.scss';
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
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NavBar from './components/NavBar';
import { IconContext } from 'react-icons';
import { useQuery } from '@apollo/react-hooks';
import { IS_LOGIN } from './queries/index';
import Profile from './components/profile/Profile';
// TODO: add theme context abd theme reducer
const App: React.FC = () => {
  const { data } = useQuery(IS_LOGIN);
  console.log(data);
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
    <ThemeProvider theme={theme}>
      <IconContext.Provider value={{}}>
        <Router>
          <Route
            path="/"
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  classNames="fade"
                  timeout={300}
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route path="/" exact component={LoginSignUp} />
                    <Route path="/signup" exact component={SignUP} />
                    <Route path="/signin" exact component={SignIn} />
                    <Route path="/signin/:email" component={SignIn} />

                    <ProtectedRout path="/profile" component={Profile} />
                    <Redirect to="/" />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Router>
      </IconContext.Provider>
    </ThemeProvider>
  );
};

export default App;

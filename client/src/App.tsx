import React from 'react';
import './index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LoginSignUp from './components/LoginSignUp';
import SignUP from './components/SignUP';
import { ThemeProvider } from 'styled-components';
import SignIn from './components/SignIn';
import AuthProvider from './context/Auth.Context';
import ProtectedRout from './components/auth/ProtectedRout';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NavBar from './components/NavBar';
import { IconContext } from 'react-icons';
// TODO: add theme context abd theme reducer
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
    <AuthProvider>
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

                      <ProtectedRout path="/private" component={SignIn} />
                      <Redirect to="/" />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </Router>
        </IconContext.Provider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;

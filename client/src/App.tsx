import React from 'react';
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
// TODO: add theme context abd theme reducer
const App: React.FC = () => {
  const theme = {
    primary: '#38a1f3',
    primaryDarker: '#2875b0',
    secondary: '#ffffff',
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
        <Router>
          <Switch>
            <Route path="/" exact component={LoginSignUp} />
            <Route path="/signup" exact component={SignUP} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signin/:email" component={SignIn} />
            <ProtectedRout path="/private" component={SignIn} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;

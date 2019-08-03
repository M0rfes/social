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
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact component={LoginSignUp} />
            <Route path="/signup" exact component={SignUP} />
            <Redirect to="/signup" />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;

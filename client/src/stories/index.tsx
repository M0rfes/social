import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import App from '../App';
import Loader from '../components/Loader';
import NavBar from '../components/NavBar';
import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
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

storiesOf('App', module).add('Landing Page', () => <App />);
storiesOf('Loader', module).add('Loader', () => <Loader />);
storiesOf('NavBar', module).add('Nav', () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <NavBar user={{ displayImage: './alex.jpg' }} title="Home" />
    </BrowserRouter>
  </ThemeProvider>
));

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import App from '../App';
import Loader from '../components/Loader';
import NavBar from '../components/NavBar';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Post from '../components/Post';
import { UserData } from './data/user.data';
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

storiesOf('App', module)
  .add('Landing Page', () => <App />)
  .add('Loader', () => <Loader />)
  .add('Nav', () => (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar user={new UserData()} title="Home" />
      </BrowserRouter>
    </ThemeProvider>
  ))
  .add('Post', () => (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Post
          post={{
            body: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo iusto accusamus suscipit facilis deleniti, cumque quidem eum sed corporis! Ducimus?
          `,
            id: '4',
            totalUpVote: 0,
            totalDownVote: 0,
            createdAT: new Date(),
            from: new UserData(),
          }}
        />
      </BrowserRouter>
    </ThemeProvider>
  ));

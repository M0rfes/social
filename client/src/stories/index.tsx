import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import App from '../App';
import Loader from '../components/Loader';
import NavBar from '../components/NavBar';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { UserData } from './data/user.data';
import { PostData } from './data/post.data';
import Post from '../components/Post';
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
const User = new UserData('5', []);
const Post2 = new PostData('2', User);
const User2 = new UserData('6', [Post2]);
storiesOf('App', module)
  .add('Landing Page', () => <App />)
  .add('Loader', () => <Loader />)
  .add('Nav', () => (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar user={User} title="Home" />
      </BrowserRouter>
    </ThemeProvider>
  ))
  .add('Post', () => (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Post post={Post2} user={User} />
      </BrowserRouter>
    </ThemeProvider>
  ));

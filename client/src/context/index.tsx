import React, { FC } from 'react';
import AuthContextProvider from './AuthContext';

const AppContext: FC = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default AppContext;

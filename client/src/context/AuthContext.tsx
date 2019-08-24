import React from 'react';
import { FC } from 'react';
import { createContext } from 'react';
import useLocalStorage from 'react-use-localstorage';

interface AuthContextStore {
  token: string;
  setToken: React.Dispatch<string>;
}
export const AuthContext = createContext({} as AuthContextStore);

const AuthContextProvider: FC = ({ children }) => {
  const [token, setToken] = useLocalStorage('token', undefined);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

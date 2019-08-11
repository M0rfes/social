import React, { createContext } from 'react';
import useLocalStorage from 'react-use-localstorage';
interface AuthStore {
  token: string;
  setToken: React.Dispatch<string>;
}

export const AuthContext = createContext({} as AuthStore);
const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useLocalStorage('token', undefined);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

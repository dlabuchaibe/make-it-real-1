import React, { createContext, useContext } from 'react';
const AuthContext = createContext();

function AuthProvider({children}) {
  const login = () => {
    console.log("login ...");
  };
  const logout = () => {
    console.log("logout ...");
  };
  return (
    <AuthContext.Provider value={{login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}
export {AuthContext, AuthProvider};
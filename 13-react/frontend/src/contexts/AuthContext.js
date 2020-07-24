import React, { createContext, useContext } from 'react';

const AuthContext = createContext();

const AuthenticationProvider = () => {

  const login = () => {
    console.log("login");
  }
  const logout = () => {
    console.log("logout");
  }
  return (
      <AuthContext.Provider
          value={{
              login,
              logout
          }}
          >
      </AuthContext.Provider>
  )
}

export default AuthContext;
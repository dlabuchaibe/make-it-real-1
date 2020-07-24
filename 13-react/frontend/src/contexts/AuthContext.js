import React, { createContext, useContext } from 'react';

const AuthContext = createContext();

const AuthenticationProvider = props => {

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
          }} {...props} 
      />
  )
}

export {AuthContext, AuthenticationProvider};
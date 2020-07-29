import React, {createContext, useState} from 'react';
const AuthContext = createContext();

function AuthProvider(props){
  const [isAuth, setIsAuth] = useState(false);
  const checkAuth = () => {
    return isAuth;
  } ;

  const login = (user) => {
    setIsAuth(true);
    
    localStorage.setItem('token', user.token);
    localStorage.setItem('name', user.name);
    localStorage.setItem('id', user.id);
    localStorage.setItem('username', user.username);
  }
  const logout = () => {
    setIsAuth(false);

    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    localStorage.removeItem('username');
  }
  return (
    <AuthContext.Provider value={{checkAuth, login, logout}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider};

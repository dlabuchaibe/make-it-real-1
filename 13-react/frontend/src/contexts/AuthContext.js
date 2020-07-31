import React, {createContext, useState, useEffect} from 'react';
const AuthContext = createContext();

function AuthProvider(props){
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      setUser({
        username: localStorage.getItem("username"),
        name: localStorage.getItem("name"),
        token: token,
        id: localStorage.getItem("id")
      });
      setIsAuth(true);
    }else{
      setIsAuth(false);
    }
      
  }, []);

  const checkAuth = () => {
    return isAuth;
  } ;

  const login = (user) => {
    setIsAuth(true);
    
    setUser(user);

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
    <AuthContext.Provider value={{user, checkAuth, login, logout}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider};

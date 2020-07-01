import React, { useState } from 'react';
import './App.css';
import 'normalize.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  const [isAuth, setAuth] = useState(false);
  const logout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  }
  return (
    <div>
      <Header isAuth={isAuth} />      
      {
        isAuth ?
          <button
            onClick={()=>{logout()}}
          >Cerrar sesión</button>
        :
          <Login setAuth={setAuth} />
      }        
      
      <Footer />
    </div>
  );
}

export default App;

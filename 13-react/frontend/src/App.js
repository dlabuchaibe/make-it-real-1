import React, { useState, useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/icons/style.css';
import 'normalize.css';
import './App.css';

import Public  from './components/public';
import Private  from './components/private';

function App() {
  const [isAuth, setAuth] = useState(false);
  const logout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  }

  //Hook que se invoca cuando el componente se carga (se monta)
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token!==null){
      setAuth(true);
    }
  }, []);
  return (
    <BrowserRouter>
      <ToastProvider>
        {
          isAuth ?
            <Private logout={logout} /> 
          :
            <Public setAuth={setAuth} />
        }
      </ToastProvider>  
    </BrowserRouter>
  );
}

export default App;

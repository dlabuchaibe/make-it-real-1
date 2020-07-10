import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
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
  return (
    <BrowserRouter>
        {
          isAuth ?
            <Private setAuth={setAuth} /> 
          :
            <Public setAuth={setAuth} />
        }
    </BrowserRouter>
  );
}

export default App;

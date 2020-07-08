import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import PasswordRecovery from './components/PasswordRecovery';

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
            <div> 
              <Header isAuth={isAuth} setAuth={setAuth} />
              <Footer />
            </div> 
          :
            <Switch>
              <Route exact path="/" component={Home}  />
              <Route path="/signin" render={()=><Login setAuth={setAuth} />} />
              <Route path="/signup" component={SignUp} />
              <Route path="/passwordRecovery" component={PasswordRecovery} />
            </Switch>
        }
        
      
      
      
    </BrowserRouter>
  );
}

export default App;

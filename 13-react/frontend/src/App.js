import React, { useState, useEffect, useContext } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import {AuthProvider} from './contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/icons/style.css';
import 'normalize.css';
import './App.css';

import Components from './components';

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
      <AuthProvider>
          <Components />
      </AuthProvider>
        </ToastProvider>  
    </BrowserRouter>
  );
}

export default App;

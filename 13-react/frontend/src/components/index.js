import React, {useContext} from 'react';
import {AuthContext} from './../contexts/AuthContext';
import Public  from './Public';
import Private  from './Private';

function Components() {
  const auth = useContext(AuthContext);
  return (    
      auth.checkAuth() ? 
      <Private />
    :
      <Public />      
  );
}

export default Components;

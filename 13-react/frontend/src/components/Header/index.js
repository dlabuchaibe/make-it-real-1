import React from 'react';
import './index.css';

function Header(props) {
  return (
    <header>
      <h1>Mi Twitter</h1>
      {
        props.isAuth && <p>Bienvenid@</p>        
      }
    </header>
  );
}

export default Header;

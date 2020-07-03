import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../assets/images/logo.svg';
import './index.css';

function Header(props) {
  return (
  <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top logo"
            />{' '}
            My Twitter
          </Link>
        </Navbar.Brand>
      </Navbar>
    </header>
  );
}

export default Header;

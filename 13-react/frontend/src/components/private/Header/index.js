import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../../../assets/images/logo.svg";
import "./index.css";

function Header(props) {
  const logout = () => {
    localStorage.removeItem("token");
    props.logout();
  };
  return (
    <header>
      <Navbar fixed="top" bg="primary" variant="dark">
        <Navbar.Brand>
          <Link to="/">
          <img alt="" src={logo} className="d-inline-block align-top logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />


        <Navbar.Collapse className="justify-content-end">
           
              <button
                onClick={() => {
                  logout();
                }}
              >
                Cerrar sesión
              </button>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;

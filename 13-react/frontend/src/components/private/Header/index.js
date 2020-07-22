import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "./../../../assets/images/logo.svg";
import "./index.css";

function Header(props) {
  const [name, setName] = useState("");

  useEffect(()=>{
    setName(localStorage.getItem("name"));
  }, [])

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
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
        <DropdownButton id="dropdown-basic-button" title={name} className="drop">
          <Dropdown.Item><Link to="/profile">Perfil</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item> <Link 
                onClick={() => {
                  logout();
                }}
              >
                Cerrar sesión
              </Link></Dropdown.Item>
        </DropdownButton>
             
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;

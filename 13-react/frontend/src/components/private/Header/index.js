import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "./../../../assets/images/logo.svg";
import "./index.css";

function Header(props) {
  const history = useHistory();
  const [name, setName] = useState("");

  useEffect(()=>{
    setName(localStorage.getItem("name"));
  }, [])

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    props.logout();
    history.push("/");
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
          <Dropdown.Item as={Link} to="/profile">Perfil</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item> <span 
                onClick={() => {
                  logout();
                }}
              >
                Cerrar sesión
              </span></Dropdown.Item>
        </DropdownButton>
             
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;

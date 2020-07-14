import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";

function Footer(props) {
  return (
    <footer>
      <Navbar fixed="bottom">
        <Navbar.Brand>
          <p>Todos los derechos reservados. Make It Real, 2020.</p>
        </Navbar.Brand>
       
      </Navbar>
    </footer>
  );
}

export default Footer;

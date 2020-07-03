import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';

function Header(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Bienvenidos a Twitter</h1>
          <p>Ingresa ahora</p>
        </Col>
        <Col>
          <ul>
            <li><Link to="/signin">Inicia sesión</Link></li>
            <li><Link to="/signup">Crea tu cuenta</Link></li>        
          </ul>
        </Col>
      </Row>
    </Container>
);
}

export default Header;

import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';
import logo from './../../assets/images/twitter-logo.svg'

function Header(props) {
  return (
    <Container className="home">
      <Row>
        <Col xs={8} className="col col-left">
          <h1>Bienvenidos a Twitter</h1>
          <p>Ingresa ahora</p>
          <p>Sigue lo que te interesa</p>
        </Col>
        <Col className="col col-right">
          <p><img src={logo} alt="Logo" className="logo" /></p>
          <h2>Descrubre lo que está pasando</h2>
          <ul className="list">
            <li className="list-item"><Link className="button button-primary" to="/signin">Inicia sesión</Link></li>
            <li className="list-item"><Link className="button button-secundary" to="/signup">Crea tu cuenta</Link></li>        
          </ul>
        </Col>
      </Row>
    </Container>
);
}

export default Header;

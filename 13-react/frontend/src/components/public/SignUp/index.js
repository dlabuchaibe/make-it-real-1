import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'react-notifications/lib/notifications.css';
import './index.css';

function SignUp(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = () => {
  }

  return (
    <Row className="justify-content-md-center">
      <Col md={5}>
        <Form className="form">
        <h3>Inicia sesión en MyTwitter</h3>
          <Form.Group controlId="formBasicUsername">
            <Form.Control 
              type="text" 
              autoComplete="off" 
              placeholder="Nombre de usuario*"
              value={username} 
              onChange={event => {setUsername(event.target.value)}}
              />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Control 
              type="text" 
              autoComplete="off" 
              placeholder="Nombre*"
              value={name} 
              onChange={event => {setName(event.target.value)}}
              />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control 
              type="email" 
              autoComplete="off" 
              placeholder="Correo*"
              value={email} 
              onChange={event => {setEmail(event.target.value)}}
              />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control 
              type="password" 
              autoComplete="off"
              placeholder="Contraseña*"
              value={password} 
              onChange={event => {setPassword(event.target.value)}}
          />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control 
              type="password" 
              autoComplete="off" 
              placeholder="Confirmar contraseña*"
              value={passwordConfirm} 
              onChange={event => {setPasswordConfirm(event.target.value)}}
          />
          </Form.Group>
          <Button onClick={()=>{handleSubmit()}} variant="primary" type="button" className="button button-primary">
            Crea tu cuenta
          </Button>
          <p>&nbsp;</p>
          <p>¿Ya tienes cuenta? <Link to="/signin">Inicia sesión</Link></p>
        </Form>
      </Col>
    </Row> 
  );
}

export default SignUp;

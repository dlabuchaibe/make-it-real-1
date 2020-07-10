import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
import './index.css';


function PasswordRecovery(props) {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
  }

  return (
    <Row className="justify-content-md-center">
      <Col xs={5}>
        <Form className="form">
        <h3>Recupera tu clave</h3>
          <Form.Group controlId="formBasicEmail">
            <Form.Control 
              type="email" 
              placeholder="Correo electrónico*"
              value={email} 
              onChange={event => {setEmail(event.target.value)}}
              />
          </Form.Group>
          <Button onClick={()=>{handleSubmit()}} variant="primary" type="button" className="button button-primary">
            Recupera tu clave
          </Button>
          <p>&nbsp;</p>
          <p>¿Ya tienes cuenta? <Link to="/signin">Inicia sesión</Link></p>
        </Form>
        <NotificationContainer />
      </Col>
    </Row> 
  );
}

export default PasswordRecovery;

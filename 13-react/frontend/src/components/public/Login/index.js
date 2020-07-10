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


function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const user = {
      username: username,
      password: password
    };
    const url = `${process.env.REACT_APP_API_URL}/api/users/login`;
    axios.post(url,user)
    .then(response => {
      const token = response.data.token;
      if(!!token){
        NotificationManager.success('Bienvenid@', 'Éxito');
        setTimeout(()=>{
          localStorage.setItem('token', token);
          props.setAuth(true);
        }, 3000);
        
      }else{
        NotificationManager.error('Datos no válidos', 'Error');
      }
    })
  }

  return (
    <Row className="justify-content-md-center">
      <Col xs={5}>
        <Form className="form">
        <h3>Inicia sesión en MyTwitter</h3>
          <Form.Group controlId="formBasicEmail">
            <Form.Control 
              type="text" 
              placeholder="Nombre de usuario*"
              value={username} 
              onChange={event => {setUsername(event.target.value)}}
              />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control 
              type="password" 
              placeholder="Contraseña*"
              value={password} 
              onChange={event => {setPassword(event.target.value)}}
          />
          </Form.Group>
          <Button onClick={()=>{handleSubmit()}} variant="primary" type="button" className="button button-primary">
            Inicia sesión
          </Button>
          <p>&nbsp;</p>
          <p>¿Ya tienes cuenta? <Link to="/passwordRecovery">¿Olvidaste tu contraseña?</Link>
          <br />¿No tienes cuenta? <Link to="/signup">Crea una ahora</Link></p>
        </Form>
        <NotificationContainer />
      </Col>
    </Row> 
  );
}

export default Login;
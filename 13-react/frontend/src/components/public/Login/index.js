import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Loading from './../../common/Loading';
import 'react-notifications/lib/notifications.css';
import './index.css';


function Login(props) {
  const { addToast } = useToasts();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = () => {
    setLoading(true);
    const user = {
      username: username,
      password: password
    };
    const url = `${process.env.REACT_APP_API_URL}/api/users/login`;
    axios.post(url,user)
    .then(response => {
      const token = response.data.token;
      const name = response.data.name;
      const id = response.data.id;
      const username = response.data.username;
      if(!!token){
        addToast("Bienvenid@", {
        appearance: 'success',
        autoDismiss: true,
      })
        setTimeout(()=>{
          localStorage.setItem('token', token);
          localStorage.setItem('name', name);
          localStorage.setItem('id', id);
          localStorage.setItem('username', username);
          props.setAuth(true);
          history.push("/");
        }, 3000);
        
      }else{
        setTimeout(()=>{
          setLoading(false);
          addToast('Datos no válidos', {
            appearance: 'error',
            autoDismiss: true,
          });
        }, 3000)
         }
    })
    .catch(err=>{
      setTimeout(()=>{
        setLoading(false);
        addToast('Datos no válidos', {
          appearance: 'error',
          autoDismiss: true,
        });
      }, 3000)
    })
  }

  return (
    <Row className="justify-content-md-center">
      <Col md={5}>
        {
          loading &&
            <Loading />
        }
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
      
      </Col>
    </Row> 
  );
}

export default Login;
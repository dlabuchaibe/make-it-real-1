import React, {useState} from 'react';
import {Link} from 'react-router-dom';
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
    <div>
      <h2>Inicio de sesión</h2>
      <form>
        <p>
          <input 
            type="text" 
            name="" 
            value={username} 
            onChange={event => {setUsername(event.target.value)}}
            placeholder="username" />
        </p>
        <p>
          <input 
            type="password" 
            name="" 
            value={password} 
            onChange={event => {setPassword(event.target.value)}}
            placeholder="password" />
        </p>
        <p><Link to="/passwordRecovery">¿Olvidaste tu clave?</Link></p>
        <p>
          <button 
            onClick={()=>{handleSubmit()}}
            type="button"
          >Enviar</button>
        </p>
          <p>¿No tienes cuenta? <Link to="/signup">Crea una ahora</Link></p>
    
      </form>
      <NotificationContainer />
    </div>
  );
}

export default Login;

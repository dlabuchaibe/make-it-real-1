import React, {useState} from 'react';
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
    fetch(url,{
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      if(!!json.token){
        localStorage.setItem('token', json.token);
        props.setAuth(true);
      }else{
        console.log("Datos no válidos");
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
            placeholder="username" /></p>
        <p>
          <input 
            type="password" 
            name="" 
            value={password} 
            onChange={event => {setPassword(event.target.value)}}
            placeholder="password" /></p>
        <p>
          <button 
            onClick={()=>{handleSubmit()}}
            type="button"
          >Enviar</button></p>
      </form>
    </div>
  );
}

export default Login;

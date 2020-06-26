import React, {useState} from 'react';
import './index.css';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const user = {
      username: username,
      password: password
    };
    console.table(user);
  }

  return (
    <div>
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

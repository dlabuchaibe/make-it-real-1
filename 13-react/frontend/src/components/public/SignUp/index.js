import React, {useState} from 'react';
import {Link} from 'react-router-dom';
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
    <div>
      <h2>Registro de usuario</h2>
      <form>
            <p>
              <input 
                type="text" 
                name="" 
                value={name} 
                onChange={event => {setName(event.target.value)}}
                placeholder="Name" /></p>
            <p>
              <input 
                type="email" 
                name="" 
                value={email} 
                onChange={event => {setEmail(event.target.value)}}
                placeholder="email" /></p>
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
                  <input 
                    type="password" 
                    name="" 
                    value={passwordConfirm} 
                    onChange={event => {setPasswordConfirm(event.target.value)}}
                    placeholder="password confirm" /></p>
        <p>
          <button 
            onClick={()=>{handleSubmit()}}
            type="button"
          >Enviar</button></p>
          <p>¿Ya tienes cuenta? <Link to="/signin">Inicia sesión</Link></p>
      </form>
    </div>
  );
}

export default SignUp;

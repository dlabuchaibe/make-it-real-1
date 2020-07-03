import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './index.css';


function PasswordRecovery(props) {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
  }

  return (
    <div>
      <h2>Recuperación de clave</h2>
      <form>
            <p>
              <input 
                type="email" 
                name="" 
                value={email} 
                onChange={event => {setEmail(event.target.value)}}
                placeholder="email" /></p>
        <p>
          <button 
            onClick={()=>{handleSubmit()}}
            type="button"
          >Enviar</button></p> 
          <p><Link to="/signin">Inicia sesión</Link></p>
    
      </form>
    </div>
  );
}

export default PasswordRecovery;

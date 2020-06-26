import React, {useState} from 'react';
import './index.css';


function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={()=>{setCount(count + 1)}}>Contar</button>
    </div>
  );
}

export default Counter;

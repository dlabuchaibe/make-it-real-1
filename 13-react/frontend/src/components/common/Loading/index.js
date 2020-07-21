import React from 'react';
import './index.css';

function Loading() {
  return (
    <div className="loading">
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
}

export default Loading;

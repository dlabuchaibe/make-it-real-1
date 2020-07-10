import React, { useState } from 'react';

import Header from './Header';
import Footer from './Footer';

function Private(props) {
    
  return (
    <div>
        <Header setAuth={props.setAuth} />
        <Footer/>
    </div>
  );
}

export default Private;

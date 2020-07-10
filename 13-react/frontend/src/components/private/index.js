import React, { useState } from 'react';

import Header from './Header';
import Tweets from './Tweets';
import Footer from './Footer';

function Private(props) {
    
  return (
    <div>
        <Header setAuth={props.setAuth} />
        <Tweets />
        <Footer/>
    </div>
  );
}

export default Private;

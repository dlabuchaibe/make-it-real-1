import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function Private(props) {
    
  return (
    <div>
        <Header logout={props.logout} />
        <Content />
        <Footer/>
    </div>
  );
}

export default Private;

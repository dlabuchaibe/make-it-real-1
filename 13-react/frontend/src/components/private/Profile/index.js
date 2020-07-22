import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from '../../common/Loading';
import './index.css';

function Profile() {

  useEffect(()=>{
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_API_URL}/api/users/info`;
    Axios.get(url,{
      headers: {
        "content-type": "application/json",
        "x-access-token": token,
      },
    })
    .then(response => {
      console.log(response);
    })
  })

  return (

    <Row className="justify-content-md-center content">
      <Col md={3} xs={12}></Col>
      <Col md={4} xs={12}>
        <p><Link to="/">Regresar</Link></p>
     

      </Col>
      <Col md={3} xs={12}></Col>
    </Row>
    
      
        
    
  );
}

export default Profile;

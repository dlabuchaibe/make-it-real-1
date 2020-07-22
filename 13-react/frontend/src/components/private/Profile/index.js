import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loading from "../../common/Loading";
import "./index.css";

function Profile() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const loadUserInfo = () => {
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_API_URL}/api/users/info`;
    Axios.get(url, {
      headers: {
        "content-type": "application/json",
        "x-access-token": token,
      },
    }).then((response) => {
      setName(response.data.name);
      setEmail(response.data.email);
      setUsername(response.data.username);
    });
  };
  useEffect(() => {
    loadUserInfo();
  }, []);

  return (
    <Row className="justify-content-md-center content">
      <Col md={3} xs={12}></Col>
      <Col md={4} xs={12}>
        <p>
          <Link to="/">Regresar</Link>
        </p>

        <h2>Información del usuario</h2>
        <p>
          <strong>Nombre: </strong>
          {name}
        </p>
        <p>
          <strong>Nombre de usuario: </strong>
          {username}
        </p>
        <p>
        <strong>Email: </strong>
          {email}
        </p>
      </Col>
      <Col md={3} xs={12}></Col>
    </Row>
  );
}

export default Profile;

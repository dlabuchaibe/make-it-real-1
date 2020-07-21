import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Tweets from './../Tweets';
import Dummy from './../Dummy';
import "./index.css";

function Content(props) {
  return (
    <Row className="justify-content-md-center content">
      <Col md={3} xs={12}><Dummy /></Col>
      <Col md={4} xs={12}><Tweets /></Col>
      <Col md={3} xs={12}><Dummy /><p>&nbsp;</p><Dummy /></Col>
    </Row>
  );
}

export default Content;

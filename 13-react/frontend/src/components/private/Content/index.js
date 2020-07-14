import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Tweets from './../Tweets';
import Dummy from './../Dummy';
import "./index.css";

function Content(props) {
  return (
    <Row className="justify-content-md-center content">
      <Col xs={3}><Dummy /></Col>
      <Col xs={4}><Tweets /></Col>
      <Col xs={3}><Dummy /><p>&nbsp;</p><Dummy /></Col>
    </Row>
  );
}

export default Content;

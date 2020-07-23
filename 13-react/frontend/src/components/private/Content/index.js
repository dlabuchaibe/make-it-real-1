import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Tweets from './../Tweets';
import Dummy from './../Dummy';
import "./index.css";

function Content(props) {
  return (
    <Row className="justify-content-md-center content">
      <Col md={{ order: "first", span: 3 }} xs={{ order: "last", span: 12 }}><Dummy /></Col>
      <Col md={{ order: "last", span: 4 }} xs={{ order: "first", span: 12 }}><Tweets /></Col>
      <Col md={{ order: "last", span: 3 }} xs={{ order: "last", span: 12 }}><Dummy /><Dummy /></Col>
    </Row>
  );
}

export default Content;

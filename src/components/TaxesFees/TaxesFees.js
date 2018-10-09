import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class TaxesFees extends Component {
  state = {};
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}> Est. taxes & fees (Based on 920262) </Col>
        <Col md={6}> {`$${this.props.taxes}`} </Col>
      </Row>
    );
  }
}

export default TaxesFees;

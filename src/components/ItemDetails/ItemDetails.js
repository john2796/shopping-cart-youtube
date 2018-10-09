import React, { Component } from "react";
import { Button, Collapse, Well, Media, Row, Col } from "react-bootstrap";

class ItemDetails extends Component {
  state = {
    open: false
  };
  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
          style={{ outline: "none" }}
        >
          {this.state.open === false ? `See` : `Hide `} items details
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img
                    src="https://i5.walmartimages.com/asr/90c1aad2-a3b3-4711-a29f-7b42b25aeadf_1.e83f74dfd7486d797bd0882996d1e3a4.jpeg"
                    alt="thumbnail"
                    width={100}
                    heigth={100}
                  />
                </Media.Left>
                <Media.Body>
                  <p>
                    Essential by OFM ESS-3223 Racing Style Leather Gaming Chari,
                    White
                  </p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong> {`$${this.props.price}`} </strong>
                      <br />
                      <strong className="price-strike">
                        {`$${this.props.price}`}
                      </strong>
                    </Col>
                    <Col md={6}>Qty: 1</Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ItemDetails;

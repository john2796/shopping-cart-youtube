import React, { Component } from "react";
import { connect } from "react-redux";
import { handleChange } from "../actions/promoCodeActions";
import {
  Button,
  Collapse,
  Well,
  Form,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

class PromoCodeDiscount extends Component {
  state = {
    open: false
  };

  handleChange = e => {
    this.props.handleChange(e);
  };

  render() {
    console.log(this.props.givesDiscount);
    return (
      <div>
        <Button
          className="promo-code-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
          style={{ outline: "none" }}
        >
          {this.state.open === false ? `Apply ` : `Hide `}
          promo code
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Row className="show-grid">
                <Col md={12}>
                  <Form>
                    <FormGroup controlId="formInlineName">
                      <ControlLabel>Promo Code</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Enter Promo code"
                        value={this.props.promoCode}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <Button
                      block
                      bsStyle="success"
                      className="btn-round"
                      disabled={this.props.isDisabled}
                      onClick={this.props.giveDiscount}
                    >
                      Apply
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    promoCode: state.promoCode.value
  };
};

export default connect(
  mapStateToProps,
  { handleChange }
)(PromoCodeDiscount);

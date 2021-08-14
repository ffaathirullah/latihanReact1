import React, { Component, Fragment } from "react";
import { CardProduct } from "./CardProduct/CardProduct";
import { connect } from "react-redux";

class Product extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src="" alt="" />
          </div>
          <div className="trolley">
            <img src="" alt="" />
            <div className="count"></div>
          </div>
        </div>
        <CardProduct />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

export default Product;

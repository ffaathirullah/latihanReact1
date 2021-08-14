import React, { Component, Fragment } from "react";
import { CardProduct } from "./CardProduct/CardProduct";
import { connect } from "react-redux";
import { RootContext } from "./../Home/Home";

class Product extends Component {
  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
          return (
            <Fragment>
              <div className="header">
                <div className="logo">
                  <img src="" alt="" />
                </div>
                <div className="trolley">
                  <img src="" alt="" />
                  <div className="count">{value.state.totalOrder}</div>
                </div>
              </div>
              <CardProduct />
            </Fragment>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

export default Product;

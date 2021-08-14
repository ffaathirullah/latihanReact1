import React, { Component, Fragment } from "react";
import { CardProduct } from "./CardProduct/CardProduct";
import { GlobalConsumer } from "./../../context/context";

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
            <div className="count">{this.props.state.totalOrder}</div>
          </div>
        </div>
        <CardProduct />
      </Fragment>
    );
  }
}

export default GlobalConsumer(Product);

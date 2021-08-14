import React, { Component } from "react";
import { connect } from "react-redux";
import { GlobalConsumer } from "./../../../context/context";
class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <button
          className="minus"
          onClick={() => this.props.dispatch({ type: "MINUS_ORDER" })}
        >
          -
        </button>
        <input type="text" value={this.props.state.totalOrder} />
        <button
          className="plus"
          onClick={() => this.props.dispatch({ type: "PLUS_ORDER" })}
        >
          +
        </button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
//     handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
//   };
// };
export default GlobalConsumer(Counter);

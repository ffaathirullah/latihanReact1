import React, { Component } from "react";
import { connect } from "react-redux";
import ActionType from "./../../../redux/reducer/globalActioType";
import { RootContext } from "./../../Home/Home";
class Counter extends Component {
  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
          console.log("value", value);
          return (
            <div className="counter">
              <button
                className="minus"
                onClick={() => value.dispatch({ type: "MINUS_ORDER" })}
              >
                -
              </button>
              <input type="text" value={value.state.totalOrder} />
              <button
                className="plus"
                onClick={() => value.dispatch({ type: "PLUS_ORDER" })}
              >
                +
              </button>
            </div>
          );
        }}
      </RootContext.Consumer>
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
export default Counter;

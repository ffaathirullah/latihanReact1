//reducer
import ActionType from "./globalActioType";

const initState = {
  totalOrder: 0,
};

const rootReducer = (state = initState, action) => {
  if (action.type === ActionType.PLUS_ORDER) {
    return {
      ...state,
      totalOrder: state.totalOrder + 1,
    };
  }
  if (action.type === ActionType.MINUS_ORDER) {
    let totalOrders = 0;
    if (state.totalOrder > 0) {
      totalOrders = state.totalOrder - 1;
    }
    return {
      ...state,
      totalOrder: totalOrders,
    };
  }
  return state;
};

export default rootReducer;

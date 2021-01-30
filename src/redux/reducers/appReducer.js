import { DECREMENT, INCREMENT } from "redux/actions/appActions";

const initialState = {
  counter: 0,
};

export const appReducer = (state=initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + (action.payload || 1),
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

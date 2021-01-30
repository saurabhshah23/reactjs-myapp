// You can use CONSTANTS.js file for below definitions of constants and import here.
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// Without THUNK MIDDLEWARE only actions can be dispatched.
export const incrementAction = (payload) => ({
  type: INCREMENT,
  payload
});

export const decrementAction = () => ({
  type: DECREMENT,
});

// THUNK MIDDLEWARE enables dispatch within action function's return method.
export const increment = (step) => {
  return (dispatch) => {
    console.log("dispatch=", dispatch);
    dispatch(incrementAction(step));
  };
};

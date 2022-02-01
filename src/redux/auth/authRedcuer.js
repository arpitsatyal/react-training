import { LOGIN } from "./authTypes";

const initalState = {
  isLoggedIn: false
};

const authRedcuer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true
      };
    default:
      return state;
  }
};

export default authRedcuer;

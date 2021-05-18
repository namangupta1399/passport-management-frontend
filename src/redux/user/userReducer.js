import { SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS } from "./userTypes";

const initialState = {
  signUp: {
    email: undefined,
    password: undefined,
    userRole: undefined
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        signUp: { ...action.payload },
      };
    case SIGNUP_SUCCESS:
      return {
        ...state
        // message: "User registered successfully!",
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

import { SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS } from "./signUpTypes";

const initialState = {
  email: undefined,
  password: undefined,
  loading: undefined,
  message: undefined,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        ...action.payload,
      };
    case SIGNUP_SUCCESS:
      return {
        ...initialState,
        message: "User registered successfully!",
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default signUpReducer;

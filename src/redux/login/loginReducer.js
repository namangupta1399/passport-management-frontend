import { FORM_SUCCESS, SIGNUP } from "./loginTypes";

const initialState = {
  currentUser: undefined,
  loggedIn: undefined,
  signInForm: {
    email: undefined,
    password: undefined,
    role: undefined,
  },
  signUpForm: {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: undefined,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        signUpForm: { ...action.payload },
      };
    case FORM_SUCCESS
    default:
      return state;
  }
};

export default userReducer;

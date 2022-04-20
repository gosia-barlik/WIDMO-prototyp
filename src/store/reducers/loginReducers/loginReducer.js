import {
    ISLOGINOPEN,
    EMAIL,
    PASSWORD,
    ISLOGGEDIN
  } from "../../loginConsts";

  const initialState = {
    isLoginOpen: "",
    email: "",
    password: "",
    isLoggedIn: false,
  };
  
  export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case ISLOGINOPEN: {
        return {
          ...state,
          isLoginOpen: action.payload,
        };
      }
      case EMAIL: {
        return {
          ...state,
          email: action.payload,
        };
      }
      case PASSWORD: {
        return {
          ...state,
          password: action.payload,
        };
      }
      case ISLOGGEDIN: {
        return {
          ...state,
          isLoggedIn: action.payload,
        };
      }
      default:
        return state;
    }
  };
import {
    ISLOGINOPEN,
    EMAIL,
    PASSWORD,
    ISLOGGEDIN,
    ACCESSTOKEN
  } from "../../loginConsts";

  const initialState = {
    isLoginOpen: "",
    email: "",
    password: "",
    accessToken: "",
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
      case ACCESSTOKEN: {
        return {
          ...state,
          accessToken: action.payload,
        };
      }
      default:
        return state;
    }
  };
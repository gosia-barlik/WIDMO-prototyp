import {
    ISLOGINOPEN,
    EMAIL,
    PASSWORD,
    ISLOGGEDIN,
    ACCESSTOKEN,
    //Sign Up
    ISSIGNUPOPEN,
    USERNAME,
    ISSIGNEDUP,
    //User Drawer
    ISDRAWEROPEN
  } from "../../userConsts";

  const initialState = {
    isLoginOpen: "",
    email: "",
    password: "",
    accessToken: "",
    isLoggedIn: false,
    //Sign Up
    isSignUpOpen: false,
    userName: "",
    isSignedUp:"",
    //User Drawer
    isDrawerOpen: false
  };
  
  export const userReducer = (state = initialState, action) => {
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
      //SIGN UP
      case ISSIGNUPOPEN: {
        return {
          ...state,
          isSignUpOpen: action.payload,
        };
      }
      case USERNAME: {
        return {
          ...state,
          userName: action.payload,
        };
      }
      case ISSIGNEDUP: {
        return {
          ...state,
          isSignedUp: action.payload,
        };
      }
      //USER DRAWER
      case ISDRAWEROPEN: {
        return {
          ...state,
          isDrawerOpen: action.payload,
        };
      }
      default:
        return state;
    }
  };
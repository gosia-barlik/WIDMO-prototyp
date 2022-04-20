import {
    ISLOGINOPEN
  } from "../../loginConsts";

  const initialState = {
    isLoginOpen: "",
    email: "",
    password: ""
  };
  
  export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case ISLOGINOPEN: {
        return {
          ...state,
          isLoginOpen: action.payload,
        };
      }
      default:
        return state;
    }
  };
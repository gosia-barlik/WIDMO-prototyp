import {
    ISLOGINOPEN,
    EMAIL,
    PASSWORD,
    ISLOGGEDIN,
    ACCESSTOKEN
  } from "../loginConsts";

  export const setIsLoginOpen = (isLoginOpen) => {
    return { type: ISLOGINOPEN, payload: isLoginOpen };
  };
  export const setEmail = (email) => {
    return { type: EMAIL, payload: email };
  };
  export const setPassword = (password) => {
    return { type: PASSWORD, payload: password };
  };
  export const setIsLoggedIn = (isLoggedIn) => {
    return { type: ISLOGGEDIN, payload: isLoggedIn };
  };
  export const setAccessToken = (accessToken) => {
    return { type: ACCESSTOKEN, payload: accessToken };
  };
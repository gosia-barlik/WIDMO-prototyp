import {
  ISLOGINOPEN,
  EMAIL,
  PASSWORD,
  ISLOGGEDIN,
  ACCESSTOKEN,
  ISSIGNUPOPEN,
  USERNAME,
  ISSIGNEDUP,
  ISDRAWEROPEN
} from "../userConsts";

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
//SIGN UP
export const setIsSignUpOpen = (isSignUpOpen) => {
  return { type: ISSIGNUPOPEN, payload: isSignUpOpen };
};
export const setUserName = (userName) => {
  return { type: USERNAME, payload: userName };
};
export const setIsSignedUp = (isSignedUp) => {
  return { type: ISSIGNEDUP, payload: isSignedUp };
};
//USER DRAWER
export const setIsDrawerOpen = (isDrawerOpen) => {
  return { type: ISDRAWEROPEN, payload: isDrawerOpen };
};
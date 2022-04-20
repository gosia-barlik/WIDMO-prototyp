import {
    ISLOGINOPEN
  } from "../loginConsts";

  export const setIsLoginOpen = (isLoginOpen) => {
    return { type: ISLOGINOPEN, payload: isLoginOpen };
  };
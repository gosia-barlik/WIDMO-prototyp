import {
  RODO,
  APPLICATIONWAY,
  APPLICATIONEXPECTATION,
  APPLICATIONDATE,
  CONTACTINFORMATION,
} from "../creatorConsts";

//RODO
export const setRODO = (rodoText) => {
  return { type: RODO, payload: rodoText };
};
export const setApplicationWay = (applicationWay) => {
  return { type: APPLICATIONWAY, payload: applicationWay };
};
export const setApplicationExpectation = (applicationExpectation) => {
  return { type: APPLICATIONEXPECTATION, payload: applicationExpectation };
};
export const setApplicationDate = (applicationDate) => {
  return { type: APPLICATIONDATE, payload: applicationDate };
};
export const setContactInformation = (contactInformation) => {
  return { type: CONTACTINFORMATION, payload: contactInformation };
};


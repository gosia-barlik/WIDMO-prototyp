import { RODO } from "../consts";

//RODO
export const setRODO = (rodoText) => {
  return { type: RODO, payload: rodoText };
};
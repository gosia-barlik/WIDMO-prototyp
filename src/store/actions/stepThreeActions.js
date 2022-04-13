import { RODO } from "../creatorConsts";

//RODO
export const setRODO = (rodoText) => {
  return { type: RODO, payload: rodoText };
};
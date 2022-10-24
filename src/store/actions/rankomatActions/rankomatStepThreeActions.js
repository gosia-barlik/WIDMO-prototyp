import {
  ALL,
  FAVORITES,
  RESERVES,
  REJECTED,
  CHECKED,
  SELECTED,
  SHOWALL,
  SHOWFAVORITES,
  SHOWRESERVES,
  SHOWREJECTED,
} from "../../rankomatConsts";

export const setAll = (all) => {
  return { type: ALL, payload: all };
};
export const setFavorites = (favorites) => {
  return { type: FAVORITES, payload: favorites };
};
export const setReserves = (reserves) => {
  return { type: RESERVES, payload: reserves };
};
export const setRejected = (rejected) => {
  return { type: REJECTED, payload: rejected };
};
export const setChecked = (checked) => {
  return { type: CHECKED, payload: checked };
};
export const setSelected = (selected) => {
  return { type: SELECTED, payload: selected };
};
export const setShowAll = (boolean) => {
  return { type: SHOWALL, payload: boolean };
};
export const setShowFavorites = (boolean) => {
  return { type: SHOWFAVORITES, payload: boolean };
};
export const setShowReserves = (boolean) => {
  return { type: SHOWRESERVES, payload: boolean };
};
export const setShowRejected = (boolean) => {
  return { type: SHOWREJECTED, payload: boolean };
};

import {
  ALL,
  FAVORITES,
  RESERVES,
  REJECTED,
  CHECKED,
  SELECTED,
  SHOWALL,
  SHOWFAVORITES,
  SHOWREJECTED,
  SHOWRESERVES,
  INITIALFILTERS,
} from "../../rankomatConsts";

const initialState = {
  all: [],
  favorites: [],
  reserves: [],
  rejected: [],
  checked: [],
  selected: [],

  showAll: true,
  showFavorites: false,
  showReserves: false,
  showRejected: false,

  initialFilters: [{
    name: "Professional skill",
    value: "professional skill",
    id: 0,
    label: "Umiejętności twarde",
    weight: 2,
    checked: true,
  },
  {
    name: "Soft skill",
    value: "soft skill",
    id: 1,
    label: "Umiejętności miękkie",
    weight: 2,
    checked: true,
  },
  {
    name: "Language skill",
    value: "language skill",
    id: 2,
    label: "Umiejętności językowe",
    weight: 2,
    checked: true,
  },
  {
    name: "Education",
    value: "education",
    id: 3,
    label: "Edukacja",
    weight: 2,
    checked: true,
  }
],
};


export const rankomatStepThreeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL: {
      return {
        ...state,
        all: action.payload,
      };
    }
  }
  switch (action.type) {
    case FAVORITES: {
      return {
        ...state,
        favorites: action.payload,
      };
    }
    case RESERVES: {
      return {
        ...state,
        reserves: action.payload,
      };
    }
    case REJECTED: {
      return {
        ...state,
        rejected: action.payload,
      };
    }
    case CHECKED: {
      return {
        ...state,
        checked: action.payload,
      };
    }
    case SELECTED: {
      return {
        ...state,
        selected: action.payload,
      };
    }
    case SHOWALL: {
      return {
        ...state,
        showAll: action.payload,
      };
    }
    case SHOWFAVORITES: {
      return {
        ...state,
        showFavorites: action.payload,
      };
    }
    case SHOWRESERVES: {
      return {
        ...state,
        showReserves: action.payload,
      };
    }
    case SHOWREJECTED: {
      return {
        ...state,
        showRejected: action.payload,
      };
    }
    case INITIALFILTERS: { 
      return {
        ...state,
        initialFilters: action.payload,
      };
    }
    default:
      return state;
  }
};

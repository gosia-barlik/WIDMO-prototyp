import {
  RODO
} from "../../creatorConsts";

const initialState = {
  rodo: ""
};

export const stepThreeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RODO: {
      return {
        ...state,
        rodo: action.payload
      };
    }
    default:
      return state;
  }
};

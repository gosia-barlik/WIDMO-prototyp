import {
  JOBOFFER
} from "../../rankomatConsts";

const initialState = {
  jobOffer: ""
};

export const rankomatStepOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOBOFFER: {
      return {
        ...state,
        keyword: action.payload,
      };
    }
    default:
      return state;
  }
};

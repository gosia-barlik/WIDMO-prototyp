import {
  RESUMES,
  KEYWORD
} from "../../rankomatConsts";

const initialState = {
  resumes: [],
  keyword: []
};

export const rankomatStepTwoReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESUMES: {
      return {
        ...state,
        resumes: action.payload,
      };
    }
    case KEYWORD: {
      return {
        ...state,
        keyword: action.payload,
      };
    }
    default:
      return state;
  }
};

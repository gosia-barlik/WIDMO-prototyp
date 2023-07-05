import {
  JOBOFFER,
  ANALYSISID, 
  ANALYSISNAME,

} from "../../rankomatConsts";

const initialState = {
  jobOffer: "",
  analysisId: "",
  analysisName:"",
};

export const rankomatStepOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOBOFFER: {
      return {
        ...state,
        keyword: action.payload,
      };
    }
    case ANALYSISID: {
      return {
        ...state,
        keyword: action.payload,
      };
    }
    case ANALYSISNAME: {
      return {
        ...state,
        keyword: action.payload,
      };
    }

    default:
      return state;
  }
};

import {
  RODO,
  APPLICATIONWAY,
  APPLICATIONEXPECTATION,
  APPLICATIONDATE,
  CONTACTINFORMATION,
} from "../../creatorConsts";

const initialState = {
  rodo: "",
  applicationWay: "",
  applicationExpectation: "",
  applicationDate: "",
  contactInformation: ""
};

export const stepThreeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RODO: {
      return {
        ...state,
        rodo: action.payload,
      };
    }
    case APPLICATIONWAY: {
      return {
        ...state,
        applicationWay: action.payload,
      };
    }
    case APPLICATIONEXPECTATION: {
      return {
        ...state,
        applicationExpectation: action.payload,
      };
    }
    case APPLICATIONDATE: {
      return {
        ...state,
        applicationDate: action.payload,
      };
    }
    case CONTACTINFORMATION: {
      return {
        ...state,
        contactInformation: action.payload,
      };
    }
    default:
      return state;
  }
};

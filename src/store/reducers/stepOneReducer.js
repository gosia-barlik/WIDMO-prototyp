import {
  SEARCHEDPOSITION,
  SHOWRESULTS,
  ACTIVESTEP,
  SALARYTYPE,
  SALARYFROM,
  SALARYTO,
  SALARYTIME,
  SALARYCONTRACT,
  ADDRESSCOUNTRY,
  ADDRESSCITY,
  ADDRESSSTREET,
  WORKMODE,
  CONTRACTTYPE,
  WORKMODEL,
  RECRUITMENTMODE,
  ABOUTCOMPANY,
  LOGO
} from "../consts";

const initialState = {
  searchedPosition: "",
  showResults: false,//todo przeniesc do state
  activeStep: 0,//todo przeniesc do state
  salaryType: "",
  salaryFrom: "",
  salaryTo: "",
  salaryTime: "",
  salaryContract: "",
  addressCountry: "",
  addressCity: "",
  addressStreet: "",
  workMode: "",
  contractType: "",
  workModel: "",
  recruitmentMode: "",
  aboutCompany: "",
  logo: ""
};

export const stepOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHEDPOSITION: {
      return {
        ...state,
        searchedPosition: action.payload,
      };
    }
    case SHOWRESULTS: {
      return {
        ...state,
        showResults: action.payload,
      };
    }
    case ACTIVESTEP: {
      return {
        ...state,
        activeStep: action.payload,
      };
    }
    case SALARYTYPE: {
      return {
        ...state,
        salaryType: action.payload,
      };
    }
    case SALARYFROM: {
      return {
        ...state,
        salaryFrom: action.payload,
      };
    }
    case SALARYTO: {
      return {
        ...state,
        salaryTo: action.payload,
      };
    }
    case SALARYTIME: {
      return {
        ...state,
        salaryTime: action.payload,
      };
    }
    case SALARYCONTRACT: {
      return {
        ...state,
        salaryContract: action.payload,
      };
    }
    case ADDRESSCOUNTRY: {
      return {
        ...state,
        addressCountry: action.payload,
      };
    }
    case ADDRESSCITY: {
      return {
        ...state,
        addressCity: action.payload,
      };
    }
    case ADDRESSSTREET: {
      return {
        ...state,
        addressStreet: action.payload,
      };
    }
    case WORKMODE: {
      return {
        ...state,
        workMode: action.payload,
      };
    }
    case CONTRACTTYPE: {
      return {
        ...state,
        contractType: action.payload,
      };
    }
    case WORKMODEL: {
      return {
        ...state,
        workModel: action.payload,
      };
    }
    case RECRUITMENTMODE: {
      return {
        ...state,
        recruitmentMode: action.payload,
      };
    }
    case ABOUTCOMPANY: {
      return {
        ...state,
        aboutCompany: action.payload,
      };
    }
    case LOGO: {
      return {
        ...state,
        logo: action.payload,
      };
    }
    default:
      return state;
  }
};

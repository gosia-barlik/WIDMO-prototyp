import {
  SEARCHEDPOSITION,
  SHOWRESULTS,
  ACTIVESTEP,
  SALARYTYPE,
  SALARYFROM,
  SALARYTO,
  SALARYCURRENCY,
  SALARYTIME,
  SALARYCONTRACT,
  ADDRESSCOUNTRY,
  ADDRESSCITY,
  ADDRESSSTREET,
  WORKMODE,
  CONTRACTTYPE,
  WORKMODEL,
  RECRUITMENTMODE,
  COMPANYNAME,
  ABOUTCOMPANY,
  LOGO,
  LOGOPREVIEW
} from "../../creatorConsts";

const initialState = {
  searchedPosition: "",
  showResults: false,//todo przeniesc do state
  activeStep: 0,//todo przeniesc do state
  salaryType: "",
  salaryFrom: "",
  salaryTo: "",
  salaryCurrency: "",
  salaryTime: "",
  salaryContract: "",
  addressCountry: "",
  addressCity: "Lokalizacja miejsca pracy",
  addressStreet: "",
  workMode: "Wymiar zatrudnienia",
  contractType: "Rodzaj umowy",
  workModel: "Tryb pracy",
  recruitmentMode: "Tryb rekrutacji",
  companyName: "",
  aboutCompany: "",
  logo: "",
  logoPreview: "",
};

export const stepOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHEDPOSITION: {
      return {
        ...state,
        searchedPosition: action.payload.charAt(0).toUpperCase()
        + action.payload.slice(1),
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
    case SALARYCURRENCY: {
      return {
        ...state,
        salaryCurrency: action.payload,
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
    case COMPANYNAME: {
      return {
        ...state,
        companyName: action.payload,
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
    case LOGOPREVIEW: {
      return {
        ...state,
        logoPreview: action.payload,
      };
    }
    default:
      return state;
  }
};

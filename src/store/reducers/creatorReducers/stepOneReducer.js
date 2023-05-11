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
  COMPANYDESCRIPTION,
  COMPANYLOGO,
  COMPANYLOGOPREVIEW,
  SHOWJOBOFFER,
  SHOWZRK,
  STEPONE
} from "../../creatorConsts";

const initialState = {
  searchedPosition: "", //name i positionName
  name: "",
  positionName: "",
  showResults: false, //todo przeniesc do state
  activeStep: 0, //todo przeniesc do state
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
  companyDescription: "", //companyDescription
  companylogo: "",
  companyLogoPreview: "",
  showJobOffer: true,
  showZRK: false,
};

export const stepOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case STEPONE: {
      return action.payload;
    }
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
    case COMPANYDESCRIPTION: {
      return {
        ...state,
        companyDescription: action.payload,
      };
    }
    case COMPANYLOGO: {
      return {
        ...state,
        companyLogo: action.payload,
      };
    }
    case COMPANYLOGOPREVIEW: {
      return {
        ...state,
        companyLogoPreview: action.payload,
      };
    }
    case SHOWJOBOFFER: {
      return {
        ...state,
        showJobOffer: action.payload,
      };
    }
    case SHOWZRK: {
      return {
        ...state,
        showZRK: action.payload
      }
    }
    default:
      return state;
  }
};

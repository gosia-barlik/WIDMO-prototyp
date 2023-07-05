import {
  SEARCHEDPOSITION,
  NAME,
  POSITIONNAME,
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
  STEPONE,
  ISEDIT,
  JOBOFFERID,
  JOBOFFER
} from "../../creatorConsts";

const initialState = {
  activeStep: 0, //todo przeniesc do state
  isEdit: false,
  searchedPosition: "", //name i positionName
  jobOffer:{
    jobOfferId : null,
    name: "",
    positionName: "",
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
    companylogo: null,
    companyLogoPreview: "",
  },
  showResults: false, //todo przeniesc do state
  showJobOffer: true,
  showZRK: false
};

export const stepOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOBOFFERID: {
      return { 
        ...state,
        jobOffer:{
          ...state.jobOffer,
          jobOfferId: action.payload,
        }
      }
    };
    case JOBOFFER: {
      return { 
        ...state,
        jobOffer:action.payload
      }
    }
    case STEPONE: {
      return action.payload;
    }
    case SEARCHEDPOSITION: {
      return { 
        ...state,
        searchedPosition: action.payload.charAt(0).toUpperCase()+ action.payload.slice(1)
      }
    };
    case NAME: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          name: action.payload,
        }
      };
    }
    case POSITIONNAME: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          positionName: action.payload,
        }
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
        jobOffer:{
          ...state.jobOffer,
          salaryType: action.payload,
        }
      };
    }
    case SALARYFROM: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          salaryFrom: action.payload,
        }
      };
    }
    case SALARYTO: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          salaryTo: action.payload,
        }
      };
    }
    case SALARYCURRENCY: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          salaryCurrency: action.payload,
        }
      };
    }
    case SALARYTIME: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          salaryTime: action.payload,
        }
      };
    }
    case SALARYCONTRACT: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          salaryContract: action.payload,
        }
      };
    }
    case ADDRESSCOUNTRY: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          addressCountry: action.payload,
        }
      };
    }
    case ADDRESSCITY: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          addressCity: action.payload,
        }
      };
    }
    case ADDRESSSTREET: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          addressStreet: action.payload,
        }
      };
    }
    case WORKMODE: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          workMode: action.payload,
        }
      };
    }
    case CONTRACTTYPE: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          contractType: action.payload,
        }
      };
    }
    case WORKMODEL: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          workModel: action.payload,
        }
      };
    }
    case RECRUITMENTMODE: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          recruitmentMode: action.payload,
        }
      };
    }
    case COMPANYNAME: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          companyName: action.payload,
        }
      };
    }
    case COMPANYDESCRIPTION: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          companyDescription: action.payload,
        }
      };
    }
    case COMPANYLOGO: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          companyLogo: action.payload,
        }
      };
    }
    case COMPANYLOGOPREVIEW: {
      return {
        ...state,
        jobOffer:{
          ...state.jobOffer,
          companyLogoPreview: action.payload,
        }
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
    case ISEDIT: {
      return {
        ...state,
        isEdit: action.payload
      }
    }
    default:
      return state;
  }
};

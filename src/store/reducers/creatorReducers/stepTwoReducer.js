import {
  RESPONSIBILITIES,
  CUSTOMIZEDRESPONSIBILITIES,
  SHOWQUALIFICATIONFORM,
  QUALIFICATIONNAME,
  QUALIFICATIONCHARACTERISTIC,
  COPIEDSELECTEDTEXT,
  RESPONSIBILITIESTOHTML,
  REQUIREMENTS,
  REQUIREMENTSTOHTML,
  CUSTOMIZEDREQUIREMENTS,
  SHOWRESPONSIBILITIESLIST,
  SHOWREQUIREMENTSLIST,
 
  SHOWEDUCATIONFORM,
  EDUCATIONLEVEL,
  STUDIESNAME,
  STUDIESSTAGE,
  CERTIFICATENAME,
  CERTIFICATESTAGE,
  BENEFITS,
  BENEFITSTOHTML,

  RODO,
  CUSTOMIZEDBENEFITS,
} from "../../creatorConsts";

const initialState = {
  responsibilities: [],
  customizedResponsibilities: [],
  showQualificationForm: false,
  qualificationName: "",
  qualificationCharacteristic: "",
  copiedSelectedText: [], //unused
  responsibilitiesToHtml: "",

  requirements: [],
  customizedRequirements: [], //unused
  showEducationForm: false,
  requirementsToHtml: "",
  showResponsibilitiesList: false,
  showRequirementsList: false,
  
  educationLevel: [],
  studiesName: [],
  studiesStage: [],
  certificateName: [],
  certificateStage: [],
  
  benefits: [],
  benefitsToHtml: [],
  customizedBenefits: [], //unused

};



export const stepTwoReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESPONSIBILITIES: {
      return {
        ...state,
        responsibilities: action.payload,
      };
    }
    case CUSTOMIZEDRESPONSIBILITIES: {
      return {
        ...state,
        customizedResponsibilities: action.payload,
      };
    }
    case SHOWQUALIFICATIONFORM: {
      return {
        ...state,
        showQualificationForm: action.payload,
      };
    }
    case QUALIFICATIONNAME: {
      return {
        ...state,
        qualificationName: action.payload,
      };
    }
    case QUALIFICATIONCHARACTERISTIC: {
      return {
        ...state,
        qualificationCharacteristic: action.payload,
      };
    }
    case COPIEDSELECTEDTEXT: {
      return {
        ...state,
        copiedSelectedText: action.payload,
      };
    }
    case RESPONSIBILITIESTOHTML: {
      return {
        ...state,
        responsibilitiesToHtml: action.payload,
      };
    }
    
    case REQUIREMENTS: {
      return {
        ...state,
        requirements: action.payload,
      };
    }
    case REQUIREMENTSTOHTML: {
      return {
        ...state,
        requirementsToHtml: action.payload,
      };
    }
    case CUSTOMIZEDREQUIREMENTS: {
      return {
        ...state,
        customizedRequirements: action.payload,
      };
    }
    case SHOWEDUCATIONFORM: {
      return {
        ...state,
        showEducationForm: action.payload,
      };
    }
    case EDUCATIONLEVEL: {
      return {
        ...state,
        educationLevel: action.payload,
      };
    }
    case STUDIESNAME: {
      return {
        ...state,
        studiesName: action.payload,
      };
    }
    case STUDIESSTAGE: {
      return {
        ...state,
        studiesStage: action.payload,
      };
    }
    case CERTIFICATENAME: {
      return {
        ...state,
        certificateName: action.payload,
      };
    }
    case CERTIFICATESTAGE: {
      return {
        ...state,
        certificateStage: action.payload,
      };
    }
    case BENEFITS: {
      return {
        ...state,
        benefits: action.payload,
      };
    }
    case BENEFITSTOHTML: {
      return {
        ...state,
        benefitsToHtml: action.payload,
      };
    }
    case CUSTOMIZEDBENEFITS: {
      return {
        ...state,
        customizedBenefits: action.payload,
      }
    }
    case SHOWRESPONSIBILITIESLIST: {
      return {
        ...state,
        showResponsibilitiesList: action.payload,
      };
    }
    case SHOWREQUIREMENTSLIST: {
      return {
        ...state,
        showRequirementsList: action.payload,
      };
    }
    default:
      return state;
  }
};

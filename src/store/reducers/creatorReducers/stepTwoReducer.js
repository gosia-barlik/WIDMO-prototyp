import {
  RESPONSIBILITIES,
  SHOWRESPONSIBILITIESBUTTON,
  SHOWQUALIFICATIONFORM,
  QUALIFICATIONNAME,
  QUALIFICATIONCHARACTERISTIC,
  QUALIFICATIONEFFECTS,
  COPIEDQUALIFICATIONEFFECTS,
  COPIEDSELECTEDTEXT,
  REQUIREMENTS,
  SHOWREQUIREMENTSBUTTON,
  SHOWEDUCATIONFORM,
  EDUCATIONLEVEL,
  STUDIESNAME,
  STUDIESSTAGE,
  CERTIFICATENAME,
  CERTIFICATESTAGE,
  BENEFITS,
  SHOWBENEFITSBUTTON,
  RODO
} from "../../creatorConsts";

const initialState = {
  responsibilities: [],
  showResponsibilitiesButton: true,
  showQualificationForm: false,
  qualificationName: "",
  qualificationCharacteristic: "",
  qualificationEffects: [],
  copiedQualificationEffects: [],
  copiedSelectedText: [],

  requirements: [],
  showRequirementsButton: true,
  showEducationForm: false,
  
  educationLevel: [],
  studiesName: [],
  studiesStage: [],
  certificateName: [],
  certificateStage: [],
  benefits: [],
  showBenefitsButton: true,

  rodo: ""
};



export const stepTwoReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESPONSIBILITIES: {
      return {
        ...state,
        responsibilities: action.payload,
      };
    }
    case SHOWRESPONSIBILITIESBUTTON: {
      return {
        ...state,
        showResponsibilitiesButton: action.payload,
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
    case QUALIFICATIONEFFECTS: {
      return {
        ...state,
        qualificationEffects: action.payload,
      };
    }
    case COPIEDQUALIFICATIONEFFECTS: {
      return {
        ...state,
        copiedQualificationEffects: action.payload,
      };
    }
    case COPIEDSELECTEDTEXT: {
      return {
        ...state,
        copiedSelectedText: action.payload,
      };
    }
    
    case REQUIREMENTS: {
      return {
        ...state,
        requirements: action.payload,
      };
    }
    case SHOWREQUIREMENTSBUTTON: {
      return {
        ...state,
        showRequirementsButton: action.payload,
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
    case RODO: {
      return {
        ...state,
        rodo: action.payload,
      };
    }
    default:
      return state;
  }
};

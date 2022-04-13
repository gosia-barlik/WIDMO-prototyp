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
} from "../consts";

//RESPONSIBILITIES
export const setResponsibilities = (responsibilities) => {
  return { type: RESPONSIBILITIES, payload: responsibilities };
};
export const setShowResponsibilitiesButton = () => {
  return { type: SHOWRESPONSIBILITIESBUTTON, payload: false };
};

//QULIFICATIONS
export const setShowQualificationForm = (isFormshown) => {
  return { type: SHOWQUALIFICATIONFORM, payload: isFormshown };
};
export const setQualificationName = (qualificationName) => {
  return { type: QUALIFICATIONNAME, payload: qualificationName };
};
export const setQualificationCharacteristic = (qualificationCharacteristic) => {
  return {
    type: QUALIFICATIONCHARACTERISTIC,
    payload: qualificationCharacteristic,
  };
};
export const setQualificationEffects = (qualificationEffects) => {
  return { type: QUALIFICATIONEFFECTS, payload: qualificationEffects };
};
export const setCopiedQualificationEffects = (copiedQualificationEffects) => {
  return {
    type: COPIEDQUALIFICATIONEFFECTS,
    payload: copiedQualificationEffects,
  };
};
export const setCopiedSelectedText = (copiedSelectedText) => {
  return { type: COPIEDSELECTEDTEXT, payload: copiedSelectedText };
};

//REQUIREMENTS
export const setRequirements = (requirements) => {
  return { type: REQUIREMENTS, payload: requirements };
};
export const setShowRequirementsButton = (isButtonShown) => {
  return { type: SHOWREQUIREMENTSBUTTON, payload: isButtonShown };
};


//EDUCATION
export const setShowEducationForm = (isFormShown) => {
  return { type: SHOWEDUCATIONFORM, payload: isFormShown };
};
export const setEducationLevel = (educationLevel) => {
  return { type: EDUCATIONLEVEL, payload: educationLevel };
};
export const setStudiesName = (studiesName) => {
  return { type: STUDIESNAME, payload: studiesName };
};
export const setStudiesStage = (studiesStage) => {
  return { type: STUDIESSTAGE, payload: studiesStage };
};
export const setCertificateName = (certificateName) => {
  return { type: CERTIFICATENAME, payload: certificateName };
};
export const setCertificateStage = (certificateStage) => {
  return { type: CERTIFICATESTAGE, payload: certificateStage };
};
export const setBenefits = (benefits) => {
  return { type: BENEFITS, payload: benefits };
};
export const setShowBenefitsButton = (isButtonShown) => {
  return { type: SHOWBENEFITSBUTTON, payload: isButtonShown };
};




import {
  RESPONSIBILITIES,
  CUSTOMIZEDRESPONSIBILITIES, //unused
  SHOWQUALIFICATIONFORM,
  QUALIFICATIONNAME,
  QUALIFICATIONCHARACTERISTIC,
  COPIEDSELECTEDTEXT, //unused
  RESPONSIBILITIESTOHTML,
  REQUIREMENTS,
  REQUIREMENTSTOHTML,
  CUSTOMIZEDREQUIREMENTS, //unused
  SHOWREQUIREMENTSBUTTON,
  SHOWEDUCATIONFORM,
  EDUCATIONLEVEL,
  STUDIESNAME,
  STUDIESSTAGE,
  CERTIFICATENAME,
  CERTIFICATESTAGE,
  BENEFITS,
  BENEFITSTOHTML,
  CUSTOMIZEDBENEFITS, //unusedList
  SHOWRESPONSIBILITIESLIST,
} from "../creatorConsts";

//RESPONSIBILITIES
export const setResponsibilities = (responsibilities) => {
  return { type: RESPONSIBILITIES, payload: responsibilities };
};
export const setCustomizedResponsibilities = (customizedResponsibilities) => {
  return {
    type: CUSTOMIZEDRESPONSIBILITIES,
    payload: customizedResponsibilities,
  };
};
export const setResponsibilitiesToHtml = (responsibilitiesToHtml) => {
  return { type: RESPONSIBILITIESTOHTML, payload: responsibilitiesToHtml };
};

export const setShowResponsibilitiesList = (showResponsibilitiesList) => {
  return { type: SHOWRESPONSIBILITIESLIST, payload: showResponsibilitiesList };
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

export const setCopiedSelectedText = (copiedSelectedText) => {
  return { type: COPIEDSELECTEDTEXT, payload: copiedSelectedText };
};

//REQUIREMENTS
export const setRequirements = (requirements) => {
  return { type: REQUIREMENTS, payload: requirements };
};
export const setRequirementsToHtml = (requirementsToHtml) => {
  return { type: REQUIREMENTSTOHTML, payload: requirementsToHtml };
};

export const setCustomizedRequirements = (customizedRequirements) => {
  return { type: CUSTOMIZEDREQUIREMENTS, payload: customizedRequirements };
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
export const setBenefitsToHtml = (benefitsToHtml) => {
  return { type: BENEFITSTOHTML, payload: benefitsToHtml };
};
export const setCustomizedBenefits = (customizedBenefits) => {
  return { type: CUSTOMIZEDBENEFITS, payload: customizedBenefits };
};

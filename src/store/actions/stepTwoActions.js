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
    console.log(responsibilities)
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
  return { type: QUALIFICATIONCHARACTERISTIC, payload: qualificationCharacteristic };
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
export const setCopiedSelectedText = (oldArray) => {
  return { type: COPIEDSELECTEDTEXT, payload: [...oldArray]
   };
};




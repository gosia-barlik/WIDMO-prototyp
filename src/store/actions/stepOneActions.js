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
  STEPONE,
  POSITIONNAME,
  NAME,
  JOBOFFERID,
  JOBOFFER,
  ISEDIT
} from "../creatorConsts";

//position
export const setSearchedPosition = (searchedPosition) => {
  return { type: SEARCHEDPOSITION, payload: searchedPosition };
};
export const setName = (name) => {
  return { type: NAME, payload: name };
};
export const setPositionName = (positionName) => {
  return { type: POSITIONNAME, payload: positionName };
};
export const setShowResults = (showResults) => {
  return { type: SHOWRESULTS, payload: showResults };
};
export const setActiveStep = (activeStep) => {
  return { type: ACTIVESTEP, payload: activeStep };
};

//job info
export const setIsEdit = (isEdit) => {
  return { type: ISEDIT, payload: isEdit };
};
export const setJobOfferId = (jobOfferId) => {
  return { type: JOBOFFERID, payload: jobOfferId };
};
export const setJobOffer = (jobOffer) => {
  return { type: JOBOFFER, payload: jobOffer };
};
export const setStepOne = (stepOne) => {
  return { type: STEPONE, payload: stepOne };
};
export const setSalaryType = (salaryType) => {
  return { type: SALARYTYPE, payload: salaryType };
};
export const setSalaryFrom = (salaryFrom) => {
  return { type: SALARYFROM, payload: salaryFrom };
};
export const setSalaryTo = (salaryTo) => {
  return { type: SALARYTO, payload: salaryTo };
};
export const setSalaryCurrency = (salaryCurrency) => {
  return { type: SALARYCURRENCY, payload: salaryCurrency };
};
export const setSalaryTime = (salaryTime) => {
  return { type: SALARYTIME, payload: salaryTime };
};
export const setSalaryContract = (salaryContract) => {
  return { type: SALARYCONTRACT, payload: salaryContract };
};
export const setAddressCountry = (addressCountry) => {
  return { type: ADDRESSCOUNTRY, payload: addressCountry };
};
export const setAddressCity = (addressCity) => {
  return { type: ADDRESSCITY, payload: addressCity };
};
export const setAddressStreet = (addressStreet) => {
  return { type: ADDRESSSTREET, payload: addressStreet };
};
export const setRecruitmentMode = (recruitmentMode) => {
  return { type: RECRUITMENTMODE, payload: recruitmentMode };
};
export const setWorkMode = (workMode) => {
  return { type: WORKMODE, payload: workMode };
};
export const setContractType = (contractType) => {
  return { type: CONTRACTTYPE, payload: contractType };
};
export const setWorkModel = (workModel) => {
  return { type: WORKMODEL, payload: workModel };
};

//company
export const setCompanyName = (companyName) => {
  return { type: COMPANYNAME, payload: companyName };
};
export const setCompanyDescription = (companyDescription) => {
  return { type: COMPANYDESCRIPTION, payload: companyDescription };
};
export const setLogo = (companyLogo) => {
  return { type: COMPANYLOGO, payload: companyLogo };
};
export const setLogoPreview = (companyLogoPreview) => {
  return { type: COMPANYLOGOPREVIEW, payload: companyLogoPreview };
};

//joboffer
export const setShowJobOffer = (showJobOffer) => {
  return { type: SHOWJOBOFFER, payload: showJobOffer };
};

//ZRK
export const setShowZRK = (showZRK) => {
  return { type: SHOWZRK, payload: showZRK };
};
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

//position
export const setSearchedPosition = (searchedPosition) => {
  return { type: SEARCHEDPOSITION, payload: searchedPosition };
};
export const setShowResults = (showResults) => {
  return { type: SHOWRESULTS, payload: showResults };
};
export const setActiveStep = (activeStep) => {
  return { type: ACTIVESTEP, payload: activeStep };
};

//job info
export const setSalaryType = (salaryType) => {
  return { type: SALARYTYPE, payload: salaryType };
};
export const setSalaryFrom = (salaryFrom) => {
  return { type: SALARYFROM, payload: salaryFrom };
};
export const setSalaryTo = (salaryTo) => {
  return { type: SALARYTO, payload: salaryTo };
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
export const setAboutCompany = (aboutCompany) => {
  return { type: ABOUTCOMPANY, payload: aboutCompany };
};
export const setLogo = (companyLogo) => {
  return { type: LOGO, payload: companyLogo };
};


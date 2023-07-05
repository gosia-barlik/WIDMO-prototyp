import { JOBOFFER, ANALYSISID, ANALYSISNAME } from "../../rankomatConsts";

export const setJobOffer = (jobOffers) => {
  return { type: JOBOFFER, payload: jobOffers };
};
export const setAnalysisId = (analysisId) => {
  return { type: ANALYSISID, payload: analysisId };
};
export const setAnalysisName = (analysisName) => {
  return { type: ANALYSISNAME, payload: analysisName };
};

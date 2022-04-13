import {
    JOBOFFER
  } from "../../rankomatConsts";
  
  export const setJobOffer = (jobOffers) => {
    return { type: JOBOFFER, payload: jobOffers };
  };
  
  
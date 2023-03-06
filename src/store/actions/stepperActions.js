import {
  HORIZONTAL_STEP_BACK, 
  HORIZONTAL_STEP_FORWARD, 
  SET_STEP,

} from "../creatorConsts";

export const horizontalStepBack = (noOfSteps = 1) => {
  return { type: HORIZONTAL_STEP_BACK, payload: noOfSteps };
};

export const horizontalStepForward = (noOfSteps = 1) => {
  return { type: HORIZONTAL_STEP_FORWARD, payload: noOfSteps };
};

export const setStep = (step) => {
  return { type: SET_STEP, payload: step };
}





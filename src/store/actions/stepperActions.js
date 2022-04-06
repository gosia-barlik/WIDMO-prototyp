import {
  HORIZONTAL_STEP_BACK, 
  HORIZONTAL_STEP_FORWARD, 
  VERTICAL_STEP_BACK, 
  VERTICAL_STEP_FORWARD
} from "../consts";

export const horizontalStepBack = (noOfSteps = 1) => {
  return { type: HORIZONTAL_STEP_BACK, payload: noOfSteps };
};

export const horizontalStepForward = (noOfSteps = 1) => {
  return { type: HORIZONTAL_STEP_FORWARD, payload: noOfSteps };
};

export const verticalStepBack = (noOfSteps = 1) => {
  return { type: VERTICAL_STEP_BACK, payload: noOfSteps };
};

export const verticalStepForward = (noOfSteps = 1) => {
  return { type: VERTICAL_STEP_FORWARD, payload: noOfSteps };
};




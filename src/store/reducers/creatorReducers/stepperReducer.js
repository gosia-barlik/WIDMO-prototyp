import {
  HORIZONTAL_STEP_FORWARD,
  HORIZONTAL_STEP_BACK,
  SET_STEP,
} from "../../creatorConsts";

const initialState = {
  horizontalStepper: 0,
};

export const stepperReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STEP: {
      return {
        horizontalStepper: action.payload,
      };
    }
    case HORIZONTAL_STEP_BACK: {
      return {
        ...state,
        horizontalStepper: state.horizontalStepper - action.payload,
      };
    }
    case HORIZONTAL_STEP_FORWARD: {
      return {
        ...state,
        horizontalStepper: state.horizontalStepper + action.payload,
      };
    }

    default:
      return state;
  }
};

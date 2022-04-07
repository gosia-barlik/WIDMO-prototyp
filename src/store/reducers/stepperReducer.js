import {
  HORIZONTAL_STEP_FORWARD,
  HORIZONTAL_STEP_BACK,
  VERTICAL_STEP_FORWARD,
  VERTICAL_STEP_BACK,
} from "../consts";

const initialState = {
  horizontalStepper: 0,
  verticalStepper: 0
};

export const stepperReducer = (state = initialState, action) => {
  switch (action.type) {
    case HORIZONTAL_STEP_BACK: {
      return {
        ...state,
        horizontalStepper: state.horizontalStepper - action.payload,
        verticalStepper: 2
      };
    }
    case HORIZONTAL_STEP_FORWARD: {
      return {
        ...state,
        horizontalStepper: state.horizontalStepper + action.payload,
        verticalStepper: 0
      };
    }
    case VERTICAL_STEP_BACK: {
      return {
        ...state,
        horizontalStepper: state.horizontalStepper - action.payload,
      };
    }
    case VERTICAL_STEP_FORWARD: {
      return {
        ...state,
        horizontalStepper: state.horizontalStepper + action.payload,
        verticalStepper: 0
      };
    }
    default:
      return state;
  }
};

import { combineReducers } from 'redux';
import { stepperReducer } from './creatorReducers/stepperReducer';
import { stepOneReducer } from './creatorReducers/stepOneReducer';
import { stepTwoReducer } from './creatorReducers/stepTwoReducer';
import { stepThreeReducer } from './creatorReducers/stepThreeReducer';
import { rankomatStepTwoReducer } from './rankomatReducers/rankomatStepTwoReducer';
import { rankomatStepOneReducer } from './rankomatReducers/rankomatStepOneReducer';
import { rankomatStepThreeReducer } from './rankomatReducers/rankomatStepThreeReducer';

 const rootReducer = combineReducers ({
  stepperReducer,
  stepOneReducer,
  stepTwoReducer,
  stepThreeReducer,
  rankomatStepTwoReducer,
  rankomatStepOneReducer,
  rankomatStepThreeReducer
})

export default rootReducer;
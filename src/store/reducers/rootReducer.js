import { combineReducers } from 'redux';
import { stepperReducer } from './creatorReducers/stepperReducer';
import { stepOneReducer } from './creatorReducers/stepOneReducer';
import { stepTwoReducer } from './creatorReducers/stepTwoReducer';
import { stepThreeReducer } from './creatorReducers/stepThreeReducer';

 const rootReducer = combineReducers ({
  stepperReducer,
  stepOneReducer,
  stepTwoReducer,
  stepThreeReducer
})

export default rootReducer;
import { combineReducers } from 'redux';
import {  stepperReducer } from './stepperReducer';
import {  stepOneReducer } from './stepOneReducer';
import {  stepTwoReducer } from './stepTwoReducer';

 const rootReducer = combineReducers ({
  stepperReducer,
  stepOneReducer,
  stepTwoReducer
})

export default rootReducer;
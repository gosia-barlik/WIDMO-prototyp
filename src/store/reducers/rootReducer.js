import { combineReducers } from 'redux';
import {  stepperReducer } from './stepperReducer';
import {  stepOneReducer } from './stepOneReducer';

 const rootReducer = combineReducers ({
  stepperReducer,
  stepOneReducer
})

export default rootReducer;
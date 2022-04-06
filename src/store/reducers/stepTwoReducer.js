import {
    CHANGE_SKILL_INPUT,
    SEARCH_SKILL,
  } from "../consts";
  
  const initialState = {
    text: "",
    skills: [],
  };

  const addId = (arr) => {
    let id = 100;
    return arr.map((item) => ({
      ...item,
      id: id++,
    }));
  };
  
  export const searchQualificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_SKILL_INPUT: {
        return {
          ...state,
          text: action.payload,
        };
      }
      case SEARCH_SKILL: {
        return {
          ...state,
          skills: addId(action.payload["ESCO skill_text"]),//TODO:: zmienić na backendzie na items
        };
      }
      default: {
        return state;
      }
    }
  };
  
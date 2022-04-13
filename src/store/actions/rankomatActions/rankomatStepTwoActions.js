import {
  RESUMES,
  KEYWORD
} from "../../rankomatConsts";

export const setResumes = (resumes) => {
  return { type: RESUMES, payload: resumes };
};
export const setKeyword = (keyword) => {
  return { type: KEYWORD, payload: keyword };
};


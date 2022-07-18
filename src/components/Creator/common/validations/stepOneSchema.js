import * as yup from "yup";

 export const salarySchema = yup.object().shape({
  salaryFrom: yup
    .number()
    .integer()
    .min(1000)
    .max(100000000),
    
  salaryTo: yup
    .number()
    .integer()
    .nullable()
    .moreThan(yup.ref("salaryFrom")) //<-- a whole lot neater than using a when conditional...
    .max(1000000000)
});

export const jobPositionSchema = {
  MAX_LENGTH: 64,
};

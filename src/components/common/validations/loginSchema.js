import * as yup from "yup";

 const loginSchema = yup.object({
    email: yup
      .string("Wprowadź adres e-mail")
      .email("Wprowadź prawidłowy adres e-mail")
      .required("Email jest wymagany"),
    password: yup
      .string("Wprowadź hasło")
      .min(8, "Hasło powinno składać się z minimum 8 znaków")
      
      .required("Hasło jest wymagane"),
  });

  export default loginSchema;
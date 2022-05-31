import * as yup from "yup";

const signupSchema = yup.object({
    email: yup
      .string("Wprowadź adres e-mail")
      .email("Wprowadź prawidłowy adres e-mail")
      .max(64, "Długość hasła przekracza 64 znaki")
      .required("Email jest wymagany"),
    password: yup
      .string("Wprowadź hasło")
      .min(8, "Hasło powinno składać się z minimum 8 znaków ")
      .max(64, "Długość hasła przekracza 64 znaki")
      .required("Hasło jest wymagane"),
    name: yup
      .string("Imię jest wymagane")
      .required("Imię jest wymagane")
      .max(64, "Długość hasła przekracza 64 znaki"),
  });

  export default signupSchema;
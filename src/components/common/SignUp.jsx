import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  setIsSignUpOpen,
  setUserName,
  setEmail,
  setPassword,
  setIsSignedUp,
  setIsLoginOpen,
} from "../../store/actions/loginActions";

import { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

const validationSchema = yup.object({
  email: yup
    .string("Wprowadź adres e-mail")
    .email("Wprowadź prawidłowy adres e-mail")
    .required("Email jest wymagany"),
  password: yup
    .string("Wprowadź hasło")
    .min(8, "Hasło powinno składać się z minimum 8 znaków ")
    .required("Hasło jest wymagane"),
  name: yup
    .string("Imię jest wymagane")
    .required("Imię jest wymagane"),
});

function HelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'Min. 8 znaków';
    }
    return '8 znaków';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function SignUpForm() {
  const { isSignUpOpen, email, password, isSignedUp } = useSelector(
    (state) => state.loginReducer
  );
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      submitSignUpForm();
    },
  });

  const closeSignUpForm = () => {
    dispatch(setIsSignUpOpen(false));
  };

  const onSetEmailAddress = (e) => {
    dispatch(setEmail(e.target.value));
    formik.handleChange(e);
  };

  const onSetPassword = (e) => {
    dispatch(setPassword(e.target.value));
    formik.handleChange(e);
  };

  const onSetUserName = (e) => {
    dispatch(setUserName(e.target.value));
    formik.handleChange(e);
  };

  const submitSignUpForm = () => {
    // fetch("http://localhost:3000/logIn", {
    //   method: "POST",
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({ login: email, password }})
    // }).then(res => {
    // const accessToken = response.token
    // dispatch(setAccessToken(accessToken))
    // dispatch(setIsLoginOpen(false))
    // dispatch(setIsLoggedIn(true))
    // });
    dispatch(setIsSignUpOpen(false));
    dispatch(setIsSignedUp(true));
  };

  const GoToLogIn = () => {
    closeSignUpForm();
    dispatch(setIsLoginOpen(true));
  };

  return (
    <div>
      <Dialog
        open={isSignUpOpen}
        onClose={closeSignUpForm}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Zarejestruj się</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>

          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              
              id='name'
              name='name'
              label='Imię'
              value={formik.values.name}
              onChange={onSetUserName}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              style={{ marginTop: "18px" }}
            />
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id='email'
              name='email'
              label='Email'
              value={formik.values.email}
              onChange={onSetEmailAddress}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              style={{ marginTop: "18px" }}
            />
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id='password'
              name='password'
              label='Hasło'
              type='password'
              value={formik.values.password}
              onChange={onSetPassword}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              style={{ marginTop: "18px" }}
            />
            <HelperText />
            <Typography
              variant='body2'
              component='div'
              style={{ marginTop: "12px" }}>
              Kontynuacja oznacza wyrażenie zgody na warunki użytkowania
              serwisu. Zapoznaj się z naszą polityka prywatności.
            </Typography>
            <Button
              className='button-primary-contained'
              variant='contained'
              fullWidth
              type='submit'
              style={{ marginTop: "24px", textTransform: "none" }}>
              Zarejestruj się
            </Button>
          </form>
          <Typography
            variant='body2'
            component='div'
            style={{ marginTop: "12px" }}>
            Masz już konto?
            <Button variant='text' onClick={GoToLogIn}>
              Wróć do logowania
            </Button>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}

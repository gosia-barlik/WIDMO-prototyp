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
import { Formik, Form, useField, useFormik } from "formik";
import * as yup from "yup";
import {
  setIsLoginOpen,
  setEmail,
  setPassword,
  setIsLoggedIn,
  setAccessToken,
} from "../../store/actions/loginActions";

const validationSchema = yup.object({
  email: yup
    .string("Wprowadź adres e-mail")
    .email("Wprowadzona wartość nie wygląda na prawidłowy adres e-mail")
    .required("Email jest wymagany"),
  password: yup
    .string("Wprowadź hasło")
    .min(8, "Hasło powinno składać się z minimum 8 znaków ")
    .required("Hasło jest wymagane"),
});

export default function FormDialog() {
  const { isLoginOpen, email, password, isLoggedIn } = useSelector(
    (state) => state.loginReducer
  );
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      submitLoginForm()
    },
  });

  const closeLoginForm = () => {
    dispatch(setIsLoginOpen(false));
  };

  const onSetEmailAddress = (e) => {
    dispatch(setEmail(e.target.value));
    formik.handleChange(e);
  };

  const onSetPassword = (e) => {
    dispatch(setPassword(e.target.value));
    formik.handleChange(e);
  };

  const submitLoginForm = () => {
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
    dispatch(
      setAccessToken("12390h-j320f9hf0sdu-f0ds9f0-fsd0fsdfsdf98sdf-sd0f")
    ); //do testow
    dispatch(setIsLoginOpen(false));
    dispatch(setIsLoggedIn(true));
  };

  return (
    <div>
      <Dialog
        open={isLoginOpen}
        onClose={closeLoginForm}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Zaloguj się</DialogTitle>
        <DialogContent>
          <DialogContentText>Użyj adresu e-mail oraz hasła</DialogContentText>

          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id='email'
              name='email'
              label='Email'
              value={formik.values.email}
              onChange={onSetEmailAddress}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              style={{marginTop:"18px"}}
            />
            <TextField
              fullWidth
              id='password'
              name='password'
              label='Hasło'
              type='password'
              value={formik.values.password}
              onChange={onSetPassword}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              style={{marginTop:"18px"}}
            />
            <Typography
            variant='body2'
            component='div'
            style={{ marginTop: "12px" }}>
            Kontynuacja oznacza wyrażenie zgody na warunki użytkowania serwisu.
            Zapoznaj się z naszą polityka prywatności.
          </Typography>
            <Button className='button-primary-contained' variant='contained' fullWidth type='submit'style={{marginTop:"24px", textTransform: "none"}}>
              Zaloguj się
            </Button>
          </form>
          <Typography
            variant='body2'
            component='div'
            style={{ marginTop: "12px" }}>
           Nie masz konta? Zarejestruj
          </Typography>

          {/* <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            onChange={onSetEmailAddress}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Hasło"
            type="password"
            fullWidth
            onChange={onSetPassword}
          />
          <Typography
            variant='body2'
            component='div'
            style={{ marginTop: "12px" }}>
            Kontynuacja oznacza wyrażenie zgody na warunki użytkowania serwisu.
            Zapoznaj się z naszą polityka prywatności.
          </Typography> */}
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={closeLoginForm} color='primary'>
            Anuluj
          </Button>
          <Button
            className='button-primary-contained'
            onClick={submitLoginForm}
            color='primary'>
            Zaloguj się
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

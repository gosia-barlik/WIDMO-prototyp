import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@mui/material/Typography";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, useField, useFormik } from "formik";
import {
  setIsLoginOpen,
  setEmail,
  setPassword,
  setIsLoggedIn,
  setAccessToken,
  setIsSignUpOpen,
} from "../../store/actions/userActions";
import loginSchema from "./validations/loginSchema";

const useStyles = makeStyles({
  backDrop: {
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.4)",
  },
});

export default function LoginForm() {
  const { isLoginOpen, email, password, isLoggedIn, isSignUpOpen } =
    useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      submitLoginForm();
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

  const GoToSignUp = () => {
    closeLoginForm();
    dispatch(setIsSignUpOpen(true));
  };

  return (
    <div>
      <Dialog
        open={isLoginOpen}
        onClose={closeLoginForm}
        aria-labelledby='form-dialog-title'
        BackdropProps={{
          classes: {
            root: classes.backDrop,
          },
        }}>
        <DialogTitle id='form-dialog-title'>Zaloguj się</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Masz już konto? Użyj adresu e-mail oraz hasła, aby się zalogować
          </DialogContentText>

          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              variant='outlined'
              size='small'
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
              variant='outlined'
              size='small'
              id='password'
              name='password'
              label='Hasło'
              type='password'
              value={formik.values.password}
              onChange={onSetPassword}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              className={classes.textfield}
              style={{ marginTop: "18px" }}
            />
            <Typography
              variant='body2'
              component='div'
              style={{ marginTop: "24px" }}>
              Kontynuacja oznacza wyrażenie zgody na warunki użytkowania
              serwisu. Zapoznaj się z naszą polityka prywatności.
            </Typography>
            <Button
              className='button-primary-contained'
              variant='contained'
              fullWidth
              type='submit'
              style={{ marginTop: "24px", textTransform: "none" }}>
              Zaloguj się
            </Button>
          </form>
          <Typography
            variant='body2'
            component='div'
            style={{ marginTop: "12px" }}>
            Nie masz konta?{" "}
            <Button variant='text' onClick={GoToSignUp}>
              Zarejestruj
            </Button>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}

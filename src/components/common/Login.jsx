import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsLoginOpen,
  setEmail,
  setPassword,
  setIsLoggedIn
} from "../../store/actions/loginActions";

export default function FormDialog() {
    const {isLoginOpen, email, password, isLoggedIn} = useSelector((state) => state.loginReducer);
    const dispatch = useDispatch();

  const closeLoginForm = () => {
    dispatch(setIsLoginOpen(false))
  }
    const onSetEmailAddress = (e) => {
    dispatch(setEmail(e.target.value));
    
  };
  const onSetPassword = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const submitLoginForm = () => {
    console.log(email)
    console.log(password)
    dispatch(setIsLoginOpen(false))
    dispatch(setIsLoggedIn(true))
    console.log(isLoggedIn)
  }

  return (
    <div>
      <Dialog open={isLoginOpen} onClose={closeLoginForm} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Zaloguj się</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Użyj adresu e-mail oraz hasła
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
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
        </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeLoginForm} color="primary">
            Anuluj
          </Button>
          <Button className="button-primary-contained" onClick={submitLoginForm} color="primary">
            Zaloguj się
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
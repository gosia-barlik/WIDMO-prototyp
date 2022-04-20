// import * as React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Typography from "@mui/material/Typography";
// import { useDispatch, useSelector } from "react-redux";
// import { setIsLoginOpen } from "../../store/actions/loginActions";

// export default function LoginForm() {
//   const dispatch = useDispatch();
//   const { isLoginOpen } = useSelector((state) => state.loginReducer);

//   const closeLoginForm = () => {
//     dispatch(setIsLoginOpen(false));
//   };
//   const setEmailAddress = (e) => {
//     console.log(e.target.value);
//   };
//   const setPassword = (e) => {
//     console.log(e.target.value);
//   };

//   return (
//     <Dialog open={isLoginOpen} onClose={closeLoginForm} disableEnforceFocus>
//       <DialogTitle>Zaloguj się</DialogTitle>
//       <DialogContent>
//         <DialogContentText>Użyj adresu e-mail oraz hasła</DialogContentText>

//         <TextField
//           margin='dense'
//           id='email'
//           name='email'
//           label='adres email'
//           type='email'
//           fullWidth
//           variant='outlined'
//           onChange={setEmailAddress}
//         />
//         <TextField
//           margin='dense'
//           id='password'
//           label='hasło'
//           type='password'
//           fullWidth
//           variant='outlined'
//           onChange={setPassword}
//         />
//         <Typography
//           variant='body2'
//           component='div'
//           style={{ marginTop: "12px" }}>
//           Kontynuacja oznacza wyrażenie zgody na warunki użytkowania serwisu.
//           Zapoznaj się z naszą polityka prywatności.
//         </Typography>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={closeLoginForm}>Anuluj</Button>
//         <Button
//           onClick={closeLoginForm}
//           type='submit'
//           variant='contained'
//           color='primary'>
//           Zaloguj się
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }


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
  setIsLoginOpen
} from "../../store/actions/loginActions";

export default function FormDialog() {
    const {isLoginOpen} = useSelector((state) => state.loginReducer);
    const dispatch = useDispatch();

  const closeLoginForm = () => {
    dispatch(setIsLoginOpen(false))
  }
    const setEmailAddress = (e) => {
    console.log(e.target.value);
  };
  const setPassword = (e) => {
    console.log(e.target.value);
  };

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
            onChange={setEmailAddress}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Hasło"
            type="password"
            fullWidth
            onChange={setPassword}
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
          <Button className="button-primary-contained" onClick={closeLoginForm} color="primary">
            Zaloguj się
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
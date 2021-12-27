// import React, { useState } from "react";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import Typography from "@mui/material/Typography";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   textField: {
//     width: "90%",
//     marginLeft: "auto",
//     marginRight: "auto",
//     paddingBottom: 0,
//     marginTop: 0,
//     fontWeight: 500,
//   },
//   input: {
//     color: "white",
//     fontWeight: 900,
//   },
// });

// export default function Salary(props) {
//   const classes = useStyles();

//   const types = ["brutto", "netto"];
//   const rates = [
//     1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000,
//     13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000,
//   ];
//   const times = ["miesiąc", "godzina", "dzień", "rok"];

//   const handleInputChange = (e) => {
//     props.onSetSetSalaryType(e.target.value);
//   };

//   return (
//     <>
//       <Typography variant='subtitle2' gutterBottom component='div'>
//         Wynagrodzenie
//       </Typography>
//       <Paper
//         component='form'
//         sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
//         style={{ padding: "5px" }}>
//         <Autocomplete
//           onInputChange={handleInputChange}
//           disablePortal
//           id='combo-box-demo'
//           options={types}
//           sx={{ width: 300 }}
//           style={{ margin: "5px", fontSize: "5px" }}
//           renderInput={(params) => (
//             <TextField
//               InputProps={{
//                 className: classes.input,
//               }}
//               {...params}
//               label='stawka'
//             />
//           )}
//         />
//         <Autocomplete
//           disablePortal
//           id='combo-box-demo'
//           options={rates}
//           sx={{ width: 300 }}
//           renderInput={(params) => <TextField {...params} label='od' />}
//         />
//         <Autocomplete
//           disablePortal
//           id='combo-box-demo'
//           options={rates}
//           sx={{ width: 300 }}
//           style={{ margin: "5px" }}
//           renderInput={(params) => <TextField {...params} label='do' />}
//         />
//         <Autocomplete
//           disablePortal
//           id='combo-box-demo'
//           options={times}
//           sx={{ width: 300 }}
//           style={{ margin: "5px" }}
//           renderInput={(params) => <TextField {...params} label='miesiąc' />}
//         />
//       </Paper>
//     </>
//   );
// }

import React from "react";
import { alpha, withStyles, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@mui/material/Typography";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 14,
    maxWidth: 100,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedInputs(props) {
  const classes = useStyles();

  return (
    <>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Wynagrodzenie
      </Typography>
      <form className={classes.root} noValidate>
       

        <FormControl className={classes.margin}>
          <InputLabel shrink htmlFor='rate-from-input'>
            Od
          </InputLabel>
          <BootstrapInput placeholder='4000' id='rate-from-input' onChange = {e => props.onSetSalaryFrom(e.target.value)}/>
        </FormControl>

        <FormControl className={classes.margin}>
          <InputLabel shrink htmlFor='rate-to-input'>
            Do
          </InputLabel>
          <BootstrapInput placeholder='8000' id='rate-to-input' onChange = {e => props.onSetSalaryTo(e.target.value)}/>
        </FormControl>

        <FormControl className={classes.margin}>
          <InputLabel shrink htmlFor='rate-to-time'>
            Okres rozliczenia
          </InputLabel>
          <BootstrapInput placeholder='miesiąc' id='rate-to-time' onChange = {e => props.onSetSalaryTime(e.target.value)}/>
        </FormControl>

        <FormControl className={classes.margin}>
          <InputLabel shrink htmlFor='rate-type-input'>
            Wartość
          </InputLabel>
          <BootstrapInput onChange = {e => props.onSetSalaryType(e.target.value)} placeholder='brutto' id='rate-type-input' />
        </FormControl>

        <FormControl className={classes.margin}>
          <InputLabel shrink htmlFor='rate-contract-input'>
            Rodzaj umowy
          </InputLabel>
          <BootstrapInput onChange = {e => props.onSetSalaryContract(e.target.value)} placeholder='umowa o pracę' id='rate-type-input' />
        </FormControl>
      </form>
    </>
  );
}

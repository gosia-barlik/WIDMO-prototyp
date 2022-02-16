

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
      '"Segoe UI"',
      "Roboto",
      "Arial",
      "sans-serif",
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

import React from "react";
import { alpha, withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  setApplicationWay,
  setApplicationExpectation,
  setApplicationDate,
  setContactInformation,
} from "../../../../store/actions/stepThreeActions";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(2),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 14,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    // fontFamily: ['"Segoe UI"', "Roboto", "Arial", "sans-serif"].join(","),
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

export default function OrganizationalData(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onSetApplicationWay = (applicationWay) =>
    dispatch(setApplicationWay(applicationWay));
  const onSetApplicationExpectation = (applicationExpectation) =>
    dispatch(setApplicationExpectation(applicationExpectation));
  const onSetApplicationDate = (applicationDate) =>
    dispatch(setApplicationDate(applicationDate));
  const onSetContactInformation = (contactInformation) =>
    dispatch(setContactInformation(contactInformation));

  return (
    <>
      <form className={classes.root} noValidate style={{ marginTop: "40px" }}>
        <Typography variant='subtitle2' component='div'>
          Dane organizacyjne dotyczące rekrutacji
        </Typography>
        <div style={{ width: "100%" }}>
          {/* <FormControl className={classes.margin} style={{ width: "40%" }}>
            <InputLabel shrink htmlFor='application-way'>
              Sposób przesyłania zgłoszeń
            </InputLabel>
            <BootstrapInput
              type='text'
              placeholder='email'
              name='application-way'
              onChange={(e) => onSetApplicationWay(e.target.value)}
            />
          </FormControl> */}
          <TextField
            variant='outlined'
            size='small'
            id='outlined-basic'
            color='secondary'
            label='Sposób przesyłania zgłoszeń'
            type='text'
            placeholder='email'
            name='application-way'
            style={{
              width: "40%",
              fontSize: "14px",
              marginTop: "18px",
              marginRight: "4px",
            }}
            onChange={(e) => onSetApplicationWay(e.target.value)}
          />

          {/* <FormControl className={classes.margin} style={{ width: "40%" }}>
            <InputLabel shrink htmlFor='application-expectation'>
              Oczekiwania dotyczące formy zgłoszeń
            </InputLabel>
            <BootstrapInput
              type='text'
              placeholder='CV w formie pdf'
              name='application-expectation'
              onChange={(e) => onSetApplicationExpectation(e.target.value)}
            />
          </FormControl> */}

          <TextField
            variant='outlined'
            size='small'
            id='outlined-basic'
            color='secondary'
            label='Oczekiwania dotyczące formy zgłoszeń'
            type='text'
            placeholder='CV w formie pdf'
            name='application-expectation'
            style={{
              width: "40%",
              fontSize: "14px",
              marginTop: "18px",
              marginRight: "4px",
            }}
            onChange={(e) => onSetApplicationExpectation(e.target.value)}
          />

          {/* <FormControl className={classes.margin} style={{ width: "40%" }}>
            <InputLabel shrink htmlFor='application-date'>
              Termin przesyłania zgłoszeń
            </InputLabel>
            <BootstrapInput
              type='date'
              placeholder='dynamiczna data'
              name='application-date'
              onChange={(e) => onSetApplicationDate(e.target.value)}
            />
          </FormControl> */}
          <TextField
            variant='outlined'
            size='small'
            id='outlined-basic'
            color='secondary'
            label='Termin przesyłania zgłoszeń'
            type='date'
            placeholder=''
            name='application-date'
            style={{
              width: "40%",
              fontSize: "14px",
              marginTop: "18px",
              marginRight: "4px",
            }}
            onChange={(e) => onSetApplicationDate(e.target.value)}
          />

          {/* <FormControl className={classes.margin} style={{ width: "22%" }}>
            <InputLabel shrink htmlFor='contact-information'>
              Dane kontaktowe
            </InputLabel>
            <BootstrapInput
              type='text'
              placeholder='jan.kowalski@nazwafirmy.com'
              name='contact-information'
              onChange={(e) => onSetContactInformation(e.target.value)}
            />
          </FormControl> */}
          <TextField
            variant='outlined'
            size='small'
            id='outlined-basic'
            color='secondary'
            label='Dane kontaktowe'
            type='text'
            placeholder='jan.kowalski@nazwafirmy.com'
            name='contact-information'
            style={{
              width: "40%",
              fontSize: "14px",
              marginTop: "18px",
              marginRight: "4px",
            }}
            onChange={(e) => onSetContactInformation(e.target.value)}
          />
        </div>
      </form>
    </>
  );
}

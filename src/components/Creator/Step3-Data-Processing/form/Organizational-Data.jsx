import React from "react";
import { alpha, withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  setApplicationWay,
  setApplicationExpectation,
  setApplicationDate,
  setContactInformation,
} from "../../../../store/actions/stepThreeActions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "40px"
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

let date = new Date();
// let date =today.getFullYear() +
//   "-" +
//   (today.getMonth() + 1 < 10
//     ? "0" + (today.getMonth() + 1)
//     : today.getMonth()(today.getMonth() + 1)) +
//   "-" +
//   today.getDate();

console.log(date);
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
      <form className={classes.root} noValidate>
        <Typography variant='subtitle2' component='div'>
          Dane organizacyjne dotyczące rekrutacji
        </Typography>
        <div style={{ width: "100%" }}>
          <TextField
            variant='outlined'
            size='small'
            fullWidth
            id='outlined-basic'
            color='secondary'
            label='Sposób przesyłania zgłoszeń'
            type='text'
            placeholder='email'
            name='application-way'
            style={{
              fontSize: "14px",
              marginTop: "18px",
              marginRight: "4px",
            }}
            onChange={(e) => onSetApplicationWay(e.target.value)}
          />

          <TextField
            variant='outlined'
            size='small'
            fullWidth
            id='outlined-basic'
            color='secondary'
            label='Oczekiwania dotyczące formy zgłoszeń'
            type='text'
            placeholder='CV w formacie pdf'
            name='application-expectation'
            style={{
              fontSize: "14px",
              marginTop: "18px",
              marginRight: "4px",
            }}
            onChange={(e) => onSetApplicationExpectation(e.target.value)}
          />

          <TextField
            variant='outlined'
            size='small'
            id='outlined-basic'
            fullWidth
            color='secondary'
            label='Data przesyłania zgłoszeń'
            type='date'
            defaultValue={date}
            name='application-date'
            style={{
              fontSize: "14px",
              marginTop: "18px",
              marginRight: "4px",
            }}
            onChange={(e) => onSetApplicationDate(e.target.value)}
          />

          <TextField
            variant='outlined'
            size='small'
            id='outlined-basic'
            fullWidth
            color='secondary'
            label='Dane kontaktowe'
            type='text'
            placeholder='jan.kowalski@nazwafirmy.com'
            name='contact-information'
            style={{
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

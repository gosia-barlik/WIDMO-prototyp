import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@material-ui/core";
import {
  setAddressCity,
  setAddressCountry,
  setAddressStreet,
  setContractType,
  setRecruitmentMode,
  setSalaryContract,
  setSalaryFrom,
  setSalaryTime,
  setSalaryTo,
  setSalaryType,
  setWorkMode,
  setWorkModel,
} from "../../../../store/actions/stepOneActions";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#784af4",
//     },
//   },
// });


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function AdditionalInformation(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  //SALARY
  const onSetSalaryType = (salaryType) => dispatch(setSalaryType(salaryType));
  const onSetSalaryFrom = (salaryFrom) => dispatch(setSalaryFrom(salaryFrom));
  const onSetSalaryTo = (salaryTo) => dispatch(setSalaryTo(salaryTo));
  const onSetSalaryTime = (salaryTime) => dispatch(setSalaryTime(salaryTime));
  const onSetSalaryContract = (salaryContract) =>
    dispatch(setSalaryContract(salaryContract));
  const onSetAddressCountry = (addressCountry) =>
    dispatch(setAddressCountry(addressCountry));
  const onSetAddressCity = (addressCity) =>
    dispatch(setAddressCity(addressCity));
  const onSetAddressStreet = (addressStreet) =>
    dispatch(setAddressStreet(addressStreet));
  const onSetRecruitmentMode = (recruitmentMode) =>
    dispatch(setRecruitmentMode(recruitmentMode));
  const onSetWorkMode = (workMode) => dispatch(setWorkMode(workMode));
  const onSetContractType = (contractType) =>
    dispatch(setContractType(contractType));
  const onSetWorkModel = (workModel) => dispatch(setWorkModel(workModel));

  return (
    <>
     
        <form className={classes.root} noValidate>
          <Typography variant='subtitle2' component='div'>
            Wynagrodzenie
          </Typography>
          <div style={{ width: "100%" }}>

            <TextField
              variant='outlined'
              size='small'
              id='outlined-basic'
              label='od'
              type='number'
              placeholder='4000'
              name='rate-from-input'
              style={{
                fontSize: "14px",
                marginTop: "8px",
                marginRight: "8px",
              }}
              onChange={(e) => onSetSalaryFrom(e.target.value)}
            />

            <TextField
              variant='outlined'
              size='small'
              id='outlined-basic'
              label='do'
              type='number'
              placeholder='8000'
              name='rate-to-input'
              style={{
                fontSize: "14px",
                marginTop: "8px",
                marginRight: "8px",
              }}
              onChange={(e) => onSetSalaryTo(e.target.value)}
            />

            <TextField
              variant='outlined'
              size='small'
              id='outlined-basic'
              label='okres rozliczenia'
              type='text'
              placeholder='miesiąc'
              name='rate-to-time'
              style={{ fontSize: "14px", marginTop: "8px", marginRight: "8px" }}
              onChange={(e) => onSetSalaryTime(e.target.value)}
            />

            <TextField
              variant='outlined'
              size='small'
              id='outlined-basic'
              label='wartość'
              type='text'
              placeholder='brutto'
              name='rate-type-input'
              style={{ fontSize: "14px", marginTop: "8px", marginRight: "8px" }}
              onChange={(e) => onSetSalaryType(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "14px" }}>
            <Typography variant='subtitle2' component='div'>
              Tryb pracy
            </Typography>

            <TextField
              variant='outlined'
              size='small'
              id='outlined-basic'
              label='stacjonarny, zdalny,...'
              type='text'
              placeholder='hybrydowy'
              name='work-model-input'
              style={{
                fontSize: "14px",
                marginTop: "8px",
                marginRight: "8px",
              }}
              onChange={(e) => onSetWorkModel(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "12px" }}>
            <Typography variant='subtitle2' component='div'>
              Rodzaj umowy
            </Typography>

            <TextField
              variant='outlined'
              size='small'
              id='outlined-basic'
              label='uop, b2b, ...'
              type='text'
              placeholder='umowa o pracę'
              name='contract-type-input'
              style={{
                fontSize: "14px",
                marginTop: "8px",
                marginRight: "8px",
              }}
              onChange={(e) => onSetSalaryContract(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "12px" }}>
            <Typography variant='subtitle2' component='div'>
              Wymiar zatrudnienia
            </Typography>

            <TextField
              variant='outlined'
              size='small'
              id='outlined-basic'
              label='1 etat, 1/2 etatu, ...'
              type='text'
              placeholder='1 etat'
              name='work-mode-input'
              style={{
                fontSize: "14px",
                marginTop: "8px",
                marginRight: "8px",
              }}
              onChange={(e) => onSetWorkMode(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "14px" }}>
            <Typography variant='subtitle2' component='div'>
              Tryb rekrutacji
            </Typography>

            <TextField
              variant='outlined'
              size='small'
              id='outlined-basic'
              label='zdalny, stacjonarny, ...'
              type='text'
              placeholder='zdalny'
              name='recruitment-mode-input'
              style={{
                fontSize: "14px",
                marginTop: "8px",
                marginRight: "8px",
              }}
              onChange={(e) => onSetRecruitmentMode(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "14px" }}>
            <Typography variant='subtitle2' component='div'>
              Miejsce pracy
            </Typography>
            <div>
 
              <TextField
                variant='outlined'
                size='small'
                id='outlined-basic'
                label='ulica, numer'
                type='text'
                placeholder='ul. Wymyślona 1'
                name='address-street-input'
                style={{
                  fontSize: "14px",
                  marginTop: "8px",
                  marginRight: "8px",
                }}
                onChange={(e) => onSetAddressStreet(e.target.value)}
              />
  
              <TextField
                variant='outlined'
                size='small'
                id='outlined-basic'
                label='miasto'
                type='text'
                placeholder='Wrocław'
                name='address-city-input'
                style={{
                  fontSize: "14px",
                  marginTop: "8px",
                  marginRight: "8px",
                }}
                onChange={(e) => onSetAddressCity(e.target.value)}
              />
  
              <TextField
                variant='outlined'
                size='small'
                id='outlined-basic'
                label='kraj'
                type='text'
                placeholder='Polska'
                name='address-country-input'
                style={{
                  fontSize: "14px",
                  marginTop: "8px",
                  marginRight: "8px",
                }}
                onChange={(e) => onSetAddressCountry(e.target.value)}
              />
            </div>
          </div>
        </form>
     
    </>
  );
}

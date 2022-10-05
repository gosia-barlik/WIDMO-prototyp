import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
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
  setSalaryCurrency,
  setSalaryType,
  setWorkMode,
  setWorkModel,
} from "../../../../store/actions/stepOneActions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    fontSize: "14px",
    marginTop: "8px",
    marginRight: "8px",
  },
}));

export default function AdditionalInformation(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const { currency } = useSelector((state) => state.stepOneReducer);
  

  const onSetSalaryType = (salaryType) => dispatch(setSalaryType(salaryType));
  const onSetSalaryFrom = (salaryFrom) => dispatch(setSalaryFrom(salaryFrom));
  const onSetSalaryTo = (salaryTo) => dispatch(setSalaryTo(salaryTo));
  const onSetSalaryCurrency = (e) =>{dispatch(setSalaryCurrency(e.target.value));console.log(e.target.value)}
    
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
  // const onSetContractType = (contractType) =>
  //   dispatch(setContractType(contractType));
  const onSetWorkModel = (workModel) => dispatch(setWorkModel(workModel));


  return (
    <>
      <form className={classes.root} noValidate>
      <Typography variant='subtitle2' gutterBottom component='div' style={{ width: "100%", marginTop:"24px", color:"red" }}>
        Szczegóły
      </Typography>
        <Typography variant='subtitle2' component='div'>
          Wynagrodzenie
        </Typography>
        <div style={{ width: "100%" }}>
          <TextField
            className={classes.textField}
            variant='outlined'
            size='small'
            id='outlined-basic'
            label='od'
            type='number'
            placeholder='4000'
            name='rate-from-input'
            onChange={(e) => onSetSalaryFrom(e.target.value)}
          />

          <TextField
            className={classes.textField}
            variant='outlined'
            size='small'
            id='outlined-basic'
            label='do'
            type='number'
            placeholder='8000'
            name='rate-to-input'
            onChange={(e) => onSetSalaryTo(e.target.value)}
          />

          {/* <InputLabel id='select-currency-label'>Waluta</InputLabel> */}
          <Select
            className={classes.textField}
            style={{ height: "40px" }}
            variant='outlined'
            size='small'
            labelId='select-currency-label'
            id='select-currency'
            // value={currency}
            label='Waluta'
            onChange={(e) => onSetSalaryCurrency(e)}>
            <MenuItem selected value="PLN">PLN</MenuItem>
            <MenuItem value="EU">EU</MenuItem>
            <MenuItem value="DOL">DOL</MenuItem>
          </Select>
          <br></br>

          <TextField
            className={classes.textField}
            variant='outlined'
            size='small'
            id='outlined-basic'
            label='okres rozliczenia'
            type='text'
            placeholder='miesiąc'
            name='rate-to-time'
            onChange={(e) => onSetSalaryTime(e.target.value)}
          />

          <TextField
            className={classes.textField}
            variant='outlined'
            size='small'
            id='outlined-basic'
            label='wartość'
            type='text'
            placeholder='brutto'
            name='rate-type-input'
            onChange={(e) => onSetSalaryType(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "14px" }}>
          <Typography variant='subtitle2' component='div'>
            Tryb pracy
          </Typography>

          <TextField
            className={classes.textField}
            variant='outlined'
            size='small'
            id='outlined-basic'
            label='stacjonarny, zdalny,...'
            type='text'
            placeholder='hybrydowy'
            name='work-model-input'
            onChange={(e) => onSetWorkModel(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "12px" }}>
          <Typography variant='subtitle2' component='div'>
            Rodzaj umowy
          </Typography>

          <TextField
            className={classes.textField}
            variant='outlined'
            size='small'
            id='outlined-basic'
            label='uop, b2b, ...'
            type='text'
            placeholder='umowa o pracę'
            name='contract-type-input'
            onChange={(e) => onSetSalaryContract(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "12px" }}>
          <Typography variant='subtitle2' component='div'>
            Wymiar zatrudnienia
          </Typography>

          <TextField
            className={classes.textField}
            variant='outlined'
            size='small'
            id='outlined-basic'
            label='1 etat, 1/2 etatu, ...'
            type='text'
            placeholder='1 etat'
            name='work-mode-input'
            onChange={(e) => onSetWorkMode(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "14px" }}>
          <Typography variant='subtitle2' component='div'>
            Tryb rekrutacji
          </Typography>

          <TextField
            className={classes.textField}
            variant='outlined'
            size='small'
            id='outlined-basic'
            label='zdalny, stacjonarny, ...'
            type='text'
            placeholder='zdalny'
            name='recruitment-mode-input'
            onChange={(e) => onSetRecruitmentMode(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "14px" }}>
          <Typography variant='subtitle2' component='div'>
            Miejsce pracy
          </Typography>
          <div>
            <TextField
              className={classes.textField}
              variant='outlined'
              size='small'
              id='outlined-basic'
              label='ulica, numer'
              type='text'
              placeholder='ul. Wymyślona 1'
              name='address-street-input'
              onChange={(e) => onSetAddressStreet(e.target.value)}
            />

            <TextField
              className={classes.textField}
              variant='outlined'
              size='small'
              id='outlined-basic'
              label='miasto'
              type='text'
              placeholder='Wrocław'
              name='address-city-input'
              onChange={(e) => onSetAddressCity(e.target.value)}
            />

            <TextField
              className={classes.textField}
              variant='outlined'
              size='small'
              id='outlined-basic'
              label='kraj'
              type='text'
              placeholder='Polska'
              name='address-country-input'
              onChange={(e) => onSetAddressCountry(e.target.value)}
            />
          </div>
        </div>
      </form>
    </>
  );
}

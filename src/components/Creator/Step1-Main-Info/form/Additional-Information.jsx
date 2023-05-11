import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@mui/material/Paper";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@mui/material/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
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
  formControl: {
    margin: 8,
    minWidth: 120,
  },
  textField: {
    fontSize: "14px",
    marginTop: "8px",
    marginRight: "8px",
    height: "38px",
  },
}));

const currencyFixture = ["PLN", "EUR", "USD"];
  const salaryTimeFixture = [
    "godzina",
    "dzień",
    "tydzień",
    "miesiąc",
    "rok",
    "inne",
  ];
  const salaryTypeFixture = ["brutto", "netto"];
  const workModelFixture = [
    "praca stacjonarna",
    "praca hybrydowa",
    "praca zdalna",
    "praca mobilna",
    "inna",
  ];
  const salaryContractFixture = [
    "umowa o pracę",
    "umowa o dzieło",
    "umowa zlecenie",
    "kontrakt B2B",
    "umowa na zastępstwo",
    "umowa agencyjna",
    "umowa o pracę tymczasową",
    "umowa o staż / praktyki",
    "inny",
  ];
  const workModeFixture = [
    "część etatu",
    "dodatkowa / tymczasowa",
    "pełny etat",
    "pół etatu",
    "inny",
  ];
  const recruitmentModeFixture = ["rekrutacja stacjonarna", "rekrutacja zdalna"];

export default function AdditionalInformation(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const stepOneReducer = useSelector((state) => state.stepOneReducer);

  const onSetSalaryType = (salaryType) => dispatch(setSalaryType(salaryType));
  const onSetSalaryFrom = (salaryFrom) => dispatch(setSalaryFrom(salaryFrom));
  const onSetSalaryTo = (salaryTo) => dispatch(setSalaryTo(salaryTo));
  const onSetSalaryCurrency = (e) => dispatch(setSalaryCurrency(e.target.value));;

  const onSetSalaryTime = (salaryTime) => dispatch(setSalaryTime(salaryTime));
  const onSetSalaryContract = (salaryContract) => dispatch(setSalaryContract(salaryContract));
  const onSetAddressCountry = (addressCountry) => dispatch(setAddressCountry(addressCountry));
  const onSetAddressCity = (addressCity) => dispatch(setAddressCity(addressCity));
  const onSetAddressStreet = (addressStreet) => dispatch(setAddressStreet(addressStreet));
  const onSetRecruitmentMode = (recruitmentMode) => dispatch(setRecruitmentMode(recruitmentMode));
  const onSetWorkMode = (workMode) => dispatch(setWorkMode(workMode));
  // const onSetContractType = (contractType) =>
  //   dispatch(setContractType(contractType));
  const onSetWorkModel = (workModel) => dispatch(setWorkModel(workModel));

  return (
    <Paper style={{ padding: "24px", marginTop: "24px" }}>
      <form className={classes.root} noValidate>
        <Typography
          variant='h6'
          gutterBottom
          component='div'
          style={{ width: "100%" }}>
          Szczegóły
        </Typography>
        <Typography variant='subtitle2' component='div'>
          Wynagrodzenie
        </Typography>
        <div style={{ width: "100%" }}>
          <FormControl variant='outlined' className={classes.formControl}>
            <TextField
              defaultValue = {stepOneReducer.salaryFrom}
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
          </FormControl>
          <FormControl variant='outlined' className={classes.formControl}>
            <TextField
              defaultValue = {stepOneReducer.salaryTo}
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
          </FormControl>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel id='select-currency-label'>waluta</InputLabel>
            <Select
              defaultValue = {stepOneReducer.salaryCurrency}
              className={classes.textField}
              variant='outlined'
              size='small'
              labelId='select-currency-label'
              id='select-currency'
              label='Waluta'
              onChange={(e) => onSetSalaryCurrency(e)}>
              {currencyFixture.map((currency) => (
                <MenuItem value={currency}>{currency}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <br></br>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel id='select-time-label'>okres rozliczenia</InputLabel>
            <Select
              defaultValue = {stepOneReducer.salaryTime}
              className={classes.textField}
              style={{ minWidth: "180px" }}
              variant='outlined'
              id='outlined-basic'
              label='okres rozliczenia'
              type='text'
              name='rate-to-time'
              onChange={(e) => onSetSalaryTime(e.target.value)}>
              {salaryTimeFixture.map((time) => (
                <MenuItem value={time}>{time}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel id='select-time-label'>wartość</InputLabel>
            <Select
              defaultValue = {stepOneReducer.salaryType}
              className={classes.textField}
              variant='outlined'
              size='small'
              id='outlined-basic'
              type='text'
              name='rate-type-input'
              onChange={(e) => onSetSalaryType(e.target.value)}>
              {salaryTypeFixture.map((type) => (
                <MenuItem value={type}>{type}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div style={{ marginTop: "14px" }}>
          <Typography variant='subtitle2' component='div'>
            Tryb pracy
          </Typography>
          <FormControl variant='outlined' className={classes.formControl}>
            <Select
              defaultValue = {stepOneReducer.workModel}
              className={classes.textField}
              variant='outlined'
              style={{ minWidth: "180px" }}
              size='small'
              id='outlined-basic'
              type='text'
              name='work-model-input'
              onChange={(e) => onSetWorkModel(e.target.value)}>
              {workModelFixture.map((model) => (
                <MenuItem value={model}>{model}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div style={{ marginTop: "12px" }}>
          <Typography variant='subtitle2' component='div'>
            Rodzaj umowy
          </Typography>
          <FormControl variant='outlined' className={classes.formControl}>
            <Select
              defaultValue = {stepOneReducer.salaryContract}
              className={classes.textField}
              variant='outlined'
              style={{ minWidth: "180px" }}
              size='small'
              id='outlined-basic'
              type='text'
              name='contract-type-input'
              onChange={(e) => onSetSalaryContract(e.target.value)}>
              {salaryContractFixture.map((contract) => (
                <MenuItem value={contract}>{contract}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div style={{ marginTop: "12px" }}>
          <Typography variant='subtitle2' component='div'>
            Wymiar zatrudnienia
          </Typography>
          <FormControl variant='outlined' className={classes.formControl}>
            <Select
              defaultValue = {stepOneReducer.workMode}
              className={classes.textField}
              variant='outlined'
              size='small'
              id='outlined-basic'
              type='text'
              name='work-mode-input'
              onChange={(e) => onSetWorkMode(e.target.value)}>
              {workModeFixture.map((mode) => (
                <MenuItem value={mode}>{mode}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div style={{ marginTop: "14px" }}>
          <Typography variant='subtitle2' component='div'>
            Tryb rekrutacji
          </Typography>
          <FormControl variant='outlined' className={classes.formControl}>
            <Select
              defaultValue = {stepOneReducer.recruitmentMode}
              className={classes.textField}
              variant='outlined'
              size='small'
              id='outlined-basic'
              type='text'
              name='recruitment-mode-input'
              onChange={(e) => onSetRecruitmentMode(e.target.value)}>
                {recruitmentModeFixture.map((mode) => (
                <MenuItem value={mode}>{mode}</MenuItem>
              ))}
              </Select>
          </FormControl>
        </div>
        <div style={{ marginTop: "14px" }}>
          <Typography variant='subtitle2' component='div'>
            Miejsce pracy
          </Typography>
          <div>
            <TextField
              defaultValue = {stepOneReducer.addressStreet}
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
              defaultValue = {stepOneReducer.addressCity}
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
              defaultValue = {stepOneReducer.addressCountry}
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
    </Paper>
  );
}

import React from "react";
import { alpha, withStyles, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { setAddressCity,
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
    fontFamily: ['"Segoe UI"', "Roboto", "Arial", "sans-serif"].join(","),
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

export default function AdditionalInformation(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

    //SALARY
    const onSetSalaryType = (salaryType) => dispatch(setSalaryType(salaryType));
    const onSetSalaryFrom = (salaryFrom) => dispatch(setSalaryFrom(salaryFrom));
    const onSetSalaryTo = (salaryTo) => dispatch(setSalaryTo(salaryTo));
    const onSetSalaryTime = (salaryTime) => dispatch(setSalaryTime(salaryTime));
    const onSetSalaryContract = (salaryContract) => dispatch(setSalaryContract(salaryContract));
    const onSetAddressCountry = (addressCountry) => dispatch(setAddressCountry(addressCountry));
    const onSetAddressCity = (addressCity) => dispatch(setAddressCity(addressCity));
    const onSetAddressStreet = (addressStreet) => dispatch(setAddressStreet(addressStreet));
    const onSetRecruitmentMode = (recruitmentMode) => dispatch(setRecruitmentMode(recruitmentMode));
    const onSetWorkMode = (workMode) => dispatch(setWorkMode(workMode));
    const onSetContractType = (contractType) => dispatch(setContractType(contractType));
    const onSetWorkModel = (workModel) => dispatch(setWorkModel(workModel));

  return (
    <>
      <form className={classes.root} noValidate>
        <Typography variant='subtitle2' component='div'>
          Wynagrodzenie
        </Typography>
        <div style={{ width: "100%" }}>
          <FormControl className={classes.margin} style={{ width: "22%" }}>
            <InputLabel shrink htmlFor='rate-from-input'>
              od
            </InputLabel>
            <BootstrapInput
              type='number'
              placeholder='4000'
              id='rate-from-input'
              onChange={(e) => onSetSalaryFrom(e.target.value)}
            />
          </FormControl>

          <FormControl className={classes.margin} style={{ width: "22%" }}>
            <InputLabel shrink htmlFor='rate-to-input'>
              do
            </InputLabel>
            <BootstrapInput
              type='number'
              placeholder='8000'
              id='rate-to-input'
              onChange={(e) => onSetSalaryTo(e.target.value)}
            />
          </FormControl>

          <FormControl className={classes.margin} style={{ width: "22%" }}>
            <InputLabel shrink htmlFor='rate-to-time'>
              okres rozliczenia
            </InputLabel>
            <BootstrapInput
              placeholder='miesiąc'
              id='rate-to-time'
              onChange={(e) => onSetSalaryTime(e.target.value)}
            />
          </FormControl>

          <FormControl className={classes.margin} style={{ width: "22%" }}>
            <InputLabel shrink htmlFor='rate-type-input'>
              wartość
            </InputLabel>
            <BootstrapInput
              onChange={(e) => onSetSalaryType(e.target.value)}
              placeholder='brutto'
              id='rate-type-input'
            />
          </FormControl>
        </div>
        <div style={{ marginTop: "12px" }}>
          <Typography variant='subtitle2' component='div'>
            Tryb pracy
          </Typography>
          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor='rate-contract-input'>
              stacjonarny, zdalny,...
            </InputLabel>
            <BootstrapInput
              onChange={(e) => onSetWorkModel(e.target.value)}
              placeholder='hybrydowy'
              id='work-model-input'
            />
          </FormControl>
        </div>
        <div style={{ marginTop: "12px" }}>
          <Typography variant='subtitle2' component='div'>
            Rodzaj umowy
          </Typography>
          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor='contract-type-input'>
              uop, b2b, ...
            </InputLabel>
            <BootstrapInput
              onChange={(e) => onSetSalaryContract(e.target.value)}
              placeholder='umowa o pracę'
              id='contract-type-input'
            />
          </FormControl>
        </div>
        <div style={{ marginTop: "12px" }}>
          <Typography variant='subtitle2' component='div'>
            Wymiar zatrudnienia
          </Typography>
          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor='work-mode-input'>
              1 etat, 1/2 etatu, ...
            </InputLabel>
            <BootstrapInput
              onChange={(e) => onSetWorkMode(e.target.value)}
              placeholder='1 etat'
              id='work-mode-input'
            />
          </FormControl>
        </div>
        <div style={{ marginTop: "12px" }}>
          <Typography variant='subtitle2' component='div'>
            Tryb rekrutacji
          </Typography>
          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor='recruitment-mode-input'>
              zdalny, stacjonarny, ...
            </InputLabel>
            <BootstrapInput
              onChange={(e) => onSetRecruitmentMode(e.target.value)}
              placeholder='zdalny'
              id='recruitment-mode-input'
            />
          </FormControl>
        </div>
        <div style={{ marginTop: "12px" }}>
          <Typography variant='subtitle2' component='div'>
            Miejsce pracy
          </Typography>
          <div>
            <FormControl className={classes.margin}>
              <InputLabel shrink htmlFor='address-street-input'>
                ulica, numer
              </InputLabel>
              <BootstrapInput
                onChange={(e) => onSetAddressStreet(e.target.value)}
                placeholder='ulica, numer'
                id='address-street-input'
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel shrink htmlFor='address-city-input'>
                miasto
              </InputLabel>
              <BootstrapInput
                onChange={(e) => onSetAddressCity(e.target.value)}
                placeholder='miasto'
                id='address-city-input'
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel shrink htmlFor='address-country-input'>
                kraj
              </InputLabel>
              <BootstrapInput
                onChange={(e) => onSetAddressCountry(e.target.value)}
                placeholder='kraj'
                id='address-country-input'
              />
            </FormControl>
          </div>
        </div>
      </form>
    </>
  );
}

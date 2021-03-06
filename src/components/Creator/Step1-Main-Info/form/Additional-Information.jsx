import React from "react";
import { alpha, withStyles, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@mui/material/Typography";

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
              placeholder='4000'
              name='rate-from-input'
              onChange={(e) => props.onSetSalaryFrom(e.target.value)}
            />
          </FormControl>

          <FormControl className={classes.margin} style={{ width: "22%" }}>
            <InputLabel shrink htmlFor='rate-to-input'>
              do
            </InputLabel>
            <BootstrapInput
              placeholder='8000'
              name='rate-to-input'
              onChange={(e) => props.onSetSalaryTo(e.target.value)}
            />
          </FormControl>

          <FormControl className={classes.margin} style={{ width: "22%" }}>
            <InputLabel shrink htmlFor='rate-to-time'>
              okres rozliczenia
            </InputLabel>
            <BootstrapInput
              placeholder='miesi??c'
              name='rate-to-time'
              onChange={(e) => props.onSetSalaryTime(e.target.value)}
            />
          </FormControl>

          <FormControl className={classes.margin} style={{ width: "22%" }}>
            <InputLabel shrink htmlFor='rate-type-input'>
              warto????
            </InputLabel>
            <BootstrapInput
              onChange={(e) => props.onSetSalaryType(e.target.value)}
              placeholder='brutto'
              name='rate-type-input'
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
              onChange={(e) => props.onSetWorkModel(e.target.value)}
              placeholder='hybrydowy'
              name='work-model-input'
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
              onChange={(e) => props.onSetSalaryContract(e.target.value)}
              placeholder='umowa o prac??'
              name='contract-type-input'
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
              onChange={(e) => props.onSetWorkMode(e.target.value)}
              placeholder='1 etat'
              name='work-mode-input'
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
              onChange={(e) => props.onSetRecruitmentMode(e.target.value)}
              placeholder='zdalny'
              name='recruitment-mode-input'
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
                onChange={(e) => props.onSetAddressStreet(e.target.value)}
                placeholder='ulica, numer'
                name='address-street-input'
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel shrink htmlFor='address-city-input'>
                miasto
              </InputLabel>
              <BootstrapInput
                onChange={(e) => props.onSetAddressCity(e.target.value)}
                placeholder='miasto'
                name='address-city-input'
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel shrink htmlFor='address-country-input'>
                kraj
              </InputLabel>
              <BootstrapInput
                onChange={(e) => props.onSetAddressCountry(e.target.value)}
                placeholder='kraj'
                name='address-country-input'
              />
            </FormControl>
          </div>
        </div>
      </form>
    </>
  );
}

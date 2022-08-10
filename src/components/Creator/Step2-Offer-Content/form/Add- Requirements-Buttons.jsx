import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@mui/material/IconButton";
import EducationExperience from "./Education-Experience-Form.jsx/Education-Experience";
import { useDispatch, useSelector } from "react-redux";
import {
  setRequirements,
  setCustomizedRequirements,
  setShowEducationForm,
} from "../../../../store/actions/stepTwoActions";

const useStyles = makeStyles((theme) => ({
  textField: {
    fontSize: "14px",
    width: "25vw",
  },
}));

export default function AddRequirementsButtons(props) {
  const classes = useStyles();
  const {
    showRequirementsButton,
    requirements,
    customizedRequirements,
    showEducationForm,
    educationLevel,
    studiesName,
    studiesStage,
    certificateName,
    certificateStage,
  } = useSelector((state) => state.stepTwoReducer);
  const dispatch = useDispatch();

  const requirementFixture = [
    "wiedza z zakresu mechaniki/elektromechaniki",
    "wykształcenie zawodowe lub średnie techniczne",
    "dobra organizacja pracy własnej oraz umiejętność pracy w zespole",
  ];

  const onSetRequirements = () => {
    let newRequirements;
    if (requirements.length === 0) newRequirements = requirementFixture;
    else newRequirements = [];
    dispatch(setRequirements(newRequirements));
  };
  const onSetShowEducationForm = () =>
    dispatch(setShowEducationForm(!showEducationForm));
  const hasAnyEducationInfo = () =>
    educationLevel.length > 0 ||
    studiesName.length > 0 ||
    studiesStage.length > 0 ||
    certificateName.length > 0 ||
    certificateStage.length > 0;


// DYNAMIC SECTION
let handleChange = (i, e) => {
  let newRequirements = [...customizedRequirements];
  newRequirements[i][e.target.name] = e.target.value;
  dispatch(setCustomizedRequirements(newRequirements));
  console.log(customizedRequirements);
};

let addFormFields = () => {
  dispatch(
    setCustomizedRequirements([
      ...customizedRequirements,
      { name: "" },
    ])
  );
};

let removeFormFields = (i) => {
  let newRequirements = [...customizedRequirements];
  newRequirements.splice(i, 1);
  dispatch(setCustomizedRequirements(newRequirements));
};

let handleSubmit = (event) => {
  event.preventDefault();
  alert(JSON.stringify(customizedRequirements));
};


  return (
    <Stack
      spacing={2}
      direction='column'
      style={{ justifyContent: "right", paddingTop: "5px" }}>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Wymagania
      </Typography>
      {showRequirementsButton && (
        <Card className='styled-card'>
          <IconButton
            className='styled-icon-button'
            component='span'
            onClick={onSetRequirements}>
            {requirements.length === 0 ? <AddIcon /> : <RemoveIcon />}
          </IconButton>
          {requirements.length === 0
            ? "Dodaj najczęstsze wymagania na to stanowisko"
            : "Usuń najczęstsze wymagania na to stanowisko"}
        </Card>
      )}

      <Card className='styled-card'>
        <IconButton
          className='styled-icon-button'
          component='span'
          onClick={onSetShowEducationForm}>
          {showEducationForm === true ? <RemoveIcon /> : <AddIcon />}
          {/* {hasAnyEducationInfo() ? <RemoveIcon /> : <AddIcon />} */}
        </IconButton>
        {showEducationForm === true
          ? "Ukryj informacje o wykształceniu i doświadczeniu"
          : "Dodaj informacje o wykształceniu i doświadczeniu"}
      </Card>
      {showEducationForm && <EducationExperience />}

      {/* DYNAMIC SECTION*/}
      <Card
        className='styled-card'
        style={{ display: "flex", flexDirection: "column" }}>
        {customizedRequirements.map((element, index) => (
          <div className='form-inline' key={index}>
            <TextField
              className={classes.textField}
              variant='outlined'
              size='small'
              label='Obowiązek'
              placeholder='Wpisz swój obowiązek'
              fullWidth
              type='text'
              name='name'
              value={element.name || ""}
              onChange={(e) => handleChange(index, e)}
            />
            {index ? (
              <IconButton
                component='span'
                className='styled-icon-button'
                style={{ marginTop: "-4px" }}
                onClick={() => removeFormFields(index)}>
                <RemoveIcon />
              </IconButton>
            ) : null}
          </div>
        ))}
        <div className='button-section'>
          <IconButton
            className='styled-icon-button'
            component='span'
            onClick={() => addFormFields()}>
            <AddIcon />
          </IconButton>
          {customizedRequirements.length === 0
            ? "Dodaj swój element"
            : "Dodaj kolejny element"}
        </div>
      </Card>
    </Stack>
  );
}

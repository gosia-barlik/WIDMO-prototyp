import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@mui/material/IconButton";
import TextField from "@material-ui/core/TextField";
import QualificationInformation from "./Qualification-Information";
import { useDispatch, useSelector } from "react-redux";
import {
  setResponsibilities,
  setCustomizedResponsibilities,
  setShowResponsibilitiesButton,
  setShowQualificationForm,
  setQualificationName,
  setQualificationCharacteristic,
  setQualificationEffects,
} from "../../../../store/actions/stepTwoActions";

const useStyles = makeStyles((theme) => ({
  textField: {
    fontSize: "14px",
    width: "25vw",
  },
}));

export default function AddResponsibilitiesButtons(props) {
  const classes = useStyles();
  const {
    responsibilities,
    customizedResponsibilities,
    showQualificationForm,
  } = useSelector((state) => state.stepTwoReducer);
  const dispatch = useDispatch();

  const responsibilitesFixture = [
    "diagnozowanie usterek mechanicznych",
    "wykonywanie napraw",
    "bieżące usuwanie awarii i usterek",
  ];
  const qualificationNameFixture = "Elektromechanik pojazdów samochodowych";
  const qualitficationCharacteristicFixture =
    "Absolwent szkoły prowadzącej kształcenie w zawodzie elektromechanik pojazdów samochodowych powinien być przygotowany do wykonywania zadań zawodowych w zakresie kwalifikacji MOT.02. Obsługa, diagnozowanie oraz naprawa mechatronicznych systemów pojazdów samochodowych: 1) przeprowadzania obsługi instalacji i konserwacji mechatronicznych systemów pojazdów samochodowych; 2) diagnozowania stanu technicznego mechatronicznych systemów pojazdów samochodowych; 3) wykonywania napraw elektrycznych i elektronicznych układów pojazdów samochodowych";
  const qualificationEffectsFixture = [
    {
      name: "Podstawy motoryzacji",
      effects: [
        "Rozróżnia zjawiska związane z motoryzacją",
        "Charakteryzuje zjawiska związane z motoryzacją",
        "Przeprowadza pomiary warsztatowe motoryzacji",
      ],
    },
    {
      name: "Przeprowadzanie obsługi i konserwacji mechatronicznych systemów pojazdów samochodowych",
      effects: [
        "Rozróżnia zjawiska związane z elektrycznością",
        "Charakteryzuje zjawiska związane z elektromagnetyzmem",
        "Przeprowadza pomiary warsztatowe",
      ],
    },
  ];

  const onSetResponsibilities = (e) => {
    let newResponsibilites;

    if (responsibilities.length > 0) newResponsibilites = [];
    else newResponsibilites = responsibilitesFixture;

    dispatch(setResponsibilities(newResponsibilites));
    dispatch(setShowResponsibilitiesButton(false));
  };

  const onSetQualificationInfo = (e) => {
    e.preventDefault();
    dispatch(setShowQualificationForm(!showQualificationForm));
    dispatch(setQualificationName(qualificationNameFixture));
    dispatch(
      setQualificationCharacteristic(qualitficationCharacteristicFixture)
    );
    dispatch(setQualificationEffects(qualificationEffectsFixture));
  };
  // const resetShowQualificationForm = (e) => {
  //   dispatch(setShowQualificationForm(false));
  // };

  // DYNAMIC SECTION
  let handleChange = (i, e) => {
    let newResponsibilities = [...customizedResponsibilities];
    newResponsibilities[i][e.target.name] = e.target.value;
    dispatch(setCustomizedResponsibilities(newResponsibilities));
    console.log(customizedResponsibilities);
  };

  let addFormFields = () => {
    dispatch(
      setCustomizedResponsibilities([
        ...customizedResponsibilities,
        { name: "" },
      ])
    );
  };

  let removeFormFields = (i) => {
    let newResponsibilities = [...customizedResponsibilities];
    newResponsibilities.splice(i, 1);
    dispatch(setCustomizedResponsibilities(newResponsibilities));
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(customizedResponsibilities));
  };

  return (
    <Stack
      spacing={2}
      direction='column'
      style={{ justifyContent: "right", paddingTop: "5px" }}>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Zakres obowiązków
      </Typography>
      <Card className='styled-card'>
        <IconButton
          className='styled-icon-button'
          component='span'
          onClick={onSetResponsibilities}>
          {responsibilities.length == 0 ? <AddIcon /> : <RemoveIcon />}
        </IconButton>
        {responsibilities.length == 0
          ? "Dodaj najczęściej poszukiwane umiejętności na rynku pracy"
          : "Usuń najczęściej poszukiwane umiejętności na rynku pracy"}
      </Card>
      <Card className='styled-card'>
        <IconButton
          className='styled-icon-button'
          component='span'
          onClick={onSetQualificationInfo}>
          {showQualificationForm == false ? <AddIcon /> : <RemoveIcon />}
        </IconButton>
        {showQualificationForm == false
          ? "Dodaj informacje z Rejestru Kwalifikacji"
          : "Ukryj informacje z Rejestru Kwalifikacji"}
      </Card>
      {showQualificationForm === true && <QualificationInformation />}
      {/* DYNAMIC SECTION*/}
      <Card
        className='styled-card'
        style={{ display: "flex", flexDirection: "column" }}>
        {customizedResponsibilities.map((element, index) => (
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
          {customizedResponsibilities.length == 0
            ? "Dodaj swój element"
            : "Dodaj kolejny element"}
        </div>
      </Card>
    </Stack>
  );
}

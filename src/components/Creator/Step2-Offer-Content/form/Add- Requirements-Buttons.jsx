import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setRequirements,
  setShowEducationForm,
} from "../../../../store/actions/stepTwoActions";

const ColorButton = styled(Button)(() => ({
  textTransform: "none",
  width: "100%",
}));

export default function AddRequirementsButtons(props) {
  const {
    showRequirementsButton,
    requirements,
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
    if (requirements.length == 0) newRequirements = requirementFixture;
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
            {requirements.length == 0 ? <AddIcon /> : <RemoveIcon />}
          </IconButton>
          {requirements.length == 0 ? "Dodaj najczęstsze wymagania na to stanowisko" : "Usuń najczęstsze wymagania na to stanowisko"}
          
        </Card>
      )}

      <Card className='styled-card'>
        <IconButton
          className='styled-icon-button'
          component='span'
          onClick={onSetShowEducationForm}>
          {showEducationForm == true ? <RemoveIcon /> : <AddIcon />}
          {/* {hasAnyEducationInfo() ? <RemoveIcon /> : <AddIcon />} */}
        </IconButton>
        {requirements.length == 0 ? "Dodaj informacje o wykształceniu i doświadczeniu" : "Ukryj informacje o wykształceniu i doświadczeniu"}
        
      </Card>
    </Stack>
  );
}

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
import Wysiwyg from "./Wysiwyg";
import { useDispatch, useSelector } from "react-redux";
import {
  setRequirements,
  setRequirementsToHtml,
  setShowEducationForm,
} from "../../../../store/actions/stepTwoActions";

const useStyles = makeStyles((theme) => ({
  textField: {
    fontSize: "14px",
    width: "25vw",
  },
}));

export default function RequirementsSection(props) {
  const classes = useStyles();
  const {
    requirements,
    requirementsToHtml,
    showEducationForm,
    educationLevel,
    studiesName,
    studiesStage,
    certificateName,
    certificateStage,
  } = useSelector((state) => state.stepTwoReducer);
  const dispatch = useDispatch();

  const onSetRequirementsToHtml = (requirementsToHtml) => {
    dispatch(setRequirementsToHtml(requirementsToHtml));
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
      style={{ justifyContent: "right", paddingTop: "24px" }}>
      <Typography variant='h6' gutterBottom component='div'>
        Wymagania
      </Typography>
      <Card className='styled-card'>
      <Wysiwyg contentToEdit={requirementsToHtml} setValueToHtml={onSetRequirementsToHtml}/>
      </Card>

      <Card className='styled-card'>
        <IconButton
          className='styled-icon-button'
          component='span'
          onClick={onSetShowEducationForm}>
          {showEducationForm === true ? <RemoveIcon /> : <AddIcon />}
          {/* {hasAnyEducationInfo() ? <RemoveIcon /> : <AddIcon />} */}
        </IconButton>
        {showEducationForm === true
          ? "Ukryj szczegółowe informacje o wykształceniu i doświadczeniu"
          : "Dodaj szczegółowe informacje o wykształceniu i doświadczeniu"}
      </Card>
      {showEducationForm && <EducationExperience />}


    </Stack>
  );
}

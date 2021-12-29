import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CustomizedInput from "./Customized-Input";

export default function EducationExperience(props) {
  const educationLabel = "Poziom wykształcenia";
  const educationLevel = ["podstawowe", "średnie", , "zawodowe", "wyższe"];

  const studiesLabel = "Nazwa kierunku";
  const studiesName = ["Technik pojazdów samochodowych", "Technik mechanik"];

  const stageLabel = "Etap";
  const stage = ["ukończone", "w trakcie", "rozpoczęte"];

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Edukacja formalna
      </Typography>

      <CustomizedInput
        label={educationLabel}
        options={educationLevel}
        onSetEducationLevel={props.onSetEducationLevel}
      />
      <CustomizedInput
        label={studiesLabel}
        options={studiesName}
        onSetStudiesName={props.onSetStudiesName}
      />
      <CustomizedInput
        label={stageLabel}
        options={stage}
        onSetStudiesStage={props.onSetStudiesStage}
      />
    </>
  );
}

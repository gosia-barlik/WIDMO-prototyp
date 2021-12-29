import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CustomizedInput from "./Customized-Input";

// const useStyles = makeStyles({
//   textField: {
//     width: "90%",
//     marginLeft: "auto",
//     marginRight: "auto",
//     paddingBottom: 0,
//     marginTop: 0,
//     fontWeight: 500,
//   },
//   input: {
//     color: "white",
//     fontWeight: 900,
//   },
// });

export default function EducationExperience(props) {
  // const classes = useStyles();

  
  // const studiesName = [];
  // const stage = ["rozpoczęte", "ukończone", "w trakcie"];

  const educationLabel = "Poziom wykształcenia";
  const educationLevel = ["podstawowe", "średnie", , "zawodowe", "wyższe"];

  const studiesLabel = "Nazwa kierunku";
  const studiesName = ["Technik pojazdów samochodowych", "Technik mechanik"];

  const stageLabel = "Etap";
  const stage = ["ukończone", "w trakcie" , "rozpoczęte"];


  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Edukacja formalna
      </Typography>

        <CustomizedInput label = {educationLabel} options={educationLevel} onSetEducationLevel={props.onSetEducationLevel}/>
        <CustomizedInput label = {studiesLabel} options={studiesName}/>
        <CustomizedInput label = {stageLabel} options={stage}/>
     
    </>
  );
}

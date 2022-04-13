import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MainActionButtons from "../common/MainActionButtons";
import Step2Dropzone from "./Step2-Dropzone";
import "./Step2-Candidates.css";

export default function Step2Candidates(props) {
  return (
    <Grid container spacing={4} className='rankomat-step-1-container'>
      <Grid
        item
        xs={4}
        style={{ marginTop: "50px", textAlign: "left"}}>
        <Typography variant='body2' gutterBottom component='div'>
          Wprowadź życiorysy kandydatów, które chciałbyś dopasować do ogłoszenia
          o pracę
        </Typography>
        <Step2Dropzone
          onSetResumes={props.onSetResumes}
          resumes={props.resumes}
        />
        <MainActionButtons
          handleBack={props.handleStepperBack}
          handleNext={props.handleStepperNext}
        />
      </Grid>
    </Grid>
  );
}

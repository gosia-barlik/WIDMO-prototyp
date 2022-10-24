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
        xs={10}
        className='rankomat-step-1-container-box'
        style={{ textAlign: "left"}}>
        <Typography variant='body2' gutterBottom component='div'>
        Wprowadź <span style={{fontWeight:"700"}}>CV</span> kandydatów, które chciałbyś przeanalizować
        </Typography>
        <Step2Dropzone />
        <MainActionButtons
          handleBack={props.handleStepperBack}
          handleNext={props.handleStepperNext}
        />
      </Grid>
    </Grid>
  );
}

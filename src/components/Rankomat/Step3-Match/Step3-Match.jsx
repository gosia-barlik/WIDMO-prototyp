import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CvList from "./Step3-Cv-List";
import MainActionButtons from "../common/MainActionButtons";
import "./Step3-Match.css";

export default function Step3Match(props) {
  return (
    <>
      <Grid container spacing={4} className='rankomat step-1-container'>
        <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
          <Typography variant='subtitle2' gutterBottom component='div'>
            Lista życiorysów
          </Typography>
          <Paper className='form-container'>
            <CvList resumes={props.resumes} />
          </Paper>
          <MainActionButtons
        handleBack={props.handleStepperBack}
        handleNext={props.handleStepperNext}
      />
        </Grid>
        <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
          <Typography variant='subtitle2' gutterBottom component='div'>
            Filtry
          </Typography>
          <Paper className='job-offer-container'></Paper>
        </Grid>
      </Grid>
    
    </>
  );
}

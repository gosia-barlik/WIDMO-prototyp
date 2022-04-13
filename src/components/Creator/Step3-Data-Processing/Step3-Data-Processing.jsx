import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import JobOffer from "../common/Job-offer.jsx";
import MainActionButtons from "../common/Main-Action-Buttons.jsx";
import DataProcessing from "./form/DataProcessing.jsx";
import "./Step3-Data-Processing.css";
import { useSelector } from "react-redux";

export default function Step3DataProcessing(props) {
const { rodo } = useSelector((state) => state.stepTwoReducer);

  return (
    <Grid container spacing={4} className='step-3-container'>
      <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Obszar roboczy
        </Typography>
        <Paper className='form-container-box'>
          <>
            <DataProcessing />
            <MainActionButtons
              handleBack={props.handleMainStepperBack}
              handleNext={props.handleMainStepperNext}
            />
          </>
        </Paper>
      </Grid>

      <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Twoje ogłoszenie
        </Typography>
        <Paper className='job-offer-container-box'>
          <JobOffer
            activeStep={props.activeStep}
            RODO={rodo}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

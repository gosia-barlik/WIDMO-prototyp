import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import StepperVertical from "./Stepper-vertical.jsx";
import "./Step2-Offer-Content.css";


export default function Step2OfferContent(props) {
  const [activeStep, setActiveStep] = useState(0);


// STEPPER
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    console.log(activeStep);
  };


  return (
    <Grid container spacing={4}>
      <StepperVertical activeStep={activeStep} />
      <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Obszar roboczy
        </Typography>
        <Paper className='form-container'>
          {activeStep === 0 ? (
            <Stack
            spacing={2}
            direction='row'
            style={{ justifyContent: "right", paddingTop: "5px" }}>
            <Button
              className='button-outlined'
              variant='outlined'
             >
              Dodaj najczęściej poszukiwane umiejętności na rynku pracy
            </Button>
            <Button
              className='button-contained'
              variant='contained'
              >
              Dodaj informacje z opisów kwalifikacji i zestawów efektów uczenia się
            </Button>
          </Stack>
          ) : null}
         
          {activeStep !== 2  ? (
            <Stack
              spacing={2}
              direction='row'
              style={{ justifyContent: "right", paddingTop: "5px" }}>
              <Button
                className='button-outlined'
                variant='outlined'
                onClick={handleBack}>
                Wróć
              </Button>
              <Button
                className='button-contained'
                variant='contained'
                onClick={handleNext}>
                Dalej
              </Button>
            </Stack>
          ) : null}
         
        </Paper>
      </Grid>
      <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Twoje ogłoszenie
        </Typography>
        <Paper className='job-offer-container'>
          
        </Paper>
      </Grid>
    </Grid>
  );
}

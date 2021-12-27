import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@material-ui/icons/Add";
import { styled } from "@mui/material/styles";
import StepperVertical from "./Stepper-vertical.jsx";
import JobOffer from "../common/Job-offer.jsx";
import "./Step2-Offer-Content.css";

const ColorButton = styled(Button)(() => ({
  color: "#784af4",
  textTransform: "none",
  width: "100%",
  padding: "15px",
  justifyContent: "left",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "#F2F2F2",
  },
}));
export default function Step2OfferContent(props) {
  const [activeStep, setActiveStep] = useState(0);

  // STEPPER
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container spacing={4} className='step-2-container'>
      <StepperVertical activeStep={activeStep} />
      <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Obszar roboczy
        </Typography>
        <Paper className='form-container'>
          {activeStep === 0 ? (
            <Stack
              spacing={2}
              direction='column'
              style={{ justifyContent: "right", paddingTop: "5px" }}>
              <ColorButton variant='contained' onClick={props.onSetResponsibilities}>
                <AddIcon style={{ marginRight: "8px" }} />
                Dodaj najczęściej poszukiwane umiejętności na rynku pracy
              </ColorButton>
              <ColorButton variant='contained'>
                <AddIcon style={{ marginRight: "8px" }} />
                Dodaj informacje z opisów kwalifikacji i zestawów efektów
                uczenia się
              </ColorButton>
            </Stack>
          ) : null}

          {activeStep === 0 ? (
            <Stack
              spacing={2}
              direction='row'
              style={{ justifyContent: "right", paddingTop: "5px" }}>
              <Button
                className='button-outlined'
                variant='outlined'
                onClick={props.handleBack}>
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
          <JobOffer
            activeStep={props.activeStep}
            searchedPosition={props.searchedPosition}
            salaryTo={props.salaryTo}
            salaryFrom={props.salaryFrom}
            salaryTime={props.salaryTime}
            salaryType={props.salaryType}
            salaryContract={props.salaryContract}
            aboutCompany={props.aboutCompany}
            responsibilities={props.responsibilities}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

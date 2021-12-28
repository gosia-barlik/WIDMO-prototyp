import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import StepperVertical from "../common/Stepper-vertical.jsx";
import SearchBar from "./form/Job-Position-Search-Bar";
import SearchResults from "./form/Job-Position-Search-Results";
import JobOffer from "../common/Job-offer.jsx";
import MainActionButtons from "../common/Main-Action-Buttons.jsx";
import Salary from "./form/Salary";
import "./Step1-Main-Info.css";
import AboutCompany from "./form/About.jsx";

export default function Step1MainInfo(props) {
  const [activeStep, setActiveStep] = useState(0);

  // STEPPER
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container spacing={4} className='step-1-container'>
      <StepperVertical activeStep={activeStep} />
      <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Obszar roboczy
        </Typography>
        <Paper className='form-container'>
          {activeStep === 0 ? (
            <SearchBar
              onSetSearchedPosition={props.onSetSearchedPosition}
              onShowResults={props.onShowResults}
            />
          ) : null}
          {activeStep === 0 && props.showResults ? <SearchResults /> : null}
          {activeStep === 1 ? (
            <Salary
              onSetSalaryType={props.onSetSalaryType}
              onSetSalaryTo={props.onSetSalaryTo}
              onSetSalaryFrom={props.onSetSalaryFrom}
              onSetSalaryTime={props.onSetSalaryTime}
              onSetSalaryContract={props.onSetSalaryContract}
            />
          ) : null}
          {activeStep === 2 ? (
            <AboutCompany onSetAboutCompany={props.onSetAboutCompany} />
          ) : null}
          {props.showResults && activeStep !== 2 ? (
            <MainActionButtons handleBack={handleBack} handleNext={handleNext} />
          ) : null}
          {props.showResults && activeStep === 2 ? (
            <MainActionButtons handleBack={handleBack} handleNext={props.handleMainStepperNext} />
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
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

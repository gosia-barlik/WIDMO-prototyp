import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import StepperVertical from "../common/Stepper-vertical.jsx";
import SearchBar from "./form/Job-Position-Search-Bar";
import SearchResults from "./form/Job-Position-Search-Results";
import JobOffer from "./Job-offer.jsx";
import Salary from "./form/Salary";
import "./Step1-Main-Info.css";
import AboutCompany from "./form/About.jsx";

export default function Step1MainInfo(props) {
  const [searchedPosition, setSearchedPosition] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const [salaryType, setSalaryType] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [salaryTime, setSalaryTime] = useState("");
  const [salaryContract, setSalaryContract] = useState("");

  const [aboutCompany, setAboutCompany] = useState("");

// STEPPER
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    console.log(activeStep);
  };

// JOB POSITION
  const onSetSearchedPosition = (searchedPhrase) => {
    setSearchedPosition(searchedPhrase);
  };
  const onShowResults = () => {
    setShowResults(true);
  };

//SALARY
  const onSetSalaryType = (salaryType) => {
    setSalaryType(salaryType);
  };
  const onSetSalaryFrom = (salaryFrom) => {
    setSalaryFrom(salaryFrom);
  };
  const onSetSalaryTo = (salaryTo) => {
    setSalaryTo(salaryTo);
  };
  const onSetSalaryTime = (salaryTime) => {
    setSalaryTime(salaryTime);
  };
  const onSetSalaryContract = (salaryContract) => {
    setSalaryContract(salaryContract);
  };

//ABOUT COMPANY
const onSetAboutCompany = (aboutCompany) => {
  setAboutCompany(aboutCompany);
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
            <SearchBar
              onSetSearchedPosition={onSetSearchedPosition}
              onShowResults={onShowResults}
            />
          ) : null}
          {activeStep === 0 && showResults ? <SearchResults /> : null}
          {activeStep === 1 ? (
            <Salary
              onSetSalaryType={onSetSalaryType}
              onSetSalaryTo={onSetSalaryTo}
              onSetSalaryFrom={onSetSalaryFrom}
              onSetSalaryTime={onSetSalaryTime}
              onSetSalaryContract={onSetSalaryContract}
            />
          ) : null}
           {activeStep === 2 ? (
            <AboutCompany
              onSetAboutCompany={onSetAboutCompany}
            />
          ) : null}
          {showResults && (activeStep !== 2 ) ? (
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
          {showResults && (activeStep === 2 ) ? (
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
                onClick={props.handleNext}>
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
            searchedPosition={searchedPosition}
            salaryTo={salaryTo}
            salaryFrom={salaryFrom}
            salaryTime={salaryTime}
            salaryType={salaryType}
            salaryContract={salaryContract}
            aboutCompany={aboutCompany}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

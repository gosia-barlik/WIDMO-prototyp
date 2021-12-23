import React, { useState, useEffect }from "react";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import StepperVertical from "../common/Stepper-vertical.jsx";
import SearchBar from "./form/Job-Position-Search-Bar";
import SearchResults from "./form/Job-Position-Search-Results";
import JobOffer from "./Job-offer.jsx";
import "./Step1-Main-Info.css";

export default function Step1MainInfo() {

  const [searchedPosition, setSearchedPosition] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(activeStep)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  
  const onSetSearchedPosition = (searchedPhrase) => {
    setSearchedPosition (searchedPhrase); 
  }

  const onShowResults = () => {
    setShowResults (true); 
   
  }

  
  return (
    <Grid container spacing={4}>
      <StepperVertical activeStep={activeStep}/>
      <Grid item xs={4} style={{marginTop:'50px', textAlign: 'left'}}>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Obszar roboczy
      </Typography>
        <Paper className='form-container'>
         <SearchBar onSetSearchedPosition={onSetSearchedPosition} onShowResults={onShowResults}/>
         { showResults ? <SearchResults handleNext={handleNext} handleBack={handleBack}/> : null }
        </Paper>
      </Grid>
      <Grid item xs={4} style={{marginTop:'50px', textAlign: 'left'}}>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Twoje ogłoszenie
      </Typography>
        <Paper className='job-offer-container' >
          <JobOffer searchedPosition={searchedPosition}/>
        </Paper>
      </Grid>
    </Grid>
  );
}

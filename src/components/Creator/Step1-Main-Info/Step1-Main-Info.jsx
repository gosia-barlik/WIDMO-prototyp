import React from "react";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import StepperVertical from "../common/Stepper-vertical.jsx";
import SearchBar from "./form/Job-Position-Search-Bar";
import SearchResults from "./form/Job-Position-Search-Results";
import JobOffer from "./Job-offer.jsx";
import "./Step1-Main-Info.css";

export default function Step1MainInfo() {
  return (
    <Grid container spacing={4}>
      <StepperVertical />
      <Grid item xs={4} style={{marginTop:'50px', textAlign: 'left'}}>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Obszar roboczy
      </Typography>
        <Paper className='form-container'>
         <SearchBar />
         <SearchResults />
        </Paper>
      </Grid>
      <Grid item xs={4} style={{marginTop:'50px', textAlign: 'left'}}>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Twoje ogłoszenie
      </Typography>
        <Paper className='job-offer-container' >
          <JobOffer/>
        </Paper>
      </Grid>
    </Grid>
  );
}

import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SearchBar from "./form/Job-Position-Search-Bar";
import SearchResults from "./form/Job-Position-Search-Results";
import JobOffer from "../common/job-offer/Job-offer";
import MainActionButtons from "../common/Main-Action-Buttons.jsx";
import AdditionalInformation from "./form/Additional-Information";
import "./Step1-Main-Info.css";
import AboutCompany from "./form/About.jsx";
import AlertAbout from "./alerts/Alert-About.jsx";
import { useSelector } from "react-redux";

export default function Step1MainInfo(props) {
  const { showResults } = useSelector((state) => state.stepOneReducer);
  const disabled = true;

  return (
    <Grid container className='step-1-container'>

      <Grid
        item
        xs={4}
        className='form-container'>
        <Typography
          variant='body2'
          style={{ color: "#00000099" }}
          gutterBottom
          component='div'>
          Obszar roboczy
        </Typography>
        <Paper className='form-container-box'>
          <SearchBar />

          {showResults && <><SearchResults /> <AboutCompany /> <AdditionalInformation /> <MainActionButtons
              handleBack={props.handleVerticalStepperBack}
              handleNext={props.handleMainStepperNext}
            /></>}


        </Paper>
      </Grid>
      <Grid
        item
        xs={4}
        className='job-offer-container'>
        <Typography
          variant='body2'
          style={{ color: "#00000099" }}
          gutterBottom
          component='div'>
          Podgląd ogłoszenia
        </Typography>
        <Paper className='job-offer-container-box' elevation={0}>
          <JobOffer activeStep={props.activeStep} />
        </Paper>
         <AlertAbout />
      </Grid>
    </Grid>
  );
}

import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import StepperVertical from "../common/Stepper-vertical.jsx";
import SearchBar from "./form/Job-Position-Search-Bar";
import SearchResults from "./form/Job-Position-Search-Results";
import JobOffer from "../common/Job-offer.jsx";
import MainActionButtons from "../common/Main-Action-Buttons.jsx";
import AdditionalInformation from "./form/Additional-Information";
import "./Step1-Main-Info.css";
import AboutCompany from "./form/About.jsx";
import AlertAbout from "./alerts/Alert-About.jsx";
import { useSelector } from "react-redux";

export default function Step1MainInfo(props) {
  const { showResults } = useSelector((state) => state.stepOneReducer);

  return (
    <Grid container className='step-1-container'>
      <StepperVertical activeStep={props.activeVerticalStep} />
      <Grid
        item
        xs={4}
        style={{ margin: "20px", marginTop: "50px", textAlign: "left" }}
        className='form-container'>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Obszar roboczy
        </Typography>
        <Paper className='form-container-box'>
          {props.activeVerticalStep === 0 && <SearchBar />}

          {props.activeVerticalStep === 0 && showResults && <SearchResults />}

          {props.activeVerticalStep === 1 && <AboutCompany />}

          {props.activeVerticalStep === 2 && <AdditionalInformation />}

          {showResults && props.activeVerticalStep !== 2 && (
            <MainActionButtons
              handleBack={props.handleVerticalStepperBack}
              handleNext={props.handleVerticalStepperNext}
            />
          )}

          {showResults && props.activeVerticalStep === 2 && (
            <MainActionButtons
              handleBack={props.handleVerticalStepperBack}
              handleNext={props.handleMainStepperNext}
            />
          )}
        </Paper>
      </Grid>
      <Grid
        item
        xs={4}
        style={{ margin: "20px", marginTop: "50px", textAlign: "left" }}
        className='job-offer-container'>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Twoje ogłoszenie
        </Typography>
        <Paper className='job-offer-container-box' elevation={0} >
          <JobOffer activeStep={props.activeStep} />
        </Paper>
        {props.activeVerticalStep === 1 && <AlertAbout />}
      </Grid>
    </Grid>
  );
}

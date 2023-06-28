import React, { useState } from "react";
import StepperHorizontal from "./common/Stepper-horizontal.jsx";
import Typography from "@mui/material/Typography";
import Step1JobOffer from "./Step1-Job-Offer/Step1-Job-Offer.jsx";
import Step2Candidates from "./Step2-Candidates/Step2-Candidates.jsx";
import Step3Match from "./Step3-Match/Step3-Match.jsx";
import Grid from "@mui/material/Grid";
import "./Rankomat.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setKeyword,
  setResumes,
} from "../../store/actions/rankomatActions/rankomatStepTwoActions";

export default function Rankomat() {
  const [activeStep, setActiveStep] = useState(0);
  const stepperLabels = [
    { name: "Ogłoszenie" },
    { name: "CV" },
    { name: "Analiza" },
  ];

  // STEPPER
  const handleStepperNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleStepperBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Grid container className='step-1-container'>
        <Typography variant='body' component='div' className='module-title'>
          Analiza CV
        </Typography>
      </Grid>
      <Grid container className='step-1-container'>
        <StepperHorizontal
          activeStep={activeStep}
          stepperLabels={stepperLabels}
        />
      </Grid>
      <Grid container className='step-1-container'>
        {activeStep === 0 && (
          <Step1JobOffer
            handleStepperBack={handleStepperBack}
            handleStepperNext={handleStepperNext}
          />
        )}

        {activeStep === 1 && (
          <Step2Candidates
            handleStepperBack={handleStepperBack}
            handleStepperNext={handleStepperNext}
          />
        )}
      </Grid>

      {activeStep === 2 && (
        <Step3Match
          handleStepperBack={handleStepperBack}
          handleStepperNext={handleStepperNext}
        />
      )}
    </>
  );
}

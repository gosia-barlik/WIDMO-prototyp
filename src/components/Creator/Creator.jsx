import React, { useState } from "react";
import StepperHorizontal from "./common/Stepper-horizontal.jsx";
import Step1MainInfo from "./Step1-Main-Info/Step1-Main-Info.jsx";
import Step2OfferContent from "./Step2-Offer-Content/Step2-Offer-Content.jsx";
import Step3DataProcessing from "./Step3-Data-Processing/Step3-Data-Processing.jsx";
import Step4Summary from "./Step4-Summary/Step4-Summary.jsx";
import JobOfferContainer from "./common/job-offer/Job-offer-container.jsx";
import JobOffer from "./common/job-offer/Job-offer-preview.jsx";
import ZRKInfo from "./common/zrk/ZRK-Info.jsx";
import SearchResults from "./Step1-Main-Info/form/Job-Position-Search-Results.jsx";
import AlertAbout from "./Step1-Main-Info/alerts/Alert-About.jsx";
import Switch from "@material-ui/core/Switch";
import Grow from "@material-ui/core/Grow";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import {
  setShowJobOffer,
  setShowZRK,
} from "../../store/actions/stepOneActions.js";

import { useDispatch, useSelector } from "react-redux";
import "./Creator.css";

export default function Creator() {
  const { showResults, showJobOffer, showZRK } = useSelector(
    (state) => state.stepOneReducer
  );
  const [updateState, setUpdateState] = useState(0);
  const dispatch = useDispatch();

  //STEPPER
  const [activeStep, setActiveStep] = useState(0);

  const mainStepperLabels = [
    { name: "Główne informacje" },
    { name: "Treść ogłoszenia" },
    { name: "Dodatkowe informacje" },
    // { name: "Gotowe ogłoszenie" },
  ];

  const handleStep = (step) => {
    setActiveStep(step);
  };
  const handleMainStepperNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleMainStepperBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //JOB OFFER PREVIEW
  const handleShowJobOffer = () => {
    showJobOffer
      ? dispatch(setShowJobOffer(false))
      : dispatch(setShowJobOffer(true));
  };

  //ZRK
  const handleShowZRK = () => {
    showZRK ? dispatch(setShowZRK(false)) : dispatch(setShowZRK(true));
  };

  return (
    <>
      {showResults === false && (
        <StepperHorizontal
          activeStep={activeStep}
          handleStep={handleStep}
          mainStepperLabels={mainStepperLabels}
          nonLinear={false}
        />
      )}

      {(showResults && activeStep !== 3)&& (
        <StepperHorizontal
          activeStep={activeStep}
          handleStep={handleStep}
          mainStepperLabels={mainStepperLabels}
          nonLinear={true}
        />
      )}

      <Grid container className='step-1-container'>
        {activeStep === 0 && (
          <Step1MainInfo
            activeStep={activeStep}
            handleMainStepperBack={handleMainStepperBack}
            handleMainStepperNext={handleMainStepperNext}
            // onFileUpload={onFileUpload}
            updateState={updateState}
          />
        )}
        {activeStep === 1 && (
          <Step2OfferContent
            activeStep={activeStep}
            handleMainStepperBack={handleMainStepperBack}
            handleMainStepperNext={handleMainStepperNext}
            updateState={updateState}
          />
        )}
        {activeStep === 2 && (
          <Step3DataProcessing
            activeStep={activeStep}
            handleMainStepperBack={handleMainStepperBack}
            handleMainStepperNext={handleMainStepperNext}
          />
        )}

        {activeStep === 3 && (
          <Step4Summary
            activeStep={activeStep}
            handleMainStepperBack={handleMainStepperBack}
            handleMainStepperNext={handleMainStepperNext}
          />
        )}

        {activeStep !== 3 && <JobOfferContainer />}

        {(showResults && activeStep !== 3)&& <ZRKInfo />}
      </Grid>
    </>
  );
}

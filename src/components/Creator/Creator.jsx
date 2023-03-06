import React, { useState } from "react";
import StepperHorizontal from "./common/Stepper-horizontal.jsx";
import Step1MainInfo from "./Step1-Main-Info/Step1-Main-Info.jsx";
import Step2OfferContent from "./Step2-Offer-Content/Step2-Offer-Content.jsx";
import Step3DataProcessing from "./Step3-Data-Processing/Step3-Data-Processing.jsx";
import Step4Summary from "./Step4-Summary/Step4-Summary.jsx";
import JobOfferContainer from "./common/job-offer/Job-offer-container.jsx";
import ZRKInfo from "./common/zrk/ZRK-Info.jsx";
import Grid from "@mui/material/Grid";

import { useDispatch, useSelector } from "react-redux";
import "./Creator.css";

export default function Creator() {
  const { showResults } = useSelector(
    (state) => state.stepOneReducer
  );
  const { horizontalStepper } = useSelector((state) => state.stepperReducer);
  const dispatch = useDispatch();

  return (
    <>
      {showResults === false && (
        <StepperHorizontal
          nonLinear={false}
        />
      )}

      {(showResults && horizontalStepper !== 3)&& (
        <StepperHorizontal
          nonLinear={true}
        />
      )}

      <Grid container className='step-1-container'>
        {horizontalStepper === 0 && (
          <Step1MainInfo
            activeStep={horizontalStepper}
            // onFileUpload={onFileUpload}
         
          />
        )}
        {horizontalStepper === 1 && (
          <Step2OfferContent
            activeStep={horizontalStepper}
        
          />
        )}
        {horizontalStepper === 2 && (
          <Step3DataProcessing
            activeStep={horizontalStepper}
          />
        )}

        {horizontalStepper === 3 && (
          <Step4Summary
            activeStep={horizontalStepper}
          />
        )}

        {horizontalStepper !== 3 && <JobOfferContainer />}

        {(showResults && horizontalStepper !== 3)&& <ZRKInfo />}
      </Grid>
    </>
  );
}

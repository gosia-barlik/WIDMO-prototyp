import React, { useState, useEffect } from "react";
import StepperHorizontal from "./common/Stepper-horizontal.jsx";
import Step1JobOffer from "./Step1-Job-Offer/Step1-Job-Offer.jsx";
import Step2Candidates from "./Step2-Candidates/Step2-Candidates.jsx";
import Step3Match from "./Step3-Match/Step3-Match.jsx";
import "./Rankomat.css";

export default function Rankomat() {
  const [activeStep, setActiveStep] = useState(0);
  const [jobOffer, setJobOffer] = useState("");

  //ABOUT COMPANY
  const onSetJobOffer = (jobOffer) => {
    setJobOffer(jobOffer);
  };
  // STEPPER
  const handleStepperNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleStepperBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <StepperHorizontal activeStep={activeStep} />
      {activeStep === 0 ? (
        <Step1JobOffer
          onSetJobOffer={onSetJobOffer}
          handleStepperBack={handleStepperBack}
          handleStepperNext={handleStepperNext}
        />
      ) : null}

{activeStep === 1 ? (
        <Step2Candidates
          handleStepperBack={handleStepperBack}
          handleStepperNext={handleStepperNext}
        />
      ) : null}

{activeStep === 2 ? (
        <Step3Match
          handleStepperBack={handleStepperBack}
          handleStepperNext={handleStepperNext}
        />
      ) : null}
    </>
  );
}

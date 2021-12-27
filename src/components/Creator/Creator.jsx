import React, { useState, useEffect } from "react";
import StepperHorizontal from "./common/Stepper-horizontal.jsx";
import Step1MainInfo from "./Step1-Main-Info/Step1-Main-Info.jsx";
import Step2OfferContent from "./Step2-Offer-Content/Step2-Offer-Content.jsx";
import "./Creator.css";

export default function Creator() {
  const [activeStep, setActiveStep] = useState(0);

  // STEPPER
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <StepperHorizontal activeStep={activeStep} />
      {activeStep === 0? <Step1MainInfo handleBack={handleBack} handleNext={handleNext}/> : null}
      {activeStep === 1? <Step2OfferContent handleBack={handleBack} handleNext={handleNext}/> : null}
      
    </>
  );
}

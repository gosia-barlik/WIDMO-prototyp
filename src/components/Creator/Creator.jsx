import React, { useState } from "react";
import StepperHorizontal from "./common/Stepper-horizontal.jsx";
import Step1MainInfo from "./Step1-Main-Info/Step1-Main-Info.jsx";
import Step2OfferContent from "./Step2-Offer-Content/Step2-Offer-Content.jsx";
import Step3DataProcessing from "./Step3-Data-Processing/Step3-Data-Processing.jsx";
import Step4Summary from "./Step4-Summary/Step4-Summary.jsx";
import { useSelector } from "react-redux";
import "./Creator.css";

export default function Creator() {
  const { showResults } = useSelector((state) => state.stepOneReducer);
  const [updateState, setUpdateState] = useState(0);
  //MAIN STEPPER
  const [activeStep, setActiveStep] = useState(0);

  const mainStepperLabels = [
    { name: "Główne informacje" },
    { name: "Treść ogłoszenia" },
    { name: "Dodatkowe informacje" },
    { name: "Gotowe ogłoszenie" },
  ];

  // MAIN STEPPER
  const handleStep = (step) => {
    setActiveStep(step);
  };
  const handleMainStepperNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleMainStepperBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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

      {showResults && (
        <StepperHorizontal
          activeStep={activeStep}
          handleStep={handleStep}
          mainStepperLabels={mainStepperLabels}
          nonLinear={true}
        />
      )}

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
    </>
  );
}

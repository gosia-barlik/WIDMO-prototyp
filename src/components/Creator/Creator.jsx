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
  //VERTICAL STEPPER
  const [activeVerticalStep, setActiveVerticalStep] = useState(0);

  const mainStepperLabels = [
    { name: "Informacje podstawowe" },
    { name: "Treść ogłoszenia" },
    { name: "Informacje uzupełniające" },
    { name: "Podsumowanie" },
  ];
  const step1VerticalStepperLabels = [
    {
      name: "Stanowisko",
      description: `Dodaj nazwę stanowiska, aby rozpocząć.`,
    },
    {
      name: "O firmie",
      description: `Pole opcjonalne.`,
    },
    {
      name: "Warunki zatrudnienia",
      description: "Pole opcjonalne.",
    },
  ];
  const step2VerticalStepperLabels = [
    {
      name: "Zakres obowiązków",
      description: `Pole opcjonalne.`,
    },
    {
      name: "Wymagania",
      description: "Pole opcjonalne.",
    },
    {
      name: "Benefity",
      description: `Pole opcjonalne.`,
    },
  ];

  // MAIN STEPPER
  const handleStep = (step) => {
    setActiveStep(step);
    setActiveVerticalStep(0);
  };
  const handleMainStepperNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setActiveVerticalStep(0);
  };
  const handleMainStepperBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setActiveVerticalStep(2);
  };
  const handleMainStepperBackAndReset = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // resetShowQualificationForm();
    setUpdateState((prevState) => prevState + 1);
    setActiveVerticalStep(2);
  };
  const handleMainStepperNextAndReset = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setShowEducationForm(false);
  };

  // VERTICAL STEPPER
  const handleStep1VerticalStepper = (step) => {
    setActiveVerticalStep(step);
  };

  const handleVerticalStepperNext = () => {
    setActiveVerticalStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleVerticalStepperBack = () => {
    setActiveVerticalStep((prevActiveStep) => prevActiveStep - 1);
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
          handleVerticalStepperNext={handleVerticalStepperNext}
          handleVerticalStepperBack={handleVerticalStepperBack}
          activeVerticalStep={activeVerticalStep}
          verticalStepperLabels={step1VerticalStepperLabels}
          handleStep1VerticalStepper={handleStep1VerticalStepper}
        />
      )}
      {activeStep === 1 && (
        <Step2OfferContent
          activeStep={activeStep}
          handleMainStepperBack={handleMainStepperBack}
          handleMainStepperNext={handleMainStepperNext}
          handleMainStepperNextAndReset={handleMainStepperNextAndReset}
          handleMainStepperBackAndReset={handleMainStepperBackAndReset}
          handleVerticalStepperNext={handleVerticalStepperNext}
          handleVerticalStepperBack={handleVerticalStepperBack}
          updateState={updateState}
          activeVerticalStep={activeVerticalStep}
          verticalStepperLabels={step2VerticalStepperLabels}
          handleStep1VerticalStepper={handleStep1VerticalStepper}
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

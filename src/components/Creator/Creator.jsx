import React, { useState, useEffect } from "react";
import StepperHorizontal from "./common/Stepper-horizontal.jsx";
import Step1MainInfo from "./Step1-Main-Info/Step1-Main-Info.jsx";
import Step2OfferContent from "./Step2-Offer-Content/Step2-Offer-Content.jsx";
import "./Creator.css";

export default function Creator() {
  const [searchedPosition, setSearchedPosition] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [salaryType, setSalaryType] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [salaryTime, setSalaryTime] = useState("");
  const [salaryContract, setSalaryContract] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);

  // JOB POSITION
  const onSetSearchedPosition = (searchedPhrase) => {
    setSearchedPosition(searchedPhrase);
  };
  const onShowResults = () => {
    setShowResults(true);
  };

  //SALARY
  const onSetSalaryType = (salaryType) => {
    setSalaryType(salaryType);
  };
  const onSetSalaryFrom = (salaryFrom) => {
    setSalaryFrom(salaryFrom);
  };
  const onSetSalaryTo = (salaryTo) => {
    setSalaryTo(salaryTo);
  };
  const onSetSalaryTime = (salaryTime) => {
    setSalaryTime(salaryTime);
  };
  const onSetSalaryContract = (salaryContract) => {
    setSalaryContract(salaryContract);
  };

  //ABOUT COMPANY
  const onSetAboutCompany = (aboutCompany) => {
    setAboutCompany(aboutCompany);
  };
  //RESPONSIBILITIES
  const onSetResponsibilities = () => {
    setResponsibilities([
      "diagnozowanie usterek mechanicznych",
      "wykonywanie napraw",
    ]);
    console.log(responsibilities);
  };

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
      {activeStep === 0 ? (
        <Step1MainInfo
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
          onSetSearchedPosition={onSetSearchedPosition}
          onShowResults={onShowResults}
          showResults={showResults}
          searchedPosition={searchedPosition}
          onSetSalaryType={onSetSalaryType}
          salaryType={salaryType}
          onSetSalaryFrom={onSetSalaryFrom}
          salaryFrom={salaryFrom}
          onSetSalaryTo={onSetSalaryTo}
          salaryTo={salaryTo}
          onSetSalaryTime={onSetSalaryTime}
          salaryTime={salaryTime}
          onSetSalaryContract={onSetSalaryContract}
          salaryContract={salaryContract}
          onSetAboutCompany={onSetAboutCompany}
          aboutCompany={aboutCompany}
        />
      ) : null}
      {activeStep === 1 ? (
        <Step2OfferContent
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
          searchedPosition={searchedPosition}
          salaryType={salaryType}
          salaryFrom={salaryFrom}
          salaryTo={salaryTo}
          salaryTime={salaryTime}
          salaryContract={salaryContract}
          aboutCompany={aboutCompany}
          onSetResponsibilities={onSetResponsibilities}
          responsibilities={responsibilities}
        />
      ) : null}
    </>
  );
}

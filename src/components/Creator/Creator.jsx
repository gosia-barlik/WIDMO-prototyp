import React, { useState, useEffect } from "react";
import StepperHorizontal from "./common/Stepper-horizontal.jsx";
import Step1MainInfo from "./Step1-Main-Info/Step1-Main-Info.jsx";
import Step2OfferContent from "./Step2-Offer-Content/Step2-Offer-Content.jsx";
import "./Creator.css";

export default function Creator() {
  const [updateState, setUpdateState] = useState(0);
  const [searchedPosition, setSearchedPosition] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [salaryType, setSalaryType] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [salaryTime, setSalaryTime] = useState("");
  const [salaryContract, setSalaryContract] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);
  const [showQualificationForm, setShowQualificationForm] = useState(false);
  const [qualificationName, setQualificationName] = useState("");
  const [qualificationCharacteristic, setQualificationCharacteristic] = useState("");
  const [qualificationEffects, setQualificationEffects] = useState([]);
  const [coppiedQualificationEffects, setCoppiedQualificationEffects] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [educationLevel, setEducationLevel] = useState("");

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
      "bieżące usuwanie awarii i usterek",
    ]);
  };

  //QUALIFICATION INFORMATION
  const onSetQualificationInfo = () => {
    setShowQualificationForm(true);
    setQualificationName("Elektromechanik pojazdów samochodowych");
    setQualificationCharacteristic(
      "Absolwent szkoły prowadzącej kształcenie w zawodzie elektromechanik pojazdów samochodowych powinien być przygotowany do wykonywania zadań zawodowych w zakresie kwalifikacji MOT.02. Obsługa, diagnozowanie oraz naprawa mechatronicznych systemów pojazdów samochodowych: 1) przeprowadzania obsługi instalacji i konserwacji mechatronicznych systemów pojazdów samochodowych; 2) diagnozowania stanu technicznego mechatronicznych systemów pojazdów samochodowych; 3) wykonywania napraw elektrycznych i elektronicznych układów pojazdów samochodowych"
    );
    setQualificationEffects([
      {
        name: "Podstawy motoryzacji",
        effects: [
          "Rozróżnia zjawiska związane z elektrycznością",
          "Charakteryzuje zjawiska związane z elektromagnetyzmem",
          "Przeprowadza pomiary warsztatowe",
        ],
      },
      {
        name: "Przeprowadzanie obsługi i konserwacji mechatronicznych systemów pojazdów samochodowych",
        effects: [
          "Rozróżnia zjawiska związane z elektrycznością",
          "Charakteryzuje zjawiska związane z elektromagnetyzmem",
          "Przeprowadza pomiary warsztatowe",
        ],
      },
    ]);
  };
  const resetShowQualificationForm = () => {
    setShowQualificationForm(false);
  };

  const copyQualificationEffect = (e) => {
    setCoppiedQualificationEffects((oldArray) => [...oldArray, e]);
  };

  //REQUIREMENTS
  const onSetRequirements = () => {
    setRequirements([
      "wiedza z zakresu mechaniki/elektromechaniki",
      "wykształcenie zawodowe lub średnie techniczne",
      "dobra organizacja pracy własnej oraz umiejętność pracy w zespole",
    ]);
  };

  //EDUCATION AND EXPERIENCE
  const onSetEducationInfo = () => {
    setShowEducationForm(!showEducationForm);
  };
  const onSetEducationLevel = (educationLevel) => {
    setEducationLevel(educationLevel);
    console.log(educationLevel)
  };

  // STEPPER
  const handleMainStepperNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleMainStepperBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleMainStepperBackAndReset = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    resetShowQualificationForm();
    setUpdateState((prevState) => prevState + 1);
  };

  return (
    <>
      <StepperHorizontal activeStep={1} />
      {activeStep === 0 ? (
        <Step1MainInfo
          activeStep={activeStep}
          handleMainStepperBack={handleMainStepperBack}
          handleMainStepperNext={handleMainStepperNext}
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
          updateState={updateState}
          responsibilities={responsibilities}
          coppiedQualificationEffects={coppiedQualificationEffects}
          requirements={requirements}
        />
      ) : null}
      {activeStep === 1 ? (
        <Step2OfferContent
          activeStep={activeStep}
          handleMainStepperBack={handleMainStepperBack}
          handleMainStepperNext={handleMainStepperNext}
          handleMainStepperBackAndReset={handleMainStepperBackAndReset}
          searchedPosition={searchedPosition}
          salaryType={salaryType}
          salaryFrom={salaryFrom}
          salaryTo={salaryTo}
          salaryTime={salaryTime}
          salaryContract={salaryContract}
          aboutCompany={aboutCompany}
          onSetResponsibilities={onSetResponsibilities}
          responsibilities={responsibilities}
          onSetQualificationInfo={onSetQualificationInfo}
          setShowQualificationForm={setShowQualificationForm}
          showQualificationForm={showQualificationForm}
          qualificationName={qualificationName}
          qualificationCharacteristic={qualificationCharacteristic}
          qualificationEffects={qualificationEffects}
          copyQualificationEffect={copyQualificationEffect}
          coppiedQualificationEffects={coppiedQualificationEffects}
          onSetEducationInfo={onSetEducationInfo}
          showEducationForm={showEducationForm}
          setShowEducationForm={setShowEducationForm}
          onSetRequirements={onSetRequirements}
          requirements={requirements}
          updateState={updateState}
          educationLevel={educationLevel}
          onSetEducationLevel={onSetEducationLevel}
        />
      ) : null}
    </>
  );
}

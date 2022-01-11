import React, { useState, useEffect } from "react";
import StepperHorizontal from "./common/Stepper-horizontal.jsx";
import Step1MainInfo from "./Step1-Main-Info/Step1-Main-Info.jsx";
import Step2OfferContent from "./Step2-Offer-Content/Step2-Offer-Content.jsx";
import Step3DataProcessing from "./Step3-Data-Processing/Step3-Data-Processing.jsx";
import Step4Summary from "./Step4-Summary/Step4-Summary.jsx";
import "./Creator.css";

export default function Creator() {
  const [updateState, setUpdateState] = useState(0);
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
  const [showResponsibilitiesButton, setShowResponsibilitiesButton] =
    useState(true);
  const [showQualificationForm, setShowQualificationForm] = useState(false);
  const [qualificationName, setQualificationName] = useState("");
  const [qualificationCharacteristic, setQualificationCharacteristic] =
    useState("");
  const [qualificationEffects, setQualificationEffects] = useState([]);
  const [coppiedQualificationEffects, setCoppiedQualificationEffects] =
    useState([]);
  const [coppiedSelectedText, setCoppiedSelectedText] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [showRequirementsButton, setShowRequirementsButton] = useState(true);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [educationLevel, setEducationLevel] = useState([]);
  const [studiesName, setStudiesName] = useState([]);
  const [studiesStage, setStudiesStage] = useState([]);
  const [certificateName, setCertificateName] = useState([]);
  const [certificateStage, setCertificateStage] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [showBenefitsButton, setShowBenefitsButton] = useState(true);
  const [RODO, setRODO] = useState("");
  //VERTICAL STEPPER
  const [activeVerticalStep, setActiveVerticalStep] = useState(0);

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
    setShowResponsibilitiesButton(false);
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

  const getSelectedText = () => {
    if (window.getSelection) {
      setCoppiedSelectedText((oldArray) => [
        ...oldArray,
        window.getSelection().toString(),
      ]);
    } else if (document.selection) {
      console.log(document.selection.createRange().text);
    }
  };

  //REQUIREMENTS
  const onSetRequirements = () => {
    setRequirements([
      "wiedza z zakresu mechaniki/elektromechaniki",
      "wykształcenie zawodowe lub średnie techniczne",
      "dobra organizacja pracy własnej oraz umiejętność pracy w zespole",
    ]);
    setShowRequirementsButton(false);
  };

  //EDUCATION AND EXPERIENCE
  const onSetEducationInfo = () => {
    setShowEducationForm(!showEducationForm);
  };
  const onSetEducationLevel = (educationLevel) => {
    setEducationLevel(educationLevel);
  };
  const onSetStudiesName = (studiesName) => {
    setStudiesName(studiesName);
  };
  const onSetStudiesStage = (studiesStage) => {
    setStudiesStage(studiesStage);
  };
  const onSetCertificateName = (certificateName) => {
    setCertificateName(certificateName);
  };
  const onSetCertificateStage = (certificateStage) => {
    setCertificateStage(certificateStage);
  };

  //BENEFITS
  const onSetBenefits = () => {
    setBenefits(["bla", "bla"]);
    setShowBenefitsButton(false);
  };

  //DATA PROCESSING
  const onSetRODO = (value) => {
    setRODO(value);
  };

  // MAIN STEPPER
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
    resetShowQualificationForm();
    setUpdateState((prevState) => prevState + 1);
    setActiveVerticalStep(2);
  };
  const handleMainStepperNextAndReset = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setShowEducationForm(false);
  };

  // VERTICAL STEPPER
  const handleVerticalStepperNext = () => {
    setActiveVerticalStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleVerticalStepperBack = () => {
    setActiveVerticalStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <StepperHorizontal activeStep={activeStep} />
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

          handleVerticalStepperNext={handleVerticalStepperNext}
          handleVerticalStepperBack={handleVerticalStepperBack}
          activeVerticalStep={activeVerticalStep}

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
          showResponsibilitiesButton={showResponsibilitiesButton}
          onSetQualificationInfo={onSetQualificationInfo}
          setShowQualificationForm={setShowQualificationForm}
          showQualificationForm={showQualificationForm}
          qualificationName={qualificationName}
          qualificationCharacteristic={qualificationCharacteristic}
          qualificationEffects={qualificationEffects}
          copyQualificationEffect={copyQualificationEffect}
          coppiedQualificationEffects={coppiedQualificationEffects}
          getSelectedText={getSelectedText}
          coppiedSelectedText={coppiedSelectedText}
          onSetEducationInfo={onSetEducationInfo}
          showEducationForm={showEducationForm}
          setShowEducationForm={setShowEducationForm}
          onSetRequirements={onSetRequirements}
          requirements={requirements}
          showRequirementsButton={showRequirementsButton}
          updateState={updateState}
          educationLevel={educationLevel}
          onSetEducationLevel={onSetEducationLevel}
          studiesName={studiesName}
          onSetStudiesName={onSetStudiesName}
          studiesStage={studiesStage}
          onSetStudiesStage={onSetStudiesStage}
          certificateName={certificateName}
          onSetCertificateName={onSetCertificateName}
          certificateStage={certificateStage}
          onSetCertificateStage={onSetCertificateStage}
          handleMainStepperNextAndReset={handleMainStepperNextAndReset}
          onSetBenefits={onSetBenefits}
          benefits={benefits}
          showBenefitsButton={showBenefitsButton}

          handleVerticalStepperNext={handleVerticalStepperNext}
          handleVerticalStepperBack={handleVerticalStepperBack}
          activeVerticalStep={activeVerticalStep}
        />
      ) : null}
      {activeStep === 2 ? (
        <Step3DataProcessing
          activeStep={activeStep}
          handleMainStepperBack={handleMainStepperBack}
          handleMainStepperNext={handleMainStepperNext}
          searchedPosition={searchedPosition}
          salaryTo={salaryTo}
          salaryFrom={salaryFrom}
          salaryTime={salaryTime}
          salaryType={salaryType}
          salaryContract={salaryContract}
          aboutCompany={aboutCompany}
          responsibilities={responsibilities}
          coppiedQualificationEffects={coppiedQualificationEffects}
          coppiedSelectedText={coppiedSelectedText}
          requirements={requirements}
          updateState={updateState}
          educationLevel={educationLevel}
          studiesName={studiesName}
          certificateName ={certificateName}
          studiesStage={studiesStage}
          certificateStage={certificateStage}
          benefits={benefits}
          onSetRODO={onSetRODO}
          RODO={RODO}
        />
      ) : null}

      {activeStep === 3 ? (
        <Step4Summary
          activeStep={activeStep}
          handleMainStepperBack={handleMainStepperBack}
          handleMainStepperNext={handleMainStepperNext}
          searchedPosition={searchedPosition}
          salaryTo={salaryTo}
          salaryFrom={salaryFrom}
          salaryTime={salaryTime}
          salaryType={salaryType}
          salaryContract={salaryContract}
          aboutCompany={aboutCompany}
          responsibilities={responsibilities}
          coppiedQualificationEffects={coppiedQualificationEffects}
          coppiedSelectedText={coppiedSelectedText}
          requirements={requirements}
          updateState={updateState}
          educationLevel={educationLevel}
          studiesName={studiesName}
          studiesStage={studiesStage}
          onSetRODO={onSetRODO}
          RODO={RODO}
        />
      ) : null}
    </>
  );
}

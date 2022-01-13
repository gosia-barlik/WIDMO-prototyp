import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import StepperVertical from "./Stepper-vertical.jsx";
import JobOffer from "../common/Job-offer.jsx";
import AddResponsibilitiesButtons from "./form/Add-Responsibilities-Buttons.jsx";
import AddRequirementsButtons from "./form/Add- Requirements-Buttons.jsx";
import AddBenefitsButtons from "./form/Add-Benefits-Buttons.jsx";
import MainActionButtons from "../common/Main-Action-Buttons.jsx";
import QualificationInformation from "./form/Qualification-Information.jsx";
import EducationExperience from "./form/Education-Experience-Form.jsx/Education-Experience.jsx";
import "./Step2-Offer-Content.css";

export default function Step2OfferContent(props) {
  const [activeStep, setActiveStep] = useState(0);

  const resetShowQualificationForm = () => {
    props.setShowQualificationForm(false);
  };

  const resetShowEducationForm = () => {
    props.setShowEducationForm(false);
  };

  const handleNextAndReset = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    resetShowQualificationForm();
    resetShowEducationForm();
  };
  const handleBackAndReset = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    resetShowQualificationForm();
    resetShowEducationForm();
  };
  const handleReset = () => {
    resetShowQualificationForm();
  };

  return (
    <Grid container spacing={4} className='step-2-container'>
      <StepperVertical activeStep={props.activeVerticalStep} />
      <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Obszar roboczy
        </Typography>
        <Paper className='form-container'>
          {props.activeVerticalStep === 0 && props.showQualificationForm === false ? (
            <>
              <AddResponsibilitiesButtons
                onSetResponsibilities={props.onSetResponsibilities}
                onSetQualificationInfo={props.onSetQualificationInfo}
                showResponsibilitiesButton={props.showResponsibilitiesButton}
              />
              <MainActionButtons
                handleBack={props.handleMainStepperBackAndReset}
                handleNext={props.handleVerticalStepperNext}
              />
            </>
          ) : null}
          {props.activeVerticalStep === 0 && props.showQualificationForm === true ? (
            <>
              <QualificationInformation
                qualificationName={props.qualificationName}
                qualificationCharacteristic={props.qualificationCharacteristic}
                qualificationEffects={props.qualificationEffects}
                copyQualificationEffect={props.copyQualificationEffect}
                getSelectedText={props.getSelectedText}
              />
              <MainActionButtons
                handleBack={handleReset}
                handleNext={handleNextAndReset}
              />
            </>
          ) : null}

          {props.activeVerticalStep === 1 && props.showEducationForm === false ? (
            <>
              <AddRequirementsButtons
                onSetRequirements={props.onSetRequirements}
                onSetEducationInfo={props.onSetEducationInfo}
                showRequirementsButton={props.showRequirementsButton}
              />
              <MainActionButtons
                handleBack={props.handleVerticalStepperBack}
                handleNext={props.handleVerticalStepperNext}
              />
            </>
          ) : null}

          {props.showEducationForm ? (
            <>
              <EducationExperience
                onSetEducationLevel={props.onSetEducationLevel}
                onSetStudiesName={props.onSetStudiesName}
                onSetStudiesStage={props.onSetStudiesStage}
                onSetCertificateName={props.onSetCertificateName}
                onSetCertificateStage={props.onSetCertificateStage}
              />
              <MainActionButtons
                handleBack={handleBackAndReset}
                handleNext={handleNextAndReset}
              />
            </>
          ) : null}

          {props.activeVerticalStep === 2 ? (
            <>
              <AddBenefitsButtons
              onSetBenefits={props.onSetBenefits}
              showBenefitsButton={props.showBenefitsButton}
              />
              <MainActionButtons
                handleBack={props.handleVerticalStepperBack}
                handleNext={props.handleMainStepperNextAndReset}
              />
            </>
          ) : null}


        </Paper>
      </Grid>
      <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Twoje ogłoszenie
        </Typography>
        <Paper className='job-offer-container'>
          <JobOffer
            activeStep={props.activeStep}
            searchedPosition={props.searchedPosition}
            salaryTo={props.salaryTo}
            salaryFrom={props.salaryFrom}
            salaryTime={props.salaryTime}
            salaryType={props.salaryType}
            salaryContract={props.salaryContract}
            aboutCompany={props.aboutCompany}
            responsibilities={props.responsibilities}
            coppiedQualificationEffects={props.coppiedQualificationEffects}
            coppiedSelectedText={props.coppiedSelectedText}
            requirements={props.requirements}
            updateState={props.updateState}
            educationLevel={props.educationLevel}
            studiesName={props.studiesName}
            studiesStage={props.studiesStage}
            certificateName={props.certificateName}
            certificateStage={props.certificateStage}
            benefits={props.benefits}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

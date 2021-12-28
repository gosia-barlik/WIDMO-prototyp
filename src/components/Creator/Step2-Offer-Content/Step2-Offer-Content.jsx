import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import StepperVertical from "./Stepper-vertical.jsx";
import JobOffer from "../common/Job-offer.jsx";
import AddResponsibilitiesButtons from "./form/Add-Responsibilities-Buttons.jsx";
import AddRequirementsButtons from "./form/Add- Requirements-Buttons.jsx";
import MainActionButtons from "../common/Main-Action-Buttons.jsx";
import QualificationInformation from "./form/Qualification-Information.jsx";
import "./Step2-Offer-Content.css";

export default function Step2OfferContent(props) {
  const [activeStep, setActiveStep] = useState(0);

  // STEPPER
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container spacing={4} className='step-2-container'>
      <StepperVertical activeStep={activeStep} />
      <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Obszar roboczy
        </Typography>
        <Paper className='form-container'>
          {activeStep === 0 && props.qualificationName.length < 1 ? (
            <>
              <AddResponsibilitiesButtons
                onSetResponsibilities={props.onSetResponsibilities}
                onSetQualificationInfo={props.onSetQualificationInfo}
              />
              <MainActionButtons
                handleBack={props.handleMainStepperBack}
                handleNext={handleNext}
              />
            </>
          ) : null}
          {activeStep === 0 && props.qualificationName ? (
            <>
              <QualificationInformation
                qualificationName={props.qualificationName}
                qualificationCharacteristic={props.qualificationCharacteristic}
                qualificationEffects={props.qualificationEffects}
                copyQualificationEffect={props.copyQualificationEffect}
              />
              <MainActionButtons
                handleBack={props.handleMainStepperBack}
                handleNext={handleNext}
              />
            </>
          ) : null}

          {activeStep === 1 ? (
            <>
              <AddRequirementsButtons
                onSetRequirements={props.onSetRequirements}
                onSetEducationInfo={props.onSetEducationInfo}
              />
              <MainActionButtons
                handleBack={handleBack}
                handleNext={handleNext}
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
            requirements={props.requirements}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

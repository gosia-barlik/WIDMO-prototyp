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
import { useDispatch, useSelector } from "react-redux";
import { setShowEducationForm, setShowQualificationForm } from "../../../store/actions/stepTwoActions";

export default function Step2OfferContent(props) {
  const dispatch = useDispatch();
  const { showQualificationForm, showEducationForm } = useSelector(
    (state) => state.stepTwoReducer
  );

  const [activeStep, setActiveStep] = useState(0);

  const resetShowQualificationForm = () => {
    dispatch(setShowQualificationForm(false));
  };

  const resetShowEducationForm = () => {
    dispatch(setShowEducationForm(false));
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
        <Paper className='form-container-box'>
          {props.activeVerticalStep === 0 && showQualificationForm === false && (
            <>
              <AddResponsibilitiesButtons />
              <MainActionButtons
                handleBack={props.handleMainStepperBackAndReset}
                handleNext={props.handleVerticalStepperNext}
              />
            </>
          )}
          {props.activeVerticalStep === 0 && showQualificationForm === true && (
            <>
              <QualificationInformation />
              <MainActionButtons
                 handleBack={props.handleVerticalStepperBack}
                 handleNext={props.handleVerticalStepperNext}
              />
            </>
          )}

          {props.activeVerticalStep === 1 && showEducationForm === false && (
            <>
              <AddRequirementsButtons/>
              <MainActionButtons
                handleBack={props.handleVerticalStepperBack}
                handleNext={props.handleVerticalStepperNext}
              />
            </>
          )}

          {showEducationForm &&
            <>
              <EducationExperience />
              <MainActionButtons
                handleBack={handleBackAndReset}
                handleNext={handleNextAndReset}
              />
            </>
          }

          {props.activeVerticalStep === 2 && 
            <>
              <AddBenefitsButtons />
              <MainActionButtons
                handleBack={props.handleVerticalStepperBack}
                handleNext={props.handleMainStepperNextAndReset}
              />
            </>
          }
        </Paper>
      </Grid>
      <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Twoje ogłoszenie
        </Typography>
        <Paper className='job-offer-container-box'>
          <JobOffer
            activeStep={props.activeStep}
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

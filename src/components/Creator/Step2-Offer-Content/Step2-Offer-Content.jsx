import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import JobOffer from "../common/job-offer/Job-offer";
import ResponsibilitiesSection from "./form/Responsibilities-Section.jsx";
import RequirementsSection from "./form/Requirements-Section.jsx";
import BenefitsSection from "./form/Benefits-Section.jsx";
import MainActionButtons from "../common/Main-Action-Buttons.jsx";
import EducationExperience from "./form/Education-Experience-Form.jsx/Education-Experience.jsx";
import "./Step2-Offer-Content.css";
import { useDispatch, useSelector } from "react-redux";
// import {
//   setShowEducationForm,
//   setShowQualificationForm,
// } from "../../../store/actions/stepTwoActions";

export default function Step2OfferContent(props) {
  // const dispatch = useDispatch();
  const { showEducationForm } = useSelector(
    (state) => state.stepTwoReducer
  );
  // const [activeStep, setActiveStep] = useState(0);

  // const resetShowQualificationForm = () =>
  //   dispatch(setShowQualificationForm(false));

  // const resetShowEducationForm = () => dispatch(setShowEducationForm(false));

  // const handleNextAndReset = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   resetShowQualificationForm();
  //   resetShowEducationForm();
  // };
  // const handleBackAndReset = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //   resetShowQualificationForm();
  //   resetShowEducationForm();
  // };

  // const handleReset = () => resetShowQualificationForm();

  return (
    <Grid container className='step-2-container'>

      <Grid
        item
        xs={4}
        className='form-container'>
        <Typography
          variant='body2'
          style={{ color: "#00000099" }}
          gutterBottom
          component='div'>
          Obszar roboczy
        </Typography>
        <Paper className='form-container-box'>
          
              <ResponsibilitiesSection />
         
              <RequirementsSection />
          
              <BenefitsSection />
              <MainActionButtons
                handleBack={props.handleMainStepperBack}
                handleNext={props.handleMainStepperNext}
              />
        </Paper>
      </Grid>

      <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
        <Typography
          variant='body2'
          style={{ color: "#00000099" }}
          gutterBottom
          component='div'>
          Podgląd ogłoszenia
        </Typography>
        <Paper className='job-offer-container'>
          <JobOffer
            activeStep={props.activeStep}
            updateState={props.updateState}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

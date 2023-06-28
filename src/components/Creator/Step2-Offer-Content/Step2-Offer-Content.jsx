import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ResponsibilitiesSection from "./form/Responsibilities-Section.jsx";
import RequirementsSection from "./form/Requirements-Section.jsx";
import BenefitsSection from "./form/Benefits-Section.jsx";
import ActionButtons from "./form/Action-Buttons.jsx";
import "./Step2-Offer-Content.css";
import { useDispatch, useSelector } from "react-redux";
import { horizontalStepForward, horizontalStepBack } from "../../../store/actions/stepperActions.js";

export default function Step2OfferContent(props) {
  const dispatch = useDispatch();
  const { showEducationForm } = useSelector((state) => state.stepTwoReducer);
  const handleNext = () => {dispatch(horizontalStepForward())}
  const handleBack = () => {dispatch(horizontalStepBack())}

  return (
    
      <Grid item xs={6} className='form-container'>
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
          <ActionButtons
            handleBack={handleBack}
            handleNext={handleNext}
          />
        </Paper>
      </Grid>
    
  );
}

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
import { JobOfferContentAPI } from "../../../api/jobOfferContentApi.js";
import { setIsEdit, setShowResults } from "../../../store/actions/stepOneActions.js";

export default function Step2OfferContent(props) {
  const dispatch = useDispatch();
  const { showEducationForm } = useSelector((state) => state.stepTwoReducer);
  const handleNext = () => {dispatch(horizontalStepForward())}
  const handleBack = () => {dispatch(horizontalStepBack())}

  const sendMainInfo = async () => {
    // if(jobOffer.jobOfferId)
    //   await JobOfferContentAPI.update(jobOfferContent)
    // else {
    //   const jobOfferId = await JobOfferContentAPI.create(jobOfferContent);
    //   dispatch(setJobOfferId(jobOfferId));
    // };
    handleNext();
  };
  
  const getMainInfo = async (jobOfferId) => {
    if(props.isEdit){
      // const jobOfferResponse = await JobOfferContentAPI.get(jobOfferId);
      // dispatch(setJobOffer(jobOfferResponse));
      // dispatch(setIsEdit(true));
      // dispatch(setShowResults(true));
    }
  };


  return (
    
      <Grid item xs={4} className='form-container'>
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
            onSubmit = {sendMainInfo}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        </Paper>
      </Grid>
    
  );
}

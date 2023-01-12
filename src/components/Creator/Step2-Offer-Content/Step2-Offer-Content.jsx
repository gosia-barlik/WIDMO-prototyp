import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import JobOffer from "../common/job-offer/Job-offer";
import ResponsibilitiesSection from "./form/Responsibilities-Section.jsx";
import RequirementsSection from "./form/Requirements-Section.jsx";
import BenefitsSection from "./form/Benefits-Section.jsx";
import MainActionButtons from "../common/Main-Action-Buttons.jsx";
import Switch from "@material-ui/core/Switch";
import Grow from "@material-ui/core/Grow";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import EducationExperience from "./form/Education-Experience-Form.jsx/Education-Experience.jsx";
import "./Step2-Offer-Content.css";
import { useDispatch, useSelector } from "react-redux";
import { setShowJobOffer } from "../../../store/actions/stepTwoActions";

export default function Step2OfferContent(props) {
  // const dispatch = useDispatch();
  const { showEducationForm, showJobOffer } = useSelector((state) => state.stepTwoReducer);
  const dispatch = useDispatch();

  const handleShowJobOffer = () => {
    showJobOffer ? dispatch (setShowJobOffer(false)) : dispatch (setShowJobOffer(true));
  };

  return (
    <Grid container className='step-1-container'>
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
          <MainActionButtons
            handleBack={props.handleMainStepperBack}
            handleNext={props.handleMainStepperNext}
          />
        </Paper>
      </Grid>

      <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
        <FormControlLabel
          control={<Switch checked={showJobOffer} onChange={handleShowJobOffer} />}
          label='Podgląd ogłoszenia'
        />
        <Grow in={showJobOffer}>
          <Paper className='job-offer-container'>
            <JobOffer
              activeStep={props.activeStep}
              updateState={props.updateState}
            />
          </Paper>
        </Grow>
      </Grid>
    </Grid>
  );
}

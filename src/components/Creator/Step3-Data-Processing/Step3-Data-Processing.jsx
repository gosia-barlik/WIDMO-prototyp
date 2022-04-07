import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import JobOffer from "../common/Job-offer.jsx";
import MainActionButtons from "../common/Main-Action-Buttons.jsx";
import DataProcessing from "./form/DataProcessing.jsx";
import "./Step3-Data-Processing.css";

export default function Step3DataProcessing(props) {
  return (
    <Grid container spacing={4} className='step-3-container'>
      <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Obszar roboczy
        </Typography>
        <Paper className='form-container-box'>
          <>
            <DataProcessing onSetRODO={props.onSetRODO} />
            <MainActionButtons
              handleBack={props.handleMainStepperBack}
              handleNext={props.handleMainStepperNext}
            />
          </>
        </Paper>
      </Grid>

      <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Twoje ogłoszenie
        </Typography>
        <Paper className='job-offer-container-box'>
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
            copiedQualificationEffects={props.copiedQualificationEffects}
            copiedSelectedText={props.copiedSelectedText}
            requirements={props.requirements}
            updateState={props.updateState}
            educationLevel={props.educationLevel}
            studiesName={props.studiesName}
            studiesStage={props.studiesStage}
            certificateName={props.certificateName}
            certificateStage={props.certificateStage}
            benefits={props.benefits}
            RODO={props.RODO}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

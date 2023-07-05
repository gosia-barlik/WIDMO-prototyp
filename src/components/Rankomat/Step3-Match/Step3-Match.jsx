import { React, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CvList from "./Step3-Analysis-Box/Step3-Cv-List";
import MainActionButtons from "../common/MainActionButtons";
import Step3Filters from "./Step3-Filters/Step3-Filters";
import AnalysisSidebar from "./Step3-Analysis-Box/Step3-Analysis-Sidebar";
import AnalysisTopbar from "./Step3-Analysis-Box/Step3-Analysis-Topbar";
import "./Step3-Match.css";

export default function Step3Match(props) {
  return (
    <>
      <AnalysisSidebar />
      <Grid
        container
        spacing={4}
        className='rankomat'
        style={{ width: "auto" }}>
        <Grid item xs={5} className='CV-list-container'>
          <Paper className='form-container-box'>
            <AnalysisTopbar />
            <CvList />
          </Paper>

          <MainActionButtons
            handleBack={props.handleStepperBack}
            handleNext={props.handleStepperNext}
          />
        </Grid>

        <Grid item xs={3} className='filters-container'>
          <Paper>
            <Step3Filters />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

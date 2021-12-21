import React from "react";
import StepperVertical from "../common/Stepper-vertical.jsx";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import "./Step1-Main-Info.css";

export default function Step1MainInfo() {
  return (
    <Grid container spacing={4}>
      <StepperVertical />
      <Grid item xs={4}>
        <Paper className='form-container' style={{ marginTop: "50px" }}>
          m
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper style={{ marginTop: "50px", marginRight: "150px" }}>m</Paper>
      </Grid>
    </Grid>
  );
}

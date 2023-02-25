import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ActionButtons from "./form/Action-Buttons.jsx";
import DataProcessing from "./form/Data-Processing.jsx";
import OrganizationalData from "./form/Organizational-Data.jsx";
import "./Step3-Data-Processing.css";
import {  useSelector } from "react-redux";

export default function Step3DataProcessing(props) {

  const { rodo } = useSelector((state) => state.stepThreeReducer);

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
          <DataProcessing />
          <OrganizationalData />
          <ActionButtons
            handleBack={props.handleMainStepperBack}
            handleNext={props.handleMainStepperNext}
          />
        </Paper>
      </Grid>
  );
}

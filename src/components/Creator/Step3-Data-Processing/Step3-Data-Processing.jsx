import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ActionButtons from "./form/Action-Buttons.jsx";
import DataProcessing from "./form/Data-Processing.jsx";
import OrganizationalData from "./form/Organizational-Data.jsx";
import "./Step3-Data-Processing.css";
import { useDispatch, useSelector } from "react-redux";
import { horizontalStepForward, horizontalStepBack } from "../../../store/actions/stepperActions.js";

export default function Step3DataProcessing(props) {

  const { rodo } = useSelector((state) => state.stepThreeReducer);
  const dispatch = useDispatch();
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
          <DataProcessing />
          <OrganizationalData />
          <ActionButtons
            handleBack={handleBack}
            handleNext={handleNext}
          />
        </Paper>
      </Grid>
  );
}

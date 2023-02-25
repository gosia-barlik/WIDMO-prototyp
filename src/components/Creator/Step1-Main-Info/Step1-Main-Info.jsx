import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SearchBar from "./form/Job-Position-Search-Bar";
import SearchResults from "./form/Job-Position-Search-Results";
import ActionButtons from "./form/Action-Buttons.jsx";
import AdditionalInformation from "./form/Additional-Information";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./Step1-Main-Info.css";
import AboutCompany from "./form/About.jsx";
import {useDispatch, useSelector } from "react-redux";
import { horizontalStepForward } from "../../../store/actions/stepperActions.js";

export default function Step1MainInfo() {
  const { showResults } = useSelector((state) => state.stepOneReducer);
  const dispatch = useDispatch();

  const handleNext = () => {dispatch(horizontalStepForward())}

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
        <SearchBar />

        {showResults && (
          <>
            <AboutCompany />
            <AdditionalInformation />
            <ActionButtons handleNext={handleNext} />
          </>
        )}
      </Paper>
    </Grid>
  );
}

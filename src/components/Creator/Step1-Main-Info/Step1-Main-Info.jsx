import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SearchBar from "./form/Job-Position-Search-Bar";
import SearchResults from "./form/Job-Position-Search-Results";
import MainActionButtons from "../common/Main-Action-Buttons.jsx";
import AdditionalInformation from "./form/Additional-Information";
import "./Step1-Main-Info.css";
import AboutCompany from "./form/About.jsx";
import { useSelector } from "react-redux";

export default function Step1MainInfo(props) {
  const { showResults } = useSelector((state) => state.stepOneReducer);

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
            <MainActionButtons handleNext={props.handleMainStepperNext} />
          </>
        )}
      </Paper>
    </Grid>
  );
}

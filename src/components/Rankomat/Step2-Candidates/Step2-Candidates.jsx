import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MainActionButtons from "../common/MainActionButtons";
import "./Step2-Candidates.css";

const Input = styled("input")({
  display: "none",
});

export default function Step2Candidates(props) {
  return (
    <Grid container spacing={4} className='rankomat-step-1-container'>
      <Grid
        item
        xs={4}
        style={{ marginTop: "50px", textAlign: "left", marginLeft: "15%" }}>
        <Typography variant='body2' gutterBottom component='div'>
        Wprowadź życiorysy kandydatów, które chciałbyś dopasować do ogłoszenia o pracę
        </Typography>
    
        <MainActionButtons
          handleBack={props.handleStepperBack}
          handleNext={props.handleStepperNext}
        />
      </Grid>
    </Grid>
  );
}
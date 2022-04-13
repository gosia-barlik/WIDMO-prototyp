import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import RichTextEditor from "./RichTextEditor";
import MainActionButtons from "../common/Main-Action-Buttons.jsx";
import "./Step4-Summary.css";

export default function Step4Summary(props) {
  return (
    <Grid container spacing={4} className='step-4-container'>
      <Typography variant='subtitle2' gutterBottom component='div'></Typography>
      <Paper className='form-container-box'>
        <>
          <RichTextEditor/>
          <Stack
            spacing={2}
            direction='row'
            style={{ justifyContent: "center", paddingTop: "5px" }}>
            <Button className='button-contained' variant='contained'>
              Pobierz(Word)
            </Button>
          </Stack>
          <MainActionButtons handleBack={props.handleMainStepperBack} handleNext={props.handleMainStepperNext} />
        </>
      </Paper>
    </Grid>
  );
}

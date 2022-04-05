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
      <Paper className='form-container'>
        <>
          <RichTextEditor
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
            educationLevel={props.educationLevel}
            studiesName={props.studiesName}
            studiesStage={props.studiesStage}
            RODO={props.RODO}
          />
          <Stack
            spacing={2}
            direction='row'
            style={{ justifyContent: "center", paddingTop: "5px" }}>
            <Button className='button-contained' variant='contained'>
              Pobierz(Word)
            </Button>
          </Stack>
          <MainActionButtons
                handleBack= {props.handleMainStepperBack}
              />
        </>
      </Paper>
    </Grid>
  );
}

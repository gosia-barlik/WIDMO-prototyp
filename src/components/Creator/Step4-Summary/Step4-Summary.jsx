import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import RichTextEditor from "./RichTextEditor"
import "./Step4-Summary.css";

export default function Step4Summary(props) {
  return (
    <Grid container spacing={4} className='step-4-container'>
      <Typography variant='subtitle2' gutterBottom component='div'></Typography>
      <Paper className='form-container'>
       
        <>
        <RichTextEditor searchedPosition={props.searchedPosition}/>
          <div
            className='job-offer-summary'
            contentEditable='true'
            style={{ fontSize: "18px" }}>
            <h6>
              Stanowisko:
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {props.searchedPosition}
              </span>
            </h6>
            <h6>
              Wynagrodzenie:
              <span>
                &nbsp;&nbsp;&nbsp;{props.salaryFrom}&nbsp;-&nbsp;
                {props.salaryTo} &nbsp; {props.salaryType}&nbsp; /
                {props.salaryTime} &nbsp; {props.salaryContract}
              </span>
            </h6>
            <h6>
              Zakres obowiązków:
              <span>
                <ul>
                  {props.responsibilities.map((responsibility) => (
                    <li key={responsibility}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {responsibility} &nbsp;
                    </li>
                  ))}
                  {props.coppiedQualificationEffects.map((effect) => (
                    <li key={effect}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {effect} &nbsp;
                    </li>
                  ))}
                  {props.coppiedSelectedText.map((text) => (
                    <li key={text}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {text} &nbsp;
                    </li>
                  ))}
                </ul>
              </span>
            </h6>
            <h6>
              Wymagania:
              <span>
                <ul>
                  <li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wykształcenie&nbsp;
                    {props.educationLevel} &nbsp;{props.studiesName}&nbsp;
                    {props.studiesStage}{" "}
                  </li>
                  {props.requirements.map((requirement) => (
                    <li key={requirement}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {requirement} &nbsp;
                    </li>
                  ))}
                </ul>
              </span>
            </h6>
            <h6>
              O firmie:
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {props.aboutCompany}
              </span>
            </h6>
            <h6>
              Przetwarzanie <br></br>danych:
              <p>
              <p style={{ fontSize: "11px", width:"80%", paddingLeft:'10%', fontWeight:'400' }}>
                {props.RODO}
              </p>
              </p>
            </h6>
          </div>
          <Stack
            spacing={2}
            direction='row'
            style={{ justifyContent: "center", paddingTop: "5px" }}>
            <Button className='button-contained' variant='contained'>
              Pobierz(Word)
            </Button>
          </Stack>
        </>
      </Paper>
    </Grid>
  );
}

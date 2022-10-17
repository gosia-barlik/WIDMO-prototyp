import * as React from "react";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import "./Stepper-horizontal.css";
import { useSelector } from "react-redux";

export default function StepperHorizontal(props) {

  return (
    <Stack className='rankomat-stepper stepper-horizontal-container'>
      <Stepper
        className={"stepper-linear"}
        activeStep={props.activeStep}
       >
        {props.stepperLabels.map((label, index) => (
          <Step key={label.name}>
             <StepButton >
              {label.name}
              </StepButton>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
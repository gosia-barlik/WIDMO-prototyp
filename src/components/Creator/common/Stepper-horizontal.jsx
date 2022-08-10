import * as React from "react";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import "./Stepper-horizontal.css";
import { useSelector } from "react-redux";

export default function StepperHorizontal(props) {
  const { showResults } = useSelector((state) => state.stepOneReducer);
  return (
    <Stack className='stepper-horizontal-container'>
      <Stepper
        className={"stepper-" + (showResults ? "nonlinear" : "linear")}
        nonLinear={props.nonLinear}
        activeStep={props.activeStep}
        alternativeLabel>
        {props.mainStepperLabels.map((label, index) => (
          <Step key={label.name}>
            <StepButton onClick={() => props.handleStep(index)}>
              {label.name}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}

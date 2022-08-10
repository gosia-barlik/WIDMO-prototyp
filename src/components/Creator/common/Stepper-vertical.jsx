import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import "./Stepper-vertical.css";
import { useSelector } from "react-redux";


export default function StepperVertical(props) {
  const { showResults } = useSelector((state) => state.stepOneReducer);

  return (
    <Box sx={{ maxWidth: 400 }} className='stepper-vertical-container'>
      <Stepper
      className={"stepper-" + (showResults ? 'nonlinear' : 'linear')}
        activeStep={props.activeStep}
        nonLinear={props.nonLinear}
        orientation='vertical'>
        {props.verticalStepperLabels.map((label, index) => (
          <Step key={label.name}>
            <StepButton onClick={() => props.handleStep1VerticalStepper(index)}>
              {label.name}
            </StepButton>
            <StepContent>
              <Typography>{label.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {/* {props.activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={props.handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </Box>
  );
}

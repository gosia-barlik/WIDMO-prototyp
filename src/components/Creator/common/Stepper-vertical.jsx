import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepButton from '@mui/material/StepButton';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import './Stepper-vertical.css'

const steps = [
  {
    label: 'Stanowisko',
    description: `Aby przejść dalej musisz wpisać nazwę stanowiska, na które rekrutujesz.`,
  },
  {
    label: 'O firmie',
    description: `Pole opcjonalne.`,
  },
  {
    label: 'Dodatkowe informacje',
    description:
      'Pole opcjonalne.',
  },
];

export default function StepperVertical(props) {

  return (
    <Box sx={{ maxWidth: 400 }} className="stepper-vertical-container">
      <Stepper activeStep={props.activeStep} nonLinear orientation="vertical">
        {props.step1VerticalStepperLabels.map((label) => (
          <Step key={label.name}>
            <StepButton onClick={() => props.handleStep1VerticalStepper(label.index)}
            >
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
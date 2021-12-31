import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import './Stepper-vertical.css'

const steps = [
  {
    label: 'Zakres obowiązków',
    description: `Pole opcjonalne.`,
  },
  {
    label: 'Wymagania',
    description:
      'Pole opcjonalne.',
  },
  // {
  //   label: 'Benefity',
  //   description: `Pole opcjonalne.`,
  // },
];

export default function StepperVertical(props) {

  return (
    <Box sx={{ maxWidth: 400 }} className="stepper-vertical-container">
      <Stepper activeStep={props.activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              icon={' '}
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            
            </StepContent>
          </Step>
        ))}
      </Stepper>
 
    </Box>
  );
}
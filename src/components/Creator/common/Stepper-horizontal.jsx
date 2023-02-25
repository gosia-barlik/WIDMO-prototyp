import * as React from "react";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import "./Stepper-horizontal.css";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../../store/actions/stepperActions.js";

export default function StepperHorizontal(props) {
  const { showResults } = useSelector((state) => state.stepOneReducer);
  const { horizontalStepper } = useSelector((state) => state.stepperReducer);
  const dispatch = useDispatch();

  const mainStepperLabels = [
    { name: "Główne informacje" },
    { name: "Treść ogłoszenia" },
    { name: "Dodatkowe informacje" },
  ];

  const handleStep = (step) => {
    dispatch (setStep(step));
  };

  return (
    <Stack className='stepper-horizontal-container'>
      <Stepper
        className={"stepper-" + (showResults ? "nonlinear" : "linear")}
        nonLinear={props.nonLinear}
        activeStep={horizontalStepper}
        alternativeLabel>
        {mainStepperLabels.map((label, index) => (
          <Step key={label.name}>
            <StepButton onClick={() => handleStep(index)} style={{width:"100px"}}>
              {label.name}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}

import React from "react";
import StepperHorizontal from "./common/Stepper-horizontal.jsx";
import Step1MainInfo from "./Step1-Main-Info/Step1-Main-Info.jsx";
import "./Creator.css";

export default function Creator() {
  return (
    <>
      <StepperHorizontal />
      <Step1MainInfo />
    </>
  );
}

import React from "react";
import Paper from "@mui/material/Paper";
import Step1MainInfo from "./steps/Step1-Main-Info";
import Step2OfferContent from "./steps/Step2-Offer-Content";
import Step3DataProcessing from "./steps/Step3-Data-Processing";
import "./Job-Offer.css";

export default function JobOffer(props) {
  return (
    <Paper
      sx={{
        p: "16px 16px 0 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      }}>
      {props.activeStep === 0 && <Step1MainInfo />}

      {props.activeStep === 1 && <Step2OfferContent />}

      {props.activeStep === 2 && <Step3DataProcessing />}
    </Paper>
  );
}

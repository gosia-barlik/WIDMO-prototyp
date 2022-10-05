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
        p: "24px 24px 0 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      }}>
      <Step1MainInfo />

      <Step2OfferContent />

      <Step3DataProcessing />
    </Paper>
  );
}

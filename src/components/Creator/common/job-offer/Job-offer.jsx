import React from "react";
import Paper from "@mui/material/Paper";
import JobOfferMainInfo from "./steps/Job-Offer-Main-Info";
import JobOfferContent from "./steps/Job-Offer-Content";
import JobOfferData from "./steps/Job-Offer-Data";
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
      <JobOfferMainInfo />

      <JobOfferContent />

      <JobOfferData />
    </Paper>
  );
}

import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function JobOffer(props) {
  return (
    <Paper
      sx={{
        p: "10px ",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      }}>
      <Typography
        variant='subtitle2'
        gutterBottom
        component='div'
        style={{ color: "#784af4" }}>
        Główne informacje
      </Typography>
      <Typography variant='subtitle2' gutterBottom component='div' style={{}}>
        Stanowisko
      </Typography>
      <Typography variant='body2' gutterBottom component='div' style={{}}>
        {props.searchedPosition}
      </Typography>
      {props.salaryType || props.salaryFrom || props.salaryTo || props.salaryTime? (
        <>
          <Typography
            variant='subtitle2'
            gutterBottom
            component='div'
            style={{}}>
            Wynagrodzenie
          </Typography>
          <Typography variant='body2' gutterBottom component='div' style={{}}>
              {'od ' + props.salaryFrom} {'do ' + props.salaryTo} {'/' + props.salaryTime} {props.salaryType} {props.salaryContract}
          </Typography>
        </>
      ) : null}
       {props.aboutCompany? (
        <>
          <Typography
            variant='subtitle2'
            gutterBottom
            component='div'
            style={{}}>
            O firmie
          </Typography>
          <Typography variant='body2' gutterBottom component='div' style={{}}>
              {props.aboutCompany}
          </Typography>
        </>
      ) : null}
    </Paper>
  );
}

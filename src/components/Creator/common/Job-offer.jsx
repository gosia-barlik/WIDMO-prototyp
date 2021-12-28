import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import './Job-Offer.css'

export default function JobOffer(props) {
  return (
    <Paper
      sx={{
        p: "10px ",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      }}>
      {props.activeStep === 0 ? (
        <>
          <Typography
            variant='subtitle2'
            gutterBottom
            component='div'
            style={{ color: "#784af4" }}>
            Główne informacje
          </Typography>
          <Typography variant='subtitle2' gutterBottom component='div'>
            Stanowisko
          </Typography>
          <Typography variant='body2' gutterBottom component='div'>
            {props.searchedPosition}
          </Typography>
          {props.salaryType ||
          props.salaryFrom ||
          props.salaryTo ||
          props.salaryTime ? (
            <>
              <Typography variant='subtitle2' gutterBottom component='div'>
                Wynagrodzenie
              </Typography>
              <Typography variant='body2' gutterBottom component='div'>
                {"od " + props.salaryFrom} {"do " + props.salaryTo}{" "}
                {"/" + props.salaryTime} {props.salaryType}{" "}
                {props.salaryContract}
              </Typography>
            </>
          ) : null}
          {props.aboutCompany ? (
            <>
              <Typography variant='subtitle2' gutterBottom component='div'>
                O firmie
              </Typography>
              <Typography variant='body2' gutterBottom component='div'>
                {props.aboutCompany}
              </Typography>
            </>
          ) : null}
        </>
      ) : null}

      {props.activeStep === 1 ? (
        <>
          <Accordion className="styled-accordion" >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'>
              <Typography
                variant='subtitle2'
                gutterBottom
                component='div'
                >
                Główne informacje
              </Typography>
            </AccordionSummary>

            <AccordionDetails
            style={{flexDirection:'column'}}>
              <Typography
                variant='subtitle2'
                gutterBottom
                component='div'
                >
                Stanowisko
              </Typography>
              <Typography
                variant='body2'
                gutterBottom
                component='div'
                style={{}}>
                {props.searchedPosition}
              </Typography>
              {props.salaryType ||
              props.salaryFrom ||
              props.salaryTo ||
              props.salaryTime ? (
                <>
                  <Typography
                    variant='subtitle2'
                    gutterBottom
                    component='div'
                    style={{}}>
                    Wynagrodzenie
                  </Typography>
                  <Typography
                    variant='body2'
                    gutterBottom
                    component='div'
                    style={{}}>
                    {"od " + props.salaryFrom} {"do " + props.salaryTo}{" "}
                    {"/" + props.salaryTime} {props.salaryType}{" "}
                    {props.salaryContract}
                  </Typography>
                </>
              ) : null}
              {props.aboutCompany ? (
                <>
                  <Typography
                    variant='subtitle2'
                    gutterBottom
                    component='div'
                    style={{}}>
                    O firmie
                  </Typography>
                  <Typography
                    variant='body2'
                    gutterBottom
                    component='div'
                    style={{}}>
                    {props.aboutCompany}
                  </Typography>
                </>
              ) : null}
            </AccordionDetails>
          </Accordion>

          <Typography
            variant='subtitle2'
            gutterBottom
            component='div'
            style={{ color: "#784af4", marginTop:'25px'}}>
            Treść ogłoszenia
          </Typography>

          {props.responsibilities ? (
            <>
              <Typography variant='subtitle2' gutterBottom component='div'>
                Zakres obowiązków
              </Typography>
              {props.responsibilities.map((responsibility) => (
                <Typography
                  key={responsibility}
                  variant='body2'
                  gutterBottom
                  component='div'>
                  {responsibility}
                </Typography>
              ))}
            </>
          ) : null}
        </>
      ) : null}

      {/* {props.activeStep === 1 ? (
        <>
          
        </>
      ) : null} */}
    </Paper>
  );
}

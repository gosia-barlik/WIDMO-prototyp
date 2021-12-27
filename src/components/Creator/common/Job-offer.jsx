import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function JobOffer(props) {
  return (
    <Paper
      sx={{
        p: "10px ",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      }}>
      {/* {props.activeStep === 0 ? ( */}
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
        <Typography variant='body2' gutterBottom component='div' style={{}}>
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
              {"/" + props.salaryTime} {props.salaryType} {props.salaryContract}
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

        
        {props.activeStep === 1 ? (
          <>
            <Typography
              variant='subtitle2'
              gutterBottom
              component='div'
              style={{ color: "#784af4" }}>
              Treść ogłoszenia
            </Typography>
          </>
        ) : null}

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
      {/* ) : null} */}

      {/* {props.activeStep === 1 ? (
        <>
          <Accordion style={{ marginTop: "10px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'>
              <Typography
                variant='subtitle2'
                gutterBottom
                component='div'
                style={{ color: "#784af4" }}>
                Główne informacje
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant='subtitle2'
                gutterBottom
                component='div'
                style={{}}>
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
        </>
      ) : null} */}
    </Paper>
  );
}

import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Job-Offer.css";

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
            style={{ color: "#784af4", fontWeight: "800" }}>
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

          {props.updateState > 0 ? (
            <>
              <Accordion
                className='styled-accordion'
                style={{ marginTop: "20px" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'>
                  <Typography variant='subtitle2' gutterBottom component='div'>
                    Treść ogłoszenia
                  </Typography>
                </AccordionSummary>

                <AccordionDetails style={{ flexDirection: "column" }}>
                  {props.responsibilities ? (
                    <>
                      <Typography variant='subtitle2' component='div'>
                        Zakres obowiązków
                      </Typography>
                      {props.responsibilities.map((responsibility) => (
                        <Typography
                          key={responsibility}
                          variant='body2'
                          component='div'>
                          {responsibility}
                        </Typography>
                      ))}
                    </>
                  ) : null}

                  {props.coppiedQualificationEffects ? (
                    <>
                      {props.coppiedQualificationEffects.map((effect) => (
                        <Typography
                          key={effect}
                          variant='body2'
                          component='div'>
                          {effect}
                        </Typography>
                      ))}
                    </>
                  ) : null}

                  {props.requirements.length > 0 ? (
                    <>
                      <Typography
                        variant='subtitle2'
                        gutterBottom
                        component='div'>
                        Wymagania
                      </Typography>
                      {props.requirements.map((requirement) => (
                        <Typography
                          key={requirement}
                          variant='body2'
                          component='div'>
                          {requirement}
                        </Typography>
                      ))}
                    </>
                  ) : null}
                </AccordionDetails>
              </Accordion>
            </>
          ) : null}
        </>
      ) : null}

      {props.activeStep === 1 ? (
        <>
          <Accordion className='styled-accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'>
              <Typography variant='subtitle2' gutterBottom component='div'>
                Główne informacje
              </Typography>
            </AccordionSummary>

            <AccordionDetails style={{ flexDirection: "column" }}>
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
                  <Typography
                    variant='subtitle2'
                    gutterBottom
                    component='div'
                    style={{}}>
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
            </AccordionDetails>
          </Accordion>
          <Typography
            variant='subtitle2'
            gutterBottom
            component='div'
            style={{ color: "#784af4", marginTop: "10px", fontWeight: "800" }}>
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
          {props.coppiedQualificationEffects ? (
            <>
              {props.coppiedQualificationEffects.map((effect) => (
                <Typography key={effect} variant='body2' component='div'>
                  {effect}
                </Typography>
              ))}
            </>
          ) : null}
          {props.coppiedSelectedText ? (
            <>
              {props.coppiedSelectedText.map((text) => (
                <Typography key={text} variant='body2' component='div'>
                  {text}
                </Typography>
              ))}
            </>
          ) : null}

          {props.requirements.length > 0 ? (
            <>
              <Typography
                variant='subtitle2'
                gutterBottom
                component='div'
                style={{ marginTop: "6px" }}>
                Wymagania
              </Typography>
              {props.requirements.map((requirement) => (
                <Typography key={requirement} variant='body2' component='div'>
                  {requirement}
                </Typography>
              ))}
            </>
          ) : null}
          {props.educationLevel.length > 0 ||
          props.studiesName.length > 0 ||
          props.studiesStage.length > 0 ? (
            <>
              <Typography
                variant='body2'
                gutterBottom
                component='div'
                style={{ marginTop: "4px" }}>
                Wykształcenie
              </Typography>
              <Typography variant='body2'>
                {props.educationLevel.map((level) => (
                  <span key={level}>{level}&nbsp;</span>
                ))}
                {props.studiesName ? <span>na kierunku </span> : null}

                {props.studiesName.map((name) => (
                  <span key={name}>{name}&nbsp;</span>
                ))}
                {props.studiesStage.map((stage) => (
                  <span key={stage}>{stage}&nbsp;</span>
                ))}
                <br></br>
                {props.certificateName ? (
                  <span> Mile widziana certyfikacja </span>
                ) : null}
                {props.certificateName.map((name) => (
                  <span key={name}>{name}&nbsp;</span>
                ))}
                {props.certificateStage.map((stage) => (
                  <span key={stage}>{stage}&nbsp;</span>
                ))}
              </Typography>
            </>
          ) : null}
          
          {props.benefits.length > 0 ? (
            <>
              <Typography
                variant='subtitle2'
                gutterBottom
                component='div'
                style={{ marginTop: "6px" }}>
                Benefity
              </Typography>
              {props.benefits.map((benefit) => (
                <Typography key={benefit} variant='body2' component='div'>
                  {benefit}
                </Typography>
              ))}
            </>
          ) : null}
        </>
      ) : null}

      {props.activeStep === 2 ? (
        <>
          <Accordion className='styled-accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'>
              <Typography variant='subtitle2' gutterBottom component='div'>
                Główne informacje
              </Typography>
            </AccordionSummary>

            <AccordionDetails style={{ flexDirection: "column" }}>
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
                  <Typography
                    variant='subtitle2'
                    gutterBottom
                    component='div'
                    style={{}}>
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
            </AccordionDetails>
          </Accordion>
          <Typography
            variant='subtitle2'
            gutterBottom
            component='div'
            style={{ color: "#784af4", marginTop: "10px", fontWeight: "800" }}>
            Przetwarzanie danych
          </Typography>
          {props.RODO ? (
            <>
              <Typography variant='caption' gutterBottom component='div'>
                {props.RODO}
              </Typography>
            </>
          ) : null}
        </>
      ) : null}
    </Paper>
  );
}

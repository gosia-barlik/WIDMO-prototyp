import React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Step3Accordion(props) {
  const {
    rodo,
    applicationWay,
    applicationExpectation,
    applicationDate,
    contactInformation,
  } = useSelector((state) => state.stepThreeReducer);
  const dispatch = useDispatch();

  return (
    <Accordion className='styled-accordion'>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant='subtitle2' component='div'>
          Informacje Uzupełniające
        </Typography>
      </AccordionSummary>

      <AccordionDetails style={{ flexDirection: "column" }}>
        {rodo && (
          <>
            <Typography variant='subtitle2' component='div'>
              Przetwarzanie danych osobowych
            </Typography>
            <Typography variant='body2' gutterBottom component='div'>
              {rodo}
            </Typography>
          </>
        )}
        {applicationWay && (
          <>
            <Typography variant='subtitle2' component='div'>
              Sposób przesyłania zgłoszeń
            </Typography>
            <Typography variant='body2' gutterBottom component='div'>
              {applicationWay}
            </Typography>
          </>
        )}
        {applicationExpectation && (
          <>
            <Typography variant='subtitle2' component='div'>
              Oczekiwania dotyczące formy zgłoszeń
            </Typography>
            <Typography variant='body2' gutterBottom component='div'>
              {applicationExpectation}
            </Typography>
          </>
        )}
        {applicationDate && (
          <>
            <Typography variant='subtitle2' component='div'>
              Termin przesyłania zgłoszeń
            </Typography>
            <Typography variant='body2' gutterBottom component='div'>
              {applicationDate}
            </Typography>
          </>
        )}
        {contactInformation && (
          <>
            <Typography variant='subtitle2' component='div'>
              Dane kontaktowe
            </Typography>
            <Typography variant='body2' gutterBottom component='div'>
              {contactInformation}
            </Typography>
          </>
        )}
      </AccordionDetails>
    </Accordion>
  );
}

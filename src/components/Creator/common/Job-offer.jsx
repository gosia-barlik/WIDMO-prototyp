import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import "./Job-Offer.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setCopiedQualificationEffects,
  setCopiedSelectedText,
  setResponsibilities
} from "../../../store/actions/stepTwoActions";

export default function JobOffer(props) {
  const {
    searchedPosition,
    salaryTo,
    salaryFrom,
    salaryTime,
    salaryType,
    salaryContract,
    addressCountry,
    addressCity,
    addressStreet,
    workMode,
    contractType,
    recruitmentMode,
    workModel,
    aboutCompany,
  } = useSelector((state) => state.stepOneReducer);
  const {
    responsibilities,
    copiedQualificationEffects,
    copiedSelectedText,
    requirements,
    educationLevel,
    studiesName,
    studiesStage,
    certificateName,
    certificateStage,
    benefits,
  } = useSelector((state) => state.stepTwoReducer);
  const {
    rodo,
    applicationWay,
    applicationExpectation,
    applicationDate,
    contactInformation,
  } = useSelector((state) => state.stepThreeReducer);
  const dispatch = useDispatch();

  const removeQualificationEffect = (effect) => {
    const filteredCopiedQualificationEffects =
      copiedQualificationEffects.filter((obj) => obj != effect);
    dispatch(setCopiedQualificationEffects(filteredCopiedQualificationEffects));
  };

  const removeSelectedText = (text) => {
    const filteredSelectedText =
    copiedSelectedText.filter((obj) => obj != text);
    dispatch(setCopiedSelectedText(filteredSelectedText));
  };
  const removeResponsibility = (responsibility) => {
    console.log(responsibility)
    const filteredResponsibilities =
    responsibilities.filter((obj) => obj != responsibility);
    dispatch(setResponsibilities(filteredResponsibilities));
  }

 
  return (
    <Paper
      sx={{
        p: "10px ",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      }}>
      {props.activeStep === 0 && (
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
            {searchedPosition}
          </Typography>

          {aboutCompany && (
            <>
              <Typography variant='subtitle2' gutterBottom component='div'>
                O firmie
              </Typography>
              <Typography variant='body2' gutterBottom component='div'>
                {aboutCompany}
              </Typography>
            </>
          )}

          {(salaryType || salaryFrom || salaryTo || salaryTime) && (
            <>
              <Typography variant='subtitle2' gutterBottom component='div'>
                Wynagrodzenie
              </Typography>
              <Typography variant='body2' gutterBottom component='div'>
                {"od " + salaryFrom} {"do " + salaryTo} {"/" + salaryTime}{" "}
                {salaryType} {salaryContract}
              </Typography>
            </>
          )}

          {workModel && (
            <>
              <Typography variant='subtitle2' gutterBottom component='div'>
                Tryb pracy
              </Typography>
              <Typography variant='body2' gutterBottom component='div'>
                {workModel}
              </Typography>
            </>
          )}

          {contractType && (
            <>
              <Typography variant='subtitle2' gutterBottom component='div'>
                Rodzaj umowy
              </Typography>
              <Typography variant='body2' gutterBottom component='div'>
                {contractType}
              </Typography>
            </>
          )}

          {workMode && (
            <>
              <Typography variant='subtitle2' gutterBottom component='div'>
                Wymiar zatrudnienia
              </Typography>
              <Typography variant='body2' gutterBottom component='div'>
                {workMode}
              </Typography>
            </>
          )}

          {recruitmentMode && (
            <>
              <Typography variant='subtitle2' gutterBottom component='div'>
                Tryb rekrutacji
              </Typography>
              <Typography variant='body2' gutterBottom component='div'>
                {recruitmentMode}
              </Typography>
            </>
          )}
          {(addressStreet || addressCity || addressCountry) && (
            <>
              <Typography variant='subtitle2' gutterBottom component='div'>
                Miejsce pracy
              </Typography>
              <Typography variant='body2' gutterBottom component='div'>
                {addressStreet + " "} {addressCity + " "}
                {addressCountry}
              </Typography>
            </>
          )}

          {props.updateState > 0 && (
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
                  {responsibilities && (
                    <>
                      <Typography variant='subtitle2' component='div'>
                        Zakres obowiązków
                      </Typography>
                      {responsibilities.map((responsibility) => (
                        <Typography
                          key={responsibility}
                          variant='body2'
                          component='div'>
                          {responsibility}
                        </Typography>
                      ))}
                    </>
                  )}

                  {copiedQualificationEffects && (
                    <>
                      {copiedQualificationEffects.map((effect) => (
                        <Typography
                          key={effect}
                          variant='body2'
                          component='div'>
                          {effect}
                        </Typography>
                      ))}
                    </>
                  )}

                  {requirements && (
                    <>
                      <Typography
                        variant='subtitle2'
                        gutterBottom
                        component='div'>
                        Wymagania
                      </Typography>
                      {requirements.map((requirement) => (
                        <Typography
                          key={requirement}
                          variant='body2'
                          component='div'>
                          {requirement}
                        </Typography>
                      ))}
                    </>
                  )}
                </AccordionDetails>
              </Accordion>
            </>
          )}
        </>
      )}

      {props.activeStep === 1 && (
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
                {searchedPosition}
              </Typography>
              {aboutCompany && (
                <>
                  <Typography variant='subtitle2' gutterBottom component='div'>
                    O firmie
                  </Typography>
                  <Typography variant='body2' gutterBottom component='div'>
                    {aboutCompany}
                  </Typography>
                </>
              )}
              {(salaryType || salaryFrom || salaryTo || salaryTime) && (
                <>
                  <Typography
                    variant='subtitle2'
                    gutterBottom
                    component='div'
                    style={{}}>
                    Wynagrodzenie
                  </Typography>
                  <Typography variant='body2' gutterBottom component='div'>
                    {"od " + salaryFrom} {"do " + salaryTo} {"/" + salaryTime}{" "}
                    {salaryType} {salaryContract}
                  </Typography>
                </>
              )}
              {workModel && (
                <>
                  <Typography variant='subtitle2' gutterBottom component='div'>
                    Tryb pracy
                  </Typography>
                  <Typography variant='body2' gutterBottom component='div'>
                    {workModel}
                  </Typography>
                </>
              )}

              {contractType && (
                <>
                  <Typography variant='subtitle2' gutterBottom component='div'>
                    Rodzaj umowy
                  </Typography>
                  <Typography variant='body2' gutterBottom component='div'>
                    {contractType}
                  </Typography>
                </>
              )}

              {workMode && (
                <>
                  <Typography variant='subtitle2' gutterBottom component='div'>
                    Wymiar zatrudnienia
                  </Typography>
                  <Typography variant='body2' gutterBottom component='div'>
                    {workMode}
                  </Typography>
                </>
              )}

              {recruitmentMode && (
                <>
                  <Typography variant='subtitle2' gutterBottom component='div'>
                    Tryb rekrutacji
                  </Typography>
                  <Typography variant='body2' gutterBottom component='div'>
                    {recruitmentMode}
                  </Typography>
                </>
              )}

              {(addressStreet || addressCity || addressCountry) && (
                <>
                  <Typography variant='subtitle2' gutterBottom component='div'>
                    Miejsce pracy
                  </Typography>
                  <Typography variant='body2' gutterBottom component='div'>
                    {addressStreet + " "} {addressCity + " "}
                    {addressCountry}
                  </Typography>
                </>
              )}
            </AccordionDetails>
          </Accordion>
          <Typography
            variant='subtitle2'
            gutterBottom
            component='div'
            style={{ color: "#784af4", marginTop: "10px", fontWeight: "800" }}>
            Treść ogłoszenia
          </Typography>
          {responsibilities && (
            <>
              <Typography variant='subtitle2' gutterBottom component='div'>
                Zakres obowiązków
              </Typography>
              {responsibilities.map((responsibility) => (
                // <Typography
                //   key={responsibility}
                //   variant='body2'
                //   gutterBottom
                //   component='div'>
                //   {responsibility}
                // </Typography>
                        <Chip
                        className='styled-chip'
                  key={responsibility}
                  onDelete={() => {
                    removeResponsibility(responsibility);
                  }}
                  variant='outlined'
                  label={responsibility}
                >
                </Chip>
              ))}
            </>
          )}
          {copiedQualificationEffects && (
            <>
              {/* {copiedQualificationEffects.map((effect) => (
                <Typography key={effect} variant='body2' component='div'>
                  {effect}
                </Typography>
              ))} */}

              {copiedQualificationEffects.map((effect) => (
                <Chip
                  className='styled-chip'
                  key={effect}
                  onDelete={() => {
                    removeQualificationEffect(effect);
                  }}
                  variant='outlined'
                  label={effect}></Chip>
              ))}
            </>
          )}
          {copiedSelectedText && (
            <>
              {/* {copiedSelectedText.map((text) => (
                <Typography key={text} variant='body2' component='div'>
                  {text}
                </Typography>
              ))} */}

              {copiedSelectedText.map((text) => (
                <Chip className='styled-chip' key={text} onDelete={() => {
                  removeSelectedText(text);
                }} variant='outlined'
                label={text}>
                </Chip>
              ))}
            </>
          )}

          {requirements.length > 0 && (
            <>
              <Typography
                variant='subtitle2'
                gutterBottom
                component='div'
                style={{ marginTop: "6px" }}>
                Wymagania
              </Typography>
              {requirements.map((requirement) => (
                <Typography key={requirement} variant='body2' component='div'>
                  {requirement}
                </Typography>
              ))}
            </>
          )}
          {(educationLevel.length > 0 ||
            studiesName.length > 0 ||
            studiesStage.length > 0) && (
            <>
              <Typography
                variant='body2'
                gutterBottom
                component='div'
                style={{ marginTop: "4px" }}>
                Wykształcenie
              </Typography>
              <Typography variant='body2'>
                {educationLevel.map((level) => (
                  <span key={level}>{level}&nbsp;</span>
                ))}
                {studiesName && <span>na kierunku </span>}

                {studiesName.map((name) => (
                  <span key={name}>{name}&nbsp;</span>
                ))}
                {studiesStage.map((stage) => (
                  <span key={stage}>{stage}&nbsp;</span>
                ))}
                <br></br>
                {certificateName && <span> Mile widziana certyfikacja </span>}
                {certificateName.map((name) => (
                  <span key={name}>{name}&nbsp;</span>
                ))}
                {certificateStage.map((stage) => (
                  <span key={stage}>{stage}&nbsp;</span>
                ))}
              </Typography>
            </>
          )}

          {benefits.length > 0 && (
            <>
              <Typography
                variant='subtitle2'
                gutterBottom
                component='div'
                style={{ marginTop: "6px" }}>
                Benefity
              </Typography>
              {benefits.map((benefit) => (
                <Typography key={benefit} variant='body2' component='div'>
                  {benefit}
                </Typography>
              ))}
            </>
          )}
        </>
      )}

      {props.activeStep === 2 && (
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
                {searchedPosition}
              </Typography>
              {(salaryType || salaryFrom || salaryTo || salaryTime) && (
                <>
                  <Typography
                    variant='subtitle2'
                    gutterBottom
                    component='div'
                    style={{}}>
                    Wynagrodzenie
                  </Typography>
                  <Typography variant='body2' gutterBottom component='div'>
                    {"od " + salaryFrom} {"do " + salaryTo} {"/" + salaryTime}{" "}
                    {salaryType} {salaryContract}
                  </Typography>
                </>
              )}
              {aboutCompany && (
                <>
                  <Typography variant='subtitle2' gutterBottom component='div'>
                    O firmie
                  </Typography>
                  <Typography variant='body2' gutterBottom component='div'>
                    {aboutCompany}
                  </Typography>
                </>
              )}
            </AccordionDetails>
          </Accordion>

          <Accordion className='styled-accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'>
              <Typography variant='subtitle2' component='div'>
                Treść ogłoszenia
              </Typography>
            </AccordionSummary>

            <AccordionDetails style={{ flexDirection: "column" }}>
              {responsibilities && (
                <>
                  <Typography variant='subtitle2' gutterBottom component='div'>
                    Zakres obowiązków
                  </Typography>
                  {responsibilities.map((responsibility) => (
                    <Typography
                      key={responsibility}
                      variant='body2'
                      component='div'>
                      {responsibility}
                    </Typography>
                  ))}
                </>
              )}

              {copiedQualificationEffects && (
                <>
                  {copiedQualificationEffects.map((effect) => (
                    <Typography key={effect} variant='body2' component='div'>
                      {effect}
                    </Typography>
                  ))}
                </>
              )}

              {copiedSelectedText && (
                <>
                  {copiedSelectedText.map((text) => (
                    <Typography key={text} variant='body2' component='div'>
                      {text}
                    </Typography>
                  ))}
                </>
              )}

              {requirements.length > 0 && (
                <>
                  <Typography
                    variant='subtitle2'
                    gutterBottom
                    component='div'
                    style={{ marginTop: "6px" }}>
                    Wymagania
                  </Typography>
                  {requirements.map((requirement) => (
                    <Typography
                      key={requirement}
                      variant='body2'
                      component='div'>
                      {requirement}
                    </Typography>
                  ))}
                </>
              )}

              {(educationLevel.length > 0 ||
                studiesName.length > 0 ||
                studiesStage.length > 0) && (
                <>
                  <Typography
                    variant='body2'
                    gutterBottom
                    component='div'
                    style={{ marginTop: "4px" }}>
                    Wykształcenie
                  </Typography>
                  <Typography variant='body2'>
                    {educationLevel.map((level) => (
                      <span key={level}>{level}&nbsp;</span>
                    ))}
                    {studiesName && <span>na kierunku </span>}

                    {studiesName.map((name) => (
                      <span key={name}>{name}&nbsp;</span>
                    ))}
                    {studiesStage.map((stage) => (
                      <span key={stage}>{stage}&nbsp;</span>
                    ))}
                    <br></br>
                    {certificateName && (
                      <span> Mile widziana certyfikacja </span>
                    )}
                    {certificateName.map((name) => (
                      <span key={name}>{name}&nbsp;</span>
                    ))}
                    {certificateStage.map((stage) => (
                      <span key={stage}>{stage}&nbsp;</span>
                    ))}
                  </Typography>
                </>
              )}

              {benefits.length > 0 && (
                <>
                  <Typography
                    variant='subtitle2'
                    gutterBottom
                    component='div'
                    style={{ marginTop: "6px" }}>
                    Benefity
                  </Typography>
                  {benefits.map((benefit) => (
                    <Typography key={benefit} variant='body2' component='div'>
                      {benefit}
                    </Typography>
                  ))}
                </>
              )}
            </AccordionDetails>
          </Accordion>

          <Typography
            variant='subtitle2'
            gutterBottom
            component='div'
            style={{ color: "#784af4", marginTop: "10px", fontWeight: "800" }}>
            Informacje uzupełniające
          </Typography>
          {rodo && (
            <>
              <Typography
                variant='subtitle2'
                gutterBottom
                component='div'
                style={{ marginTop: "6px" }}>
                Przetwarzanie danych
              </Typography>
              <Typography key={rodo} variant='caption' component='div'>
                {rodo}
              </Typography>
            </>
          )}

          {(applicationWay ||
            applicationExpectation ||
            applicationDate ||
            contactInformation) && (
            <>
              <Typography
                variant='subtitle2'
                gutterBottom
                component='div'
                style={{ marginTop: "6px" }}>
                Dane organizacyjne dotyczące rekrutacji
              </Typography>
              {applicationWay && (
                <>
                  <Typography variant='body2' gutterBottom component='div'>
                    Sposób przesyłania zgłoszeń
                  </Typography>
                  <Typography variant='caption' gutterBottom component='div'>
                    {applicationWay}
                  </Typography>
                </>
              )}

              {applicationExpectation && (
                <>
                  <Typography variant='body2' gutterBottom component='div'>
                    Oczekiwania dotyczące formy zgłoszeń
                  </Typography>
                  <Typography variant='caption' gutterBottom component='div'>
                    {applicationExpectation}
                  </Typography>
                </>
              )}

              {applicationDate && (
                <>
                  <Typography variant='body2' gutterBottom component='div'>
                    Termin przesyłania zgłoszeń
                  </Typography>
                  <Typography variant='caption' gutterBottom component='div'>
                    {applicationDate}
                  </Typography>
                </>
              )}
            </>
          )}
        </>
      )}
    </Paper>
  );
}

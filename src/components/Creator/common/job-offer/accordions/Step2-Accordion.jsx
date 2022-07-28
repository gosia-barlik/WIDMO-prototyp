import React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useDispatch, useSelector } from "react-redux";

export default function Step2Accordion(props) {
  const {
    responsibilities,
    customizedResponsibilities,
    copiedQualificationEffects,
    copiedSelectedText,
    requirements,
    customizedRequirements,
    educationLevel,
    studiesName,
    studiesStage,
    certificateName,
    certificateStage,
    benefits,
    showEducationForm,
    customizedBenefits,
  } = useSelector((state) => state.stepTwoReducer);

  return (
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
            <Typography variant='subtitle2' component='div'>
              Zakres obowiązków
            </Typography>
            {responsibilities.map((responsibility) => (
              <Typography key={responsibility} variant='body2' component='div'>
                {responsibility}
              </Typography>
            ))}
            {customizedResponsibilities.map((responsibility) => (
              <Typography key={responsibility.name} variant='body2' component='div'>
                {responsibility.name}
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

        {(requirements || customizedRequirements) && (
          <>
            <Typography
              variant='subtitle2'
              component='div'
              style={{ marginTop: "6px" }}>
              Wymagania
            </Typography>
            {requirements.map((requirement) => (
              <Typography key={requirement} variant='body2' component='div'>
                {requirement}
              </Typography>
            ))}
            {customizedRequirements.map((requirement) => (
              <Typography key={requirement.name} variant='body2' component='div'>
                {requirement.name}
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

        {(benefits || customizedBenefits) && (
          <>
            <Typography
              variant='subtitle2'
              component='div'
              style={{ marginTop: "6px" }}>
              Benefity
            </Typography>
            {benefits.map((benefit) => (
              <Typography key={benefit} variant='body2' component='div'>
                {benefit}
              </Typography>
            ))}
            {customizedBenefits.map((benefit) => (
              <Typography key={benefit.name} variant='body2' component='div'>
                {benefit.name}
              </Typography>
            ))}
          </>
        )}
      </AccordionDetails>
    </Accordion>
  );
}

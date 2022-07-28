import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Step1Accordion from "../accordions/Step1-Accordion";
import Step2Accordion from "../accordions/Step2-Accordion";
import { useDispatch, useSelector } from "react-redux";

export default function Step3DataProcessing(props) {
  const { searchedPosition } = useSelector((state) => state.stepOneReducer);
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
    showEducationForm,
    customizedBenefits,
  } = useSelector((state) => state.stepTwoReducer);
  const {
    rodo,
    applicationWay,
    applicationExpectation,
    applicationDate,
    contactInformation,
  } = useSelector((state) => state.stepThreeReducer);

  return (
    <>
      <Stack style={{ marginBottom: "20px" }}>
        {searchedPosition && <Step1Accordion />}
        {(responsibilities.length > 0 ||
        requirements.length ||
        benefits.length > 0) && <Step2Accordion />}
        <Typography
          variant='subtitle2'
          component='div'
          style={{
            color: "#784af4",
            marginTop: "10px",
            fontWeight: "700",
          }}>
          Informacje uzupełniające
        </Typography>
        {rodo && (
          <>
            <Typography
              variant='subtitle2'
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
      </Stack>
    </>
  );
}

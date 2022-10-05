import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";

export default function Step3DataProcessing(props) {
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
        <Typography
          variant='subtitle2'
          component='div'
          style={{ marginTop: "6px" }}>
          Przetwarzanie danych
        </Typography>
        {rodo && (
          <>
            <Typography key={rodo} variant='caption' component='div'>
              {rodo}
            </Typography>
          </>
        )}
        <Typography
          variant='subtitle2'
          component='div'
          style={{ marginTop: "6px" }}>
          Dane organizacyjne dotyczące rekrutacji
        </Typography>
        {(applicationWay ||
          applicationExpectation ||
          applicationDate ||
          contactInformation) && (
          <>
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

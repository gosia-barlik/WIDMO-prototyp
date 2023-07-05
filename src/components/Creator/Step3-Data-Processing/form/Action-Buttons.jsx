import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ActionButtons(props) {
  return (
    <Stack
      spacing={2}
      direction='row'
      style={{ justifyContent: "space-between", padding: "12px 0px", marginTop:"24px"}}>
      <Button
        className='button-outlined'
        variant='outlined'
        disabled={props.disabled}
        onClick={props.handleBack}>
        Wróć
      </Button>
      <Button
        className='button-contained'
        variant='contained'
        onClick={props.handleNext}>
        Przejdź do podsumowania
      </Button>
    </Stack>
  );
}
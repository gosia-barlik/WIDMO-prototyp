import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ActionButtons(props) {
  return (
    <Stack
      spacing={2}
      direction='row'
      style={{ justifyContent: "right", paddingTop: "5px" }}>
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
        Zapisz i wróć do strony głównej
      </Button>
    </Stack>
  );
}
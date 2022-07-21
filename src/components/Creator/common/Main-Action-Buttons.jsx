import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function MainActionButtons(props) {
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
        Dalej
      </Button>
    </Stack>
  );
}

import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ActionButtons(props) {

  const submitAndGoForward = () => {props.onSubmit(); props.handleNext()}
  
  return (
    <Stack
      spacing={2}
      direction='row'
      style={{ justifyContent: "right", paddingTop: "5px" }}>
      <Button
        className='button-contained'
        variant='contained'
        onClick={submitAndGoForward}>
        Dalej
      </Button>
    </Stack>
  );
}
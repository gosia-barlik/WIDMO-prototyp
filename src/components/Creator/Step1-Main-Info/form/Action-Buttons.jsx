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
        className='button-contained'
        variant='contained'
        onClick={props.onSubmit}>
        Dalej
      </Button>
    </Stack>
  );
}
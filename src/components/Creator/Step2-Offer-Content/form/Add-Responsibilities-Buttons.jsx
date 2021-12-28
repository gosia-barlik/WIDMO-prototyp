import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(() => ({
  textTransform: "none",
  width: "100%",
}));

export default function AddResponsibilitiesButtons(props) {
  return (
    <Stack
      spacing={2}
      direction='column'
      style={{ justifyContent: "right", paddingTop: "5px" }}>
      <ColorButton className='styled-button' variant='contained'>
        <IconButton
          className='styled-icon-button'
          component='span'
          onClick={props.onSetResponsibilities}>
          <AddIcon />
        </IconButton>
        Dodaj najczęściej poszukiwane umiejętności na rynku pracy
      </ColorButton>
      <ColorButton className='styled-button' variant='contained'>
        <IconButton
          className='styled-icon-button'
          component='span'
          onClick={props.onSetQualificationInfo}>
          <AddIcon />
        </IconButton>
        Dodaj informacje z opisów kwalifikacji i zestawów efektów uczenia się
      </ColorButton>
    </Stack>
  );
}

import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setResponsibilities,
  setShowResponsibilitiesButton,
} from "../../../../store/actions/stepTwoActions";

const ColorButton = styled(Button)(() => ({
  textTransform: "none",
  width: "100%",
}));

// const dispatch = useDispatch();

// const onSetResponsibilities = (e) => {

//   e.preventDefault();
//     dispatch(setResponsibilities([
//       "diagnozowanie usterek mechanicznych",
//       "wykonywanie napraw",
//       "bieżące usuwanie awarii i usterek",
//     ]));
//     dispatch(setShowResponsibilitiesButton(false))

  
//   ;
// };

export default function AddResponsibilitiesButtons(props) {
  return (
    <Stack
      spacing={2}
      direction='column'
      style={{ justifyContent: "right", paddingTop: "5px" }}>
        {props.showResponsibilitiesButton?
        <ColorButton className='styled-button' variant='contained'>
        <IconButton
          className='styled-icon-button'
          component='span'
          onClick={props.onSetResponsibilities}>
          <AddIcon />
        </IconButton>
        Dodaj najczęściej poszukiwane umiejętności na rynku pracy
      </ColorButton> : null }
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

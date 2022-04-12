import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setRequirements,
  setShowRequirementsButton,
  setShowEducationForm
} from "../../../../store/actions/stepTwoActions";

const ColorButton = styled(Button)(() => ({
  textTransform: "none",
  width: "100%",
}));

export default function AddRequirementsButtons(props) {
  const { showRequirementsButton, requirements } = useSelector((state) => state.stepTwoReducer);
  const dispatch = useDispatch();

//REQUIREMENTS
const onSetRequirements = (e) => {

  e.preventDefault();
  dispatch(setRequirements([
        "wiedza z zakresu mechaniki/elektromechaniki",
        "wykształcenie zawodowe lub średnie techniczne",
        "dobra organizacja pracy własnej oraz umiejętność pracy w zespole",
      ]));
      console.log(requirements)
      // dispatch(setShowRequirementsButton(false));
}


  return (
    <Stack
      spacing={2}
      direction='column'
      style={{ justifyContent: "right", paddingTop: "5px" }}>
        {showRequirementsButton ? <ColorButton className='styled-button' variant='contained'>
        <IconButton className='styled-icon-button'
          component='span'
          onClick={onSetRequirements}>
          <AddIcon />
        </IconButton>
        Dodaj najczęstsze wymagania na to stanowisko
      </ColorButton> : null }
      
      {/* <ColorButton className='styled-button' variant='contained'>
        <IconButton className='styled-icon-button'
          component='span'
          onClick={props.onSetEducationInfo}>
          <AddIcon />
        </IconButton>
        Dodaj informacje o wykształceniu i doświadczeniu
      </ColorButton> */}
    </Stack>
  );
}

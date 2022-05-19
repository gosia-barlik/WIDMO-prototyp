import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setBenefits,
  setShowBenefitsButton
} from "../../../../store/actions/stepTwoActions";

const ColorButton = styled(Button)(() => ({
  textTransform: "none",
  width: "100%",
}));

export default function AddBenefitsButtons(props) {
  const dispatch = useDispatch();
  const { showBenefitsButton, benefits } = useSelector((state) => state.stepTwoReducer);

  const benefitsFixtures = ["benefit1", "benefit2", "benefit3"];

  const onSetBenefits = () => {
    let newBenefits;
    if (benefits.length > 0)
      newBenefits = [];
    else
      newBenefits = benefitsFixtures;

    dispatch(setBenefits(newBenefits));
    dispatch(setShowBenefitsButton(false));
  };

  return (
    <Stack
      spacing={2}
      direction='column'
      style={{ justifyContent: "right", paddingTop: "5px" }}>
      {showBenefitsButton &&
        <ColorButton className='styled-button' variant='contained'>
          <IconButton
            className='styled-icon-button'
            component='span'
            onClick={onSetBenefits}>
            {benefits.length == 0 ? <AddIcon /> : <RemoveIcon />}
          </IconButton>
          Dodaj benefity najczęściej występujące w ogłoszeniach o pracę
        </ColorButton>}
    </Stack>
  );
}
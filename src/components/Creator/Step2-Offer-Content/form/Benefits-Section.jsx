import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Wysiwyg from "./Wysiwyg";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@mui/material/IconButton";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  setBenefits,
  setCustomizedBenefits,
  setBenefitsToHtml
} from "../../../../store/actions/stepTwoActions";

const useStyles = makeStyles((theme) => ({
  textField: {
    fontSize: "14px",
    width: "25vw",
  },
}));

export default function BenefitsSection(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { benefits, customizedBenefits, benefitsToHtml } = useSelector(
    (state) => state.stepTwoReducer
  );
  const onSetBenefitsToHtml = (benefitsToHtml) => {
    dispatch(setBenefitsToHtml(benefitsToHtml));
  };


  return (
    <Stack
      spacing={2}
      direction='column'
      style={{ justifyContent: "right", paddingTop: "24px" }}>
      <Typography variant='h6' gutterBottom component='div'>
        Benefity
      </Typography>
      
        <Card className='styled-card'>
        <Wysiwyg contentToEdit={benefitsToHtml} setValueToHtml={onSetBenefitsToHtml}/>
        </Card>
    

    </Stack>
  );
}

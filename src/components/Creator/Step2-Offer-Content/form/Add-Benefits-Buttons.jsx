import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@mui/material/IconButton";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  setBenefits,
  setShowBenefitsButton,
  setCustomizedBenefits,
} from "../../../../store/actions/stepTwoActions";

const useStyles = makeStyles((theme) => ({
  textField: {
    fontSize: "14px",
    width: "25vw",
  },
}));

export default function AddBenefitsButtons(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { showBenefitsButton, benefits, customizedBenefits } = useSelector(
    (state) => state.stepTwoReducer
  );

  const benefitsFixtures = ["benefit1", "benefit2", "benefit3"];

  const onSetBenefits = () => {
    let newBenefits;
    if (benefits.length > 0) newBenefits = [];
    else newBenefits = benefitsFixtures;

    dispatch(setBenefits(newBenefits));
    dispatch(setShowBenefitsButton(false));
  };

  // DYNAMIC SECTION
  let handleChange = (i, e) => {
    let newBenefits = [...customizedBenefits];
    newBenefits[i][e.target.name] = e.target.value;
    dispatch(setCustomizedBenefits(newBenefits));
    console.log(customizedBenefits);
  };

  let addFormFields = () => {
    dispatch(setCustomizedBenefits([...customizedBenefits, { name: "" }]));
  };

  let removeFormFields = (i) => {
    let newBenefits = [...customizedBenefits];
    newBenefits.splice(i, 1);
    dispatch(setCustomizedBenefits(newBenefits));
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(customizedBenefits));
  };

  return (
    <Stack
      spacing={2}
      direction='column'
      style={{ justifyContent: "right", paddingTop: "5px" }}>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Benefity
      </Typography>
      {showBenefitsButton && (
        <Card className='styled-card'>
          <IconButton
            className='styled-icon-button'
            component='span'
            onClick={onSetBenefits}>
            {benefits.length === 0 ? <AddIcon /> : <RemoveIcon />}
          </IconButton>
          {benefits.length === 0
            ? "Dodaj benefity najczęściej występujące w ogłoszeniach o pracę"
            : "Usuń benefity najczęściej występujące w ogłoszeniach o pracę"}
        </Card>
      )}

      {/* DYNAMIC SECTION*/}
      <Card
        className='styled-card'
        style={{ display: "flex", flexDirection: "column" }}>
        {customizedBenefits.map((element, index) => (
          <div className='form-inline' key={index}>
            <TextField
              className={classes.textField}
              variant='outlined'
              size='small'
              label='Benefit'
              placeholder='Wpisz swój benefit'
              fullWidth
              type='text'
              name='name'
              value={element.name || ""}
              onChange={(e) => handleChange(index, e)}
            />
            {index ? (
              <IconButton
                component='span'
                className='styled-icon-button'
                style={{ marginTop: "-4px" }}
                onClick={() => removeFormFields(index)}>
                <RemoveIcon />
              </IconButton>
            ) : null}
          </div>
        ))}
        <div className='button-section'>
          <IconButton
            className='styled-icon-button'
            component='span'
            onClick={() => addFormFields()}>
            <AddIcon />
          </IconButton>
          {customizedBenefits.length === 0
            ? "Dodaj swój element"
            : "Dodaj kolejny element"}
          {/* <button className='button submit' type='submit'>
            Submit
          </button> */}
        </div>
      </Card>
    </Stack>
  );
}

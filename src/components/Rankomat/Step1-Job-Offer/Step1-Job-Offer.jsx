import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import MainActionButtons from "../common/MainActionButtons";
import "./Step1-Job-Offer.css";
import { setJobOffer } from "../../../store/actions/rankomatActions/rankomatStepOneActions";
import { useDispatch } from "react-redux";

const Input = styled("input")({
  display: "none",
});

export default function Step1JobOffer(props) {
  const dispatch = useDispatch();
  const onSetJobOffer = (newJobOffer) => dispatch(setJobOffer(newJobOffer));

  return (
    <Grid container spacing={4} className='rankomat-step-1-container'>
      <Grid
        item
        xs={4}
        className='rankomat-step-1-container-box'>
        <Typography variant='body2' gutterBottom component='div' style={{lineHeight:"1.5rem"}}>
          Wprowadź <span style={{fontWeight:"700"}}> ogłoszenie </span>o pracę, pod kątem którego chciałbyś analizować CV
        </Typography>
        <Typography variant='body2' gutterBottom component='div' style={{marginTop:"24px"}}>
          1.
          <label htmlFor='contained-button-file'>
            <Input
              accept='image/*'
              id='contained-button-file'
              multiple
              type='file'
            />
            <Button
              variant='outlined'
              component='span'
              className='button-outlined upload-button'
              style={{ marginTop: "0" }}>
              Wybierz ze swoich ogłoszeń
            </Button>
          </label>
          lub
        </Typography>
        <Typography variant='body2' gutterBottom component='div'style={{marginTop:"24px"}}>
          2.
          <label htmlFor='contained-button-file'>
            <Input
              accept='image/*'
              id='contained-button-file'
              multiple
              type='file'
            />
            <Button
              variant='outlined'
              component='span'
              className='button-outlined upload-button'
              style={{ marginTop: "0" }}>
              Wybierz z dysku
            </Button>
          </label>
          lub
        </Typography>
        <Typography variant='body2' gutterBottom component='div' style={{marginTop:"24px"}}>
          2. Wpisz albo wklej tekst w pole tekstowe znajdujące się poniżej
        </Typography>
        <TextareaAutosize
          onChange={(e) => onSetJobOffer(e.target.value)}
          aria-label='minimum height'
          minRows={3}
          placeholder='Tu wklej tekst ogłoszenia o pracę ...'
        />

        <MainActionButtons
          handleBack={props.handleStepperBack}
          handleNext={props.handleStepperNext}
        />
      </Grid>
     
    </Grid>
  );
}

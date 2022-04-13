import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import MainActionButtons from "../common/MainActionButtons";
import "./Step1-Job-Offer.css";

const Input = styled("input")({
  display: "none",
});

export default function Step1JobOffer(props) {
  return (
    <Grid container spacing={4} className='rankomat-step-1-container'>
      <Grid
        item
        xs={4}
        className='rankomat-step-1-container-box'>
        <Typography variant='body2' gutterBottom component='div'>
          Wprowadź ogłoszenie o pracę, do którego chciałbyś dopasować życiorysy
          kandydatów
        </Typography>
        <Typography variant='body2' gutterBottom component='div'>
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
              Załaduj plik
            </Button>
          </label>
          lub
        </Typography>
        <Typography variant='body2' gutterBottom component='div'>
          2. Wpisz albo wklej tekst w pole tekstowe znajdujące się poniżej
        </Typography>
        <TextareaAutosize
          onChange={(e) => props.onSetJobOffer(e.target.value)}
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

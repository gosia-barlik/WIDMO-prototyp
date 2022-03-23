import React from "react";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@material-ui/icons/Add";

export default function AboutCompany(props) {
  return (
    <>
      <Typography variant='subtitle2' gutterBottom component='div'>
        O firmie
      </Typography>
      <TextareaAutosize
        onChange={(e) => props.onSetAboutCompany(e.target.value)}
        aria-label='minimum height'
        minRows={3}
        placeholder='Podaj kilka podstawowych informacji na temat firmy, gdzie się znajduje, w jakim obszarze działa ...'
      />
      <Typography
        variant='subtitle2'
        component='div'
        style={{ marginTop: "20px" }}>
        Jeśli chcesz, możesz dodać logotyp firmy
      </Typography>
      {/* <Button  className='button-outlined'
        variant='outlined' component='label' >
        Dodaj logo
        <input type='file' hidden />
      </Button> */}
      <IconButton
        className='styled-icon-button'
        aria-label='upload logo'
        component='label'>
        <input type='file' hidden />
        <AddIcon />
      </IconButton>
      Dodaj logo
    </>
  );
}

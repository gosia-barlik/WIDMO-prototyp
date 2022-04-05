import React from "react";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
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
        Jeśli chcesz, możesz dodać logotyp
      </Typography>
      <Button
        variant='outlined'
        className='button-outlined'
        component='label'
        onClick={props.onFileUpload}
        startIcon={<AddIcon />}>
        <input type='file' hidden onChange={(e) => props.onSetLogo(e)}/>
        Dodaj logo
      </Button>
    </>
  );
}

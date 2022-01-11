import React from "react";
import Typography from "@mui/material/Typography";
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function AboutCompany(props) {

  return (
    <>
      <Typography variant='subtitle2' gutterBottom component='div'>
        O firmie
      </Typography>
      <TextareaAutosize
      onChange = {e => props.onSetAboutCompany(e.target.value)}
      aria-label="minimum height"
      minRows={3}
      placeholder="Podaj kilka podstawowych informacji na temat firmy, gdzie się znajduje, w jakim obszarze działa ..."
    />  
    </>
  );
}

import React from "react";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setAboutCompany,
  setLogo,
} from "../../../../store/actions/stepOneActions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function AboutCompany(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  //ABOUT COMPANY
  const onSetAboutCompany = (aboutCompany) => {
    dispatch(setAboutCompany(aboutCompany));
  };

  const onSetLogo = (e) => {
    dispatch(setLogo(e.target.files[0]));
    // console.log(logo);
  };

  const onFileUpload = () => {
    // const formData = new FormData();
    // formData.append("myFile", logo, logo.name);
    // console.log(logo);
    // axios.post("api/uploadfile", formData);
  };

  return (
    <>
      <Typography variant='subtitle2' gutterBottom component='div'>
        O firmie
      </Typography>
      <TextareaAutosize
        onChange={(e) => onSetAboutCompany(e.target.value)}
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
      {/* <Button
        variant='outlined'
        className='button-outlined'
        component='label'
        onClick={onFileUpload}
        startIcon={<AddIcon />}>
        <input type='file' hidden onChange={(e) => onSetLogo(e)}/>
        Dodaj logo
      </Button> */}
      <div className= 'add-logo'>
        <input
          accept='image/*'
          className={classes.input}
          id='icon-button-file'
          type='file'
          onChange={(e) => onSetLogo(e)}
        />
        <label htmlFor='icon-button-file'>
          <IconButton
            className='styled-icon-button'
            aria-label='upload picture'
            component='span'
            onClick={onFileUpload}>
            <AddIcon />
          </IconButton>
          Dodaj logo
        </label>
      </div>
    </>
  );
}

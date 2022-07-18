import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setCompanyName,
  setAboutCompany,
  setLogo,
  setLogoPreview,
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
  textField: {
    fontSize: "14px",
    marginTop: "8px",
    marginRight: "8px",
  },
}));

export default function AboutCompany(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { logo, logoPreview } = useSelector((state) => state.stepOneReducer);

  useEffect(() => {
    if (!logo) {
      dispatch(setLogoPreview(undefined));
      return;
    }

    const objectUrl = URL.createObjectURL(logo);
    dispatch(setLogoPreview(objectUrl));

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [logo]);

  //COMPANY NAME
  const onSetCompanyName = (companyName) => {
    dispatch(setCompanyName(companyName));
  };

  //ABOUT COMPANY
  const onSetAboutCompany = (aboutCompany) => {
    dispatch(setAboutCompany(aboutCompany));
  };

  const onSetLogo = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      dispatch(setLogo(undefined));
      return;
    }
    dispatch(setLogo(e.target.files[0]));
    // document.getElementById("photo-icon").classList.add("hidden")
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
      <TextField
        className={classes.textField}
        fullWidth
        variant='outlined'
        size='small'
        id='outlined-basic'
        label='nazwa firmy'
        name='company-name-input'
        onChange={(e) => onSetCompanyName(e.target.value)}
      />
      <TextField
        className={classes.textField}
        variant='outlined'
        id='textarea'
        label='kilka słów o firmie'
        fullWidth
        multiline
        onChange={(e) => onSetAboutCompany(e.target.value)}
        aria-label='about company'
        minRows={3}
      />

      <Typography
        variant='subtitle2'
        component='div'
        style={{ marginTop: "20px" }}>
        Jeśli chcesz, możesz dodać logotyp
      </Typography>
      <div className='add-logo'>
        <div className={"input-file-wrapper"}>
          <label>
            <IconButton
              color='primary'
              aria-label='upload picture'
              component='span'
              id='photo-icon'
              onClick={(e) => onSetLogo(e)}>
              <PhotoCamera />
            </IconButton>
            {logoPreview && (
              <img
                className='logo-preview'
                src={logoPreview}
                id={"logo-photo"}
                onClick={(e) => onSetLogo(e)}
              />
            )}
          </label>

          <input
            type='file'
            name='photo'
            className='logo-file-input'
            style={{ color: "transparent" }}
            onChange={(e) => onSetLogo(e)}
            id={"add-photo"}
          />
        </div>
      </div>
    </>
  );
}

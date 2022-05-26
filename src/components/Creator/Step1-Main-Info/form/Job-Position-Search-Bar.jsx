import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchedPosition,
  setShowResults,
} from "../../../../store/actions/stepOneActions";

const MAX_LENGTH = 64;

export default function SearchBar(props) {
  // const classes = useStyles();
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("Pole obowiązkowe");
  const dispatch = useDispatch();
  const { searchedPosition } = useSelector((state) => state.stepOneReducer);

  useEffect(() => {
    // Set errorMessage only if text is equal or bigger than MAX_LENGTH
    if (text.length >= MAX_LENGTH) {
      setErrorMessage("Przekroczono dopuszczalną liczbę znaków");
    }
  }, [text]);

  useEffect(() => {
    // Set empty erroMessage only if text is less than MAX_LENGTH
    // and errorMessage is not empty.
    // avoids setting empty errorMessage if the errorMessage is already empty
    if (text.length < MAX_LENGTH && errorMessage) {
      setErrorMessage("Pole obowiązkowe");
    }
  }, [text, errorMessage]);

  const handleInputChange = (e) => {
    dispatch(setSearchedPosition(e.target.value));
    setText(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (text.length < MAX_LENGTH) {
      dispatch(setSearchedPosition(searchedPosition));
      dispatch(setShowResults(true));
    }
  };

  return (
    <>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Stanowisko
      </Typography>
      <form onSubmit={handleSearch}>
        <TextField
          error={text.length >= MAX_LENGTH}
          helperText={errorMessage}
          required
          color='secondary'
          size='small'
          id='searchPosition'
          name='searchPosition'
          sx={{ ml: 1, flex: 1 }}
          placeholder='szukam osoby na stanowisko...'
          // InputProps={{
          //   classes: {
          //     root: classes.root,
          //     disabled: classes.disabled,
          //     notchedOutline: classes.notchedOutline,
          //   },
          // }}
          style={{ fontSize: "14px", width: "80%", margin: "0" }}
          onChange={handleInputChange}
        />
        <IconButton type='submit' sx={{ p: "10px" }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </form>
    </>
  );
}

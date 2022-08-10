import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchedPosition,
  setShowResults,
} from "../../../../store/actions/stepOneActions";
import { jobPositionSchema } from "../../common/validations/stepOneSchema";

export default function SearchBar(props) {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("Pole obowiązkowe");
  const dispatch = useDispatch();
  const { searchedPosition } = useSelector((state) => state.stepOneReducer);

  useEffect(() => {
    // Set errorMessage only if text is equal or bigger than MAX_LENGTH
    if (text.length >= jobPositionSchema.MAX_LENGTH) {
      setErrorMessage("Przekroczono dopuszczalną liczbę znaków");
    }
  }, [text]);

  useEffect(() => {
    // Set empty erroMessage only if text is less than MAX_LENGTH
    // and errorMessage is not empty.
    // avoids setting empty errorMessage if the errorMessage is already empty
    if (text.length < jobPositionSchema.MAX_LENGTH && errorMessage) {
      setErrorMessage("Pole obowiązkowe");
    }
  }, [text, errorMessage]);

  const handleInputChange = (e) => {
    dispatch(setSearchedPosition(e.target.value));
    setText(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (text.length < jobPositionSchema.MAX_LENGTH) {
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
          spellcheck='true'
          error={text.length >= jobPositionSchema.MAX_LENGTH}
          helperText={errorMessage}
          required
          fullWidth
          variant='outlined'
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
          onChange={handleInputChange}
          style={{ width: "85%", fontSize: "14px" }}
        />

        <IconButton type='submit' sx={{ p: "10px" }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </form>
    </>
  );
}

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchedPosition,
  setShowResults,
} from "../../../../store/actions/stepOneActions";

export default function SearchBar(props) {

  const dispatch = useDispatch();
  const {searchedPosition} = useSelector((state) => state.stepOneReducer);

  const handleInputChange = (e) => {
    dispatch(setSearchedPosition(e.target.value));
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchedPosition(searchedPosition));
    dispatch(setShowResults(true));
  };

  return (
    <>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Stanowisko
      </Typography>
      <Paper
        component='form'
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}>
        <InputBase
          id='searchPosition'
          name='searchPosition'
          sx={{ ml: 1, flex: 1 }}
          placeholder='szukam osoby na stanowisko...'
          inputProps={{ "aria-label": "search google maps" }}
          style={{ fontSize: "14px" }}
          onChange={handleInputChange}
        />
        <IconButton
          type='submit'
          sx={{ p: "10px" }}
          aria-label='search'
          onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
}

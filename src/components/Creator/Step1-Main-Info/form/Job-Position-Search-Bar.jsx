import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchBar(props) {
  const [searchedPosition, setSearchedPosition] = useState("");

  const handleInputChange = (e) => {
    setSearchedPosition(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    props.onSetSearchedPosition(searchedPosition);
    props.onShowResults(true);
  };

  return (
    <Paper
      component='form'
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}>
      <InputBase
        id='searchPosition'
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
  );
}

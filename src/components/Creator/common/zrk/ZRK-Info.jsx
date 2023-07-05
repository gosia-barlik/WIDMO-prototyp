import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Switch from "@material-ui/core/Switch";
import Grow from "@material-ui/core/Grow";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SearchResults from "../../Step1-Main-Info/form/Job-Position-Search-Results";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { setShowZRK } from "../../../../store/actions/stepOneActions";
import { useDispatch, useSelector } from "react-redux";
import "./ZRK-Info.css";

const PurpleSwitch = withStyles({
  switchBase: {
    color: blue['A200'],
    "&$checked": {
      color: blue['A700'],
    },
    "&$checked + $track": {
      backgroundColor: blue['A700'],
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function ZRKInfo(props) {
  const { showZRK } = useSelector((state) => state.stepOneReducer);
  const dispatch = useDispatch();

  const handleShowZRK = () => {
    showZRK ? dispatch(setShowZRK(false)) : dispatch(setShowZRK(true));
  };

  return (
    <Grid
      item
      xs={4}
      className='zrk-container'
     >
      <FormControlLabel style ={{marginLeft: "80%"}}
        control={<PurpleSwitch checked={showZRK}  onChange={() => handleShowZRK()} />}
        label='ZRK'
      />
      <Grow in={showZRK} style ={{width:"700px"}}>
        <Paper className='' elevation={0}>
          <SearchResults />
        </Paper>
      </Grow>
    </Grid>
  );
}

import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Switch from "@material-ui/core/Switch";
import Grow from "@material-ui/core/Grow";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import JobOffer from "./Job-offer-preview";
import AlertAbout from "../../Step1-Main-Info/alerts/Alert-About";
import { withStyles } from "@material-ui/core/styles";
import {deepPurple} from "@material-ui/core/colors";
import { setShowJobOffer } from "../../../../store/actions/stepOneActions";
import { useDispatch, useSelector } from "react-redux";

const PurpleSwitch = withStyles({
    switchBase: {
      color: deepPurple['A200'],
      "&$checked": {
        color: deepPurple['A700'],
      },
      "&$checked + $track": {
        backgroundColor: deepPurple['A700'],
      },
    },
    checked: {},
    track: {},
  })(Switch);

export default function JobOfferContainer(props) {
  const { showResults, showJobOffer } = useSelector(
    (state) => state.stepOneReducer
  );
const dispatch = useDispatch();
   
  const handleShowJobOffer = () => {
    showJobOffer ? dispatch(setShowJobOffer(false)) : dispatch(setShowJobOffer(true));
  };
  
  return (
    <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
    <FormControlLabel
      control={
        <PurpleSwitch
          checked={showJobOffer}
          onChange={() => handleShowJobOffer()}
        />
      }
      label='Podgląd ogłoszenia'
    />
    <Grow in={showJobOffer}>
      <Paper className='job-offer-container' elevation={0}>
        <JobOffer />
      </Paper>
    </Grow>
    {showResults && <AlertAbout />}
  </Grid>
  );
}

import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SearchBar from "./form/Job-Position-Search-Bar";
import SearchResults from "./form/Job-Position-Search-Results";
import JobOffer from "../common/job-offer/Job-offer";
import MainActionButtons from "../common/Main-Action-Buttons.jsx";
import AdditionalInformation from "./form/Additional-Information";
import "./Step1-Main-Info.css";
import AboutCompany from "./form/About.jsx";
import AlertAbout from "./alerts/Alert-About.jsx";
import Switch from "@material-ui/core/Switch";
import Grow from "@material-ui/core/Grow";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useDispatch, useSelector } from "react-redux";
import { setShowJobOffer } from "../../../store/actions/stepOneActions";

export default function Step1MainInfo(props) {
  const { showResults, showJobOffer } = useSelector((state) => state.stepOneReducer);
  const dispatch = useDispatch();

  const handleShowJobOffer = () => {
    showJobOffer ? dispatch (setShowJobOffer(false)) : dispatch (setShowJobOffer(true));
  };

  return (
    <Grid container className='step-1-container'>
      <Grid item xs={4} className='form-container'>
        <Typography
          variant='body2'
          style={{ color: "#00000099" }}
          gutterBottom
          component='div'>
          Obszar roboczy
        </Typography>
        <Paper className='form-container-box'>
          <SearchBar />

          {showResults && (
            <>
              <SearchResults />
              <AboutCompany />
              <AdditionalInformation />
              <MainActionButtons handleNext={props.handleMainStepperNext} />
            </>
          )}
        </Paper>
      </Grid>
      <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
        <FormControlLabel
          control={<Switch checked={showJobOffer} onChange={() => handleShowJobOffer()} />}
          label='Podgląd ogłoszenia'
        />
        <Grow in={showJobOffer}>
          <Paper className='job-offer-container' elevation={0}>
            <JobOffer />
          </Paper>
        </Grow>
        {showResults && <AlertAbout />}
      </Grid>
    </Grid>
  );
}

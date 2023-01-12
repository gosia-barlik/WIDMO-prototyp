import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import JobOffer from "../common/job-offer/Job-offer";
import Switch from "@material-ui/core/Switch";
import Grow from "@material-ui/core/Grow";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MainActionButtons from "../common/Main-Action-Buttons.jsx";
import DataProcessing from "./form/Data-Processing.jsx";
import OrganizationalData from "./form/Organizational-Data.jsx";
import "./Step3-Data-Processing.css";
import { useDispatch, useSelector } from "react-redux";
import { setShowJobOffer } from "../../../store/actions/stepOneActions";

export default function Step3DataProcessing(props) {
  const { showJobOffer } = useSelector((state) => state.stepOneReducer);
  const { rodo } = useSelector((state) => state.stepThreeReducer);
  const dispatch = useDispatch();

  const handleShowJobOffer = () => {
    showJobOffer
      ? dispatch(setShowJobOffer(false))
      : dispatch(setShowJobOffer(true));
  };

  return (
    <Grid className='step-1-container'>
      <Grid item xs={4} className='form-container'>
        <Typography
          variant='body2'
          style={{ color: "#00000099" }}
          gutterBottom
          component='div'>
          Obszar roboczy
        </Typography>
        <Paper className='form-container-box'>
          <DataProcessing />
          <OrganizationalData />
          <MainActionButtons
            handleBack={props.handleMainStepperBack}
            handleNext={props.handleMainStepperNext}
          />
        </Paper>
      </Grid>

      <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
        <FormControlLabel
          control={
            <Switch
              checked={showJobOffer}
              onChange={() => handleShowJobOffer()}
            />
          }
          label='Podgląd ogłoszenia'
        />
        <Grow in={showJobOffer}>
          <Paper className='job-offer-container'>
            <JobOffer activeStep={props.activeStep} RODO={rodo} />
          </Paper>
        </Grow>
      </Grid>
    </Grid>
  );
}

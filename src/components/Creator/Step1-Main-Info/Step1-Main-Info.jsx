import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SearchBar from "./form/Job-Position-Search-Bar";
import ActionButtons from "./form/Action-Buttons.jsx";
import AdditionalInformation from "./form/Additional-Information";
import "./Step1-Main-Info.css";
import AboutCompany from "./form/About.jsx";
import { MainInfoAPI } from "../../../api/mainInfoApi";
import { useDispatch, useSelector } from "react-redux";
import { setJobOfferId, setJobOffer } from "../../../store/actions/stepOneActions";

export default function Step1MainInfo(props) {
  const stepOneReducer = useSelector((state) => state.stepOneReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    stepOneReducer.isEdit && getMainInfo(stepOneReducer.jobOfferId);
  }, []);

  const sendMainInfo = async () => {
    if(stepOneReducer.jobOfferId)
      await MainInfoAPI.update(stepOneReducer)
    else {
      const jobOfferId = await MainInfoAPI.create(stepOneReducer);
      dispatch(setJobOfferId(jobOfferId));
    }
  };
  
  const getMainInfo = async (jobOfferId) => {
      const jobOffer = await MainInfoAPI.get(jobOfferId);
      dispatch(setJobOffer(jobOffer));
  };

  return (
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

        {stepOneReducer.showResults && (
          <>
            <AboutCompany />
            <AdditionalInformation />
            <ActionButtons
              onSubmit = { sendMainInfo }
              handleNext = { props.handleMainStepperNext }
            />
          </>
        )}
      </Paper>
    </Grid>
  );
}

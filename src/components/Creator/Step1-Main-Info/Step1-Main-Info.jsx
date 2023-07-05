import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SearchBar from "./form/Job-Position-Search-Bar";
import ActionButtons from "./form/Action-Buttons.jsx";
import AdditionalInformation from "./form/Additional-Information";
import "./Step1-Main-Info.css";
import AboutCompany from "./form/About.jsx";
import {useDispatch, useSelector } from "react-redux";
import { horizontalStepForward } from "../../../store/actions/stepperActions.js";
import { MainInfoAPI } from "../../../api/mainInfoApi";
import { setJobOfferId, setJobOffer, setSearchedPosition, setShowResults, setIsEdit } from "../../../store/actions/stepOneActions";
import { useParams } from "react-router-dom";

export default function Step1MainInfo(props) {
  const stepOneReducer = useSelector((state) => state.stepOneReducer);
  const { jobOffer, companyLogo } = useSelector((state) => state.stepOneReducer);
  const dispatch = useDispatch();
  const handleNext = () => {dispatch(horizontalStepForward())}
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState("Pole obowiązkowe");

  useEffect(() => {
    if(props.isEdit){
      getMainInfo(id);
    }
  }, []);

  const sendMainInfo = async () => {
    if(jobOffer.jobOfferId)
      await MainInfoAPI.update(jobOffer)
    else {
      const jobOfferId = await MainInfoAPI.create(jobOffer);
      dispatch(setJobOfferId(jobOfferId));
    };
    await MainInfoAPI.updateLogo(companyLogo, jobOffer.jobOfferId);
    handleNext();
  };
  
  const getMainInfo = async (jobOfferId) => {
      const jobOfferResponse = await MainInfoAPI.get(jobOfferId);
      dispatch(setJobOffer(jobOfferResponse));
      dispatch(setIsEdit(true));//TOOD:: przenisc do komponentu wyzej
      dispatch(setShowResults(true));
      dispatch(setSearchedPosition(jobOfferResponse.positionName));
  };

  const onFileUpload = () => {
    // const formData = new FormData();
    // formData.append("myFile", logo, logo.name);
    // axios.post("api/uploadfile", formData);
  };

  return (
    <Grid item xs={6} className='form-container'>
      <Typography
        variant='body2'
        style={{ color: "#00000099" }}
        gutterBottom
        component='div'>
        Obszar roboczy
      </Typography>
      <Paper className='form-container-box'>
        <SearchBar searchedPosition = {stepOneReducer.searchedPosition} />

        {stepOneReducer.showResults && (
          <>
            <AboutCompany 
              // setCompanyLogo={setCompanyLogo} 
              // companyLogo={companyLogo} 
            />
            <AdditionalInformation />
            <ActionButtons
              onSubmit = { sendMainInfo }
            />
          </>
        )}
      </Paper>
    </Grid>
  );
}

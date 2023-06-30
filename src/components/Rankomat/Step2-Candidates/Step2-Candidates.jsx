import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MainActionButtons from "../common/MainActionButtons";
import Step2Dropzone from "./Step2-Dropzone";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../config";
import "./Step2-Candidates.css";

export default function Step2Candidates(props) {
  const { resumes } = useSelector((state) => state.rankomatStepTwoReducer);

  const convertToBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    }).then((result) => {
     
      return result;
    }
    );
  };

  const handleCvUpload = (e) => {
    e.preventDefault();
    const url = `${config.NER_BASE_URL}/ner_text/`;
    const resumes_base64 = resumes.map(async (resume) => {  
      await convertToBase64(resume)
        .then((result) => { return result });
    });
console.log(resumes_base64);
    resumes_base64.forEach((resume) => 
      fetch(url, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify({
        analysis_id: "test",
        cv_base64: resume,
      }), 
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .catch((error) => {
        console.log(error);
      })
    );
  };



  return (
    <Grid container spacing={4} className='rankomat-step-1-container'>
      <Grid
        item
        xs={10}
        className='rankomat-step-1-container-box'
        style={{ textAlign: "left" }}>
        <Typography variant='body2' gutterBottom component='div'>
          Wprowadź <span style={{ fontWeight: "700" }}>CV</span> kandydatów,
          które chciałbyś przeanalizować
        </Typography>
        <Step2Dropzone />
        <Button
          className='button-contained'
          variant='contained'
          onClick={handleCvUpload}>
          Zatwierdź
        </Button>
        <MainActionButtons
          handleBack={props.handleStepperBack}
          handleNext={props.handleStepperNext}
        />
      </Grid>
    </Grid>
  );
}

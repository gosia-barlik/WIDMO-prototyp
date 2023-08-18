import { React, ChangeEvent, useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import ActionButtons from "./Action-Buttons";
import DoneIcon from "@material-ui/icons/Done";
import "./Step1-Job-Offer.css";
import { setJobOffer } from "../../../store/actions/rankomatActions/rankomatStepOneActions";
import { useDispatch } from "react-redux";

const Input = styled("input")({
  display: "none",
});

export default function Step1JobOffer(props) {
  const [jobOffer, setJobOffer] = useState(null); 
  const [file, setFile] = useState(null);
  const [jobOfferSource, setJobOfferSource] = useState("");

  const dispatch = useDispatch();

  const onSetJobOffer = (newJobOffer) => dispatch(setJobOffer(newJobOffer));

  const {hiddenFileInput, hiddenJobOfferInput}= useRef(null);
  

  const handleFileInput = (event) => {
    hiddenFileInput.current.click();
  };
  const handleJobOfferInput = (event) => {
    hiddenJobOfferInput.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setJobOfferSource("file");
    }
  };
  const handleJobOfferChange = (e) => {
    if (e.target.files) {
      setJobOffer(e.target.files[0]);
      setJobOfferSource("database");
      console.log(jobOfferSource);
    }
  };

  const handleFileUpload = () => {
    if (!file && !jobOffer) {
      return;
    }

    fetch("https://httpbin.org/post", {
      method: "POST",
      body: file,
      headers: {
        "content-type": file.type,
        "content-length": `${file.size}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <Grid container spacing={4} className='rankomat-step-1-container'>
      <Grid item xs={10} className='rankomat-step-1-container-box'>
        <Typography
          variant='body2'
          gutterBottom
          component='div'
          style={{ lineHeight: "1.5rem" }}>
          Wprowadź{" "}
          <span style={{ fontWeight: "700" }}> ogłoszenie o pracę,</span> pod
          kątem którego chciałbyś analizować CV
        </Typography>
        <Typography
          variant='body2'
          gutterBottom
          component='div'
          style={{ marginTop: "24px" }}>
          1.
          <label htmlFor='contained-button-file'>
          <Button
              variant='outlined'
              component='span'
              className='button-outlined upload-button'
              style={{ marginTop: "0" }}
              onClick={handleJobOfferInput}>
              Wybierz ze swoich ogłoszeń
            </Button>
            <Input
              accept='image/*'
              id='contained-button-file'
              multiple
              type='file'
              ref={hiddenJobOfferInput}
              onChange={handleJobOfferChange}
            />
            <div
              style={{
                display: "inline-block",
                margin: "10px",
                background: "white",
                padding: "0 8px",
                borderRadius: "4px",
              }}>
              {jobOffer && `${jobOffer.name}`}{" "}
            </div>
          </label>
          lub
        </Typography>
        <Typography
          variant='body2'
          gutterBottom
          component='div'
          style={{ marginTop: "24px" }}>
          2.
          <label htmlFor='contained-button-file'>
            <Button
              variant='outlined'
              component='span'
              className='button-outlined upload-button'
              style={{ marginTop: "0" }}
              onClick={handleFileInput}>
              Wybierz z dysku
            </Button>
            <Input
              accept='image/*'
              id='contained-button-file'
              type='file'
              ref={hiddenFileInput}
              onChange={handleFileChange}
            />
            <div
              style={{
                display: "inline-block",
                margin: "10px",
                background: "white",
                padding: "0 8px",
                borderRadius: "4px",
              }}>
              {file && `${file.name}`}{" "}
            </div>
          </label>
          lub
        </Typography>
        <Typography
          variant='body2'
          gutterBottom
          component='div'
          style={{ marginTop: "24px" }}>
          3. Wpisz albo wklej tekst w pole tekstowe znajdujące się poniżej
        </Typography>
        <TextareaAutosize
          onChange={(e) => onSetJobOffer(e.target.value)}
          aria-label='minimum height'
          minRows={3}
          placeholder='Tu wklej tekst ogłoszenia o pracę ...'
        />
        <Button
          className='button-contained'
          variant='contained'
          disabled={!file}
          onClick={handleFileUpload}
          endIcon={<DoneIcon />}>
          Zatwierdź
        </Button>
        <ActionButtons
          // onSubmit={() => props.onSubmit(jobOfferSource)}
          handleNext={props.handleStepperNext}
        />
      </Grid>
    </Grid>
  );
}

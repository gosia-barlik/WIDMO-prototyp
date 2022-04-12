import React from "react";
import Typography from "@mui/material/Typography";
import CustomizedInput from "./Customized-Input";
import { useDispatch } from "react-redux";
import { setCertificateName, 
  setCertificateStage, 
  setEducationLevel, 
  setStudiesName, 
  setStudiesStage } from "../../../../../store/actions/stepTwoActions";

export default function EducationExperience(props) {
  const dispatch = useDispatch();

  const educationLabel = "Poziom wykształcenia";
  const educationLevel = ["podstawowe", "średnie", "zawodowe", "wyższe"];

  const studiesLabel = "Nazwa kierunku";
  const studiesName = ["Technik pojazdów samochodowych", "Technik mechanik"];

  const stageLabel = "Etap";
  const stage = ["ukończone", "w trakcie", "rozpoczęte"];

  const certificateLabel = "Cetyfikat";
  const certificateName = ["Mechanik Pojazdów Samochodowych", "Technik mechanik"];

  const stageCertificateLabel = "Etap";
  const stageCertificate = ["ukończone", "w trakcie", "rozpoczęte"]

  const onSetEducationLevel = (e) => { dispatch(setEducationLevel(e))};
  const onSetStudiesName = (e) => dispatch(setStudiesName(e));
  const onSetStudiesStage = (e) => dispatch(setStudiesStage(e));
  const onSetCertificateName = (e) => dispatch(setCertificateName(e));
  const onSetCertificateStage = (e) => dispatch(setCertificateStage(e));
  
  return (
    <>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Edukacja formalna
      </Typography>

      <CustomizedInput
        label={educationLabel}
        options={educationLevel}
        onSetEducationLevel={onSetEducationLevel}
      />
      <CustomizedInput
        label={studiesLabel}
        options={studiesName}
        onSetStudiesName={onSetStudiesName}
      />
      <CustomizedInput
        label={stageLabel}
        options={stage}
        onSetStudiesStage={onSetStudiesStage}
      />

      <Typography variant='subtitle2' gutterBottom component='div' style={{marginTop:'18px'}}>
        Edukacja nieformalna/certyfikaty/uprawnienia
      </Typography>

      <CustomizedInput
        label={certificateLabel}
        options={certificateName}
        onSetCertificateName={onSetCertificateName}
      />
      <CustomizedInput
        label={stageCertificateLabel}
        options={stageCertificate}
        onSetCertificateStage={onSetCertificateStage}
      />
    </>
  );
}

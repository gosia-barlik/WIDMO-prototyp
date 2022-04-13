import React from "react";
import Typography from "@mui/material/Typography";
import CustomizedInput from "./Customized-Input";
import { useDispatch, useSelector } from "react-redux";
import { setCertificateName, 
  setCertificateStage, 
  setEducationLevel, 
  setStudiesName, 
  setStudiesStage } from "../../../../../store/actions/stepTwoActions";

export default function EducationExperience(props) {
  const dispatch = useDispatch();
  const { educationLevel, studiesName, studiesStage, certificateName, certificateStage } = useSelector((state) => state.stepTwoReducer);

  const educationLabel = "Poziom wykształcenia";
  const educationLevelFixture = ["podstawowe", "średnie", "zawodowe", "wyższe"];

  const studiesLabel = "Nazwa kierunku";
  const studiesNameFixture = ["Technik pojazdów samochodowych", "Technik mechanik"];

  const stageLabel = "Etap";
  const stageFixture = ["ukończone", "w trakcie", "rozpoczęte"];

  const certificateLabel = "Cetyfikat";
  const certificateNameFixture = ["Mechanik Pojazdów Samochodowych", "Technik mechanik"];

  const stageCertificateLabel = "Etap";
  const stageCertificateFixture = ["ukończone", "w trakcie", "rozpoczęte"]

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
        options={educationLevelFixture}
        value={educationLevel}
        onSetEducationLevel={onSetEducationLevel}
      />
      <CustomizedInput
        label={studiesLabel}
        options={studiesNameFixture}
        value={studiesName}
        onSetStudiesName={onSetStudiesName}
      />
      <CustomizedInput
        label={stageLabel}
        options={stageFixture}
        value={studiesStage}
        onSetStudiesStage={onSetStudiesStage}
      />

      <Typography variant='subtitle2' gutterBottom component='div' style={{marginTop:'18px'}}>
        Edukacja nieformalna/certyfikaty/uprawnienia
      </Typography>

      <CustomizedInput
        label={certificateLabel}
        options={certificateNameFixture}
        value={certificateName}
        onSetCertificateName={onSetCertificateName}
      />
      <CustomizedInput
        label={stageCertificateLabel}
        options={stageCertificateFixture}
        value={certificateStage}
        onSetCertificateStage={onSetCertificateStage}
      />
    </>
  );
}

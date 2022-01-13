import React from "react";
import Typography from "@mui/material/Typography";
import CustomizedInput from "./Customized-Input";

export default function EducationExperience(props) {
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


  return (
    <>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Edukacja formalna
      </Typography>

      <CustomizedInput
        label={educationLabel}
        options={educationLevel}
        onSetEducationLevel={props.onSetEducationLevel}
      />
      <CustomizedInput
        label={studiesLabel}
        options={studiesName}
        onSetStudiesName={props.onSetStudiesName}
      />
      <CustomizedInput
        label={stageLabel}
        options={stage}
        onSetStudiesStage={props.onSetStudiesStage}
      />

      <Typography variant='subtitle2' gutterBottom component='div' style={{marginTop:'18px'}}>
        Edukacja nieformalna/certyfikaty/uprawnienia
      </Typography>

      <CustomizedInput
        label={certificateLabel}
        options={certificateName}
        onSetCertificateName={props.onSetCertificateName}
      />
      <CustomizedInput
        label={stageCertificateLabel}
        options={stageCertificate}
        onSetCertificateStage={props.onSetCertificateStage}
      />
    </>
  );
}

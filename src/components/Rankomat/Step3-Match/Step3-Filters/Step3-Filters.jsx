import React from "react";
import Typography from "@mui/material/Typography";
import CustomizedInput from "./Customized-Input";

export default function Step3Filters(props) {
  const qualificationLabel = "Posiada kwalifikację";
  const qualificationName = [
    "j.angielski",
    "zarządzanie cyberbezpieczeństwem",
    "zarządzanie zespołem",
    "zapobiega zagrożeniom",
  ];

  const experienceLabel = "Doświadczenie";
  const experienceLevel = [
    "mniej niż rok",
    "przynajmniej 1 rok",
    "przynajmniej 2 lata",
    "przynajmniej 3 lata",
    "przynajmniej 5 lat",
    "przynajmniej 7 lat",
    "10 lat i więcej",
  ];

  const positionLabel = "Stanowisko";
  const position = ["specjalista", "audytor", "analityk"];

  const companyLabel = "Firma";
  const companyName = ["Samsung", "Allegro"];

  const keyWordLabel = "Słowo kluczowe";
  const keyWord = ["IPS", "technologie DLP", "PKI", "AZURE/MS365"];

  return (
    <>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Filtry zaawansowane
      </Typography>

      <CustomizedInput
        label={qualificationLabel}
        options={qualificationName}
        onSetQualificationName={props.onSetQualificationName}
      />
      <CustomizedInput
        label={experienceLabel}
        options={experienceLevel}
        onSetExperienceLevel={props.onSetExperienceLevel}
      />
      <CustomizedInput
        label={positionLabel}
        options={position}
        onSetPosition={props.onSetPosition}
      />
      <CustomizedInput
        label={companyLabel}
        options={companyName}
        onSetCompanyName={props.onSetCompanyName}
      />
          <CustomizedInput
        label={keyWordLabel}
        options={keyWord}
        onSetKeyWord={props.onSetKeyWord}
      />
    </>
  );
}

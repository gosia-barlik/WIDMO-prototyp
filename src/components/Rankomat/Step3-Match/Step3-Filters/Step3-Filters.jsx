import React from "react";
import Typography from "@mui/material/Typography";
import CustomizedInput from "./Customized-Input";
import { FormControlLabel, FormGroup, Checkbox } from "@material-ui/core";
import Button from "@mui/material/Button";

export default function Step3Filters(props) {
  const [checked, setChecked] = React.useState([]);
  let checkboxes = [
    {
      name: "Professional skill",
      value: "professional skill",
      id: 0,
      label: "Umiejętności twarde",
    },
    {
      name: "Soft skill",
      value: "soft skill",
      id: 1,
      label: "Umiejętności miękkie",
    },
    {
      name: "Language skill",
      value: "language skill",
      id: 2,
      label: "Umiejętności językowe",
    },
    {
      name: "Education",
      value: "education",
      id: 3,
      label: "Edukacja",
    },
    {
      name: "Experience",
      value: "experience",
      id: 4,
      label: "Doświadczenie",
    },
    {
      name: "Certificates",
      value: "certificates",
      id: 5,
      label: "Certyfikaty",
    },
    {
      name: "Job-position",
      value: "job-position",
      id: 6,
      label: "Nazwa stanowiska",
    },
    {
      name: "Company-name",
      value: "company-name",
      id: 7,
      label: "Nazwa firmy",
    },
  ];

  const keyWordLabel = "Słowo kluczowe";
  const keyWord = ["IPS", "technologie DLP", "PKI", "AZURE/MS365"];

  const handleToggle = (checkbox) => () => {
    const currentIndex = checked.indexOf(checkbox.id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(checkbox.id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    console.log(newChecked);
    console.log(checkbox.value);

  };

  return (
    <>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Filtry zaawansowane
      </Typography>

      <FormGroup row className='o-form checkbox-container'>
        {checkboxes.map((checkbox) => (
          <FormControlLabel
          key={checkbox.value}
          className={`filters-checkbox-${checkbox.id}`}
            control={
              <Checkbox
                name={checkbox.name}
                value={checkbox.value}
                id={checkbox.id.toString()}
                color='primary'
                onChange={handleToggle(checkbox)}
                checked={checked.indexOf(checkbox.id) !== -1}
              />
            }
            label={checkbox.label}
          />
        ))}
      </FormGroup>

      {/*<CustomizedInput
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
      /> */}
      <CustomizedInput
        label={keyWordLabel}
        options={keyWord}
        onSetKeyWord={props.onSetKeyWord}
      />
      <Button variant='contained' className='button-contained' style={{marginLeft:"40%", marginTop:"20px"}}>
        Filtruj
      </Button>
    </>
  );
}

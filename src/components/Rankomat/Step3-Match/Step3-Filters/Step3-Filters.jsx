import React from "react";
import Typography from "@mui/material/Typography";
import CustomizedInput from "./Customized-Input";
import { FormControlLabel, FormGroup, Checkbox } from "@material-ui/core";
import { alpha, withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 12,
    maxWidth: 80,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Segoe UI"',
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

export default function Step3Filters(props) {
  const [checked, setChecked] = React.useState([]);
  const [weight, setWeight] = React.useState('');

 
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
  
  const handleChange = (event) => {
    setWeight(event.target.value);
  };

  const handleToggle = (checkbox) => () => {
    const currentIndex = checked.indexOf(checkbox.id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(checkbox.id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    console.log(checkbox.value);
  };

  return (
    <>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Filtry zaawansowane
      </Typography>

      {checkboxes.map((checkbox) => (
        <FormGroup row className='o-form checkbox-container'>
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
          <FormControl sx={{ m: 1 }} variant='standard'>
            <InputLabel>Waga</InputLabel>
            <Select
              id={`filters-weight-${checkbox.id}`}
              value={weight}
              onChange={handleChange}
              input={<BootstrapInput />}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </FormGroup>
      ))}

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
      <Button
        variant='contained'
        className='button-contained'
        style={{ marginLeft: "40%", marginTop: "20px" }}>
        Filtruj
      </Button>
    </>
  );
}

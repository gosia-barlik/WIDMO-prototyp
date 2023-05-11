import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@mui/material/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import DoneIcon from "@material-ui/icons/Done";
import Typography from "@mui/material/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchedPosition,
  setShowResults,
} from "../../../../store/actions/stepOneActions";
import {
  setResponsibilities,
  setResponsibilitiesToHtml,
  setRequirements,
  setRequirementsToHtml,
  setBenefits,
  setBenefitsToHtml,
} from "../../../../store/actions/stepTwoActions";
import { jobPositionSchema } from "../../common/validations/stepOneSchema";


const responsibilitiesFixture = [
  "diagnozowanie usterek mechanicznych",
  "wykonywanie napraw",
  "bieżące usuwanie awarii i usterek",
];

const requirementsFixture = [
  "wiedza z zakresu mechaniki/elektromechaniki",
  "wykształcenie zawodowe lub średnie techniczne",
  "dobra organizacja pracy własnej oraz umiejętność pracy w zespole",
];

const benefitsFixture = ["benefit1", "benefit2", "benefit3"];

export default function SearchBar(props) {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("Pole obowiązkowe");

  const dispatch = useDispatch();

  const { searchedPosition } = useSelector((state) => state.stepOneReducer);

  const { responsibilities, requirements, benefits } = useSelector(
    (state) => state.stepTwoReducer
  );

  const onSetResponsibilities = (e) => {
    let newResponsibilities;
    if (responsibilities.length > 0) newResponsibilities = [];
    else newResponsibilities = responsibilitiesFixture;

    const responsibilitiesToHtml = `<ul>
      ${newResponsibilities.map(
        (responsibility) => `<li key=${responsibility}>${responsibility}</li>`
      )}
    </ul> `;

    dispatch(setResponsibilities(newResponsibilities));
    dispatch(setResponsibilitiesToHtml(responsibilitiesToHtml));
  };

  const onSetRequirements = () => {
    let newRequirements;
    if (requirements.length === 0) newRequirements = requirementsFixture;
    else newRequirements = [];

    const requirementsToHtml = `<ul>
     ${newRequirements.map(
       (requirement) => `<li key=${requirement}>${requirement}</li>`
     )}
    </ul> `;

    dispatch(setRequirements(newRequirements));
    dispatch(setRequirementsToHtml(requirementsToHtml));
  };

  const onSetBenefits = () => {
    let newBenefits;
    if (benefits.length > 0) newBenefits = [];
    else newBenefits = benefitsFixture;

    const benefitsToHtml = `<ul>
     ${newBenefits.map((benefit) => `<li key=${benefit}>${benefit}</li>`)}
    </ul> `;

    dispatch(setBenefits(newBenefits));
    dispatch(setBenefitsToHtml(benefitsToHtml));
  };

  useEffect(() => {
    // Set errorMessage only if text is equal or bigger than MAX_LENGTH
    if (text.length >= jobPositionSchema.MAX_LENGTH) {
      setErrorMessage("Przekroczono dopuszczalną liczbę znaków");
    }
  }, [text]);

  useEffect(() => {
    // Set empty erroMessage only if text is less than MAX_LENGTH
    // and errorMessage is not empty.
    // avoids setting empty errorMessage if the errorMessage is already empty
    if (text.length < jobPositionSchema.MAX_LENGTH && errorMessage) {
      setErrorMessage("Pole obowiązkowe");
    }
  }, [text, errorMessage]);

  const handleInputChange = (e) => {
    dispatch(setSearchedPosition(e.target.value));
    setText(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (text.length < jobPositionSchema.MAX_LENGTH) {
      dispatch(setSearchedPosition(searchedPosition));
      dispatch(setShowResults(true));
    }
    onSetBenefits();
    onSetResponsibilities();
    onSetRequirements();
  };

  return (
    <Paper style={{ padding: "24px" }}>
      <Typography variant='h6' gutterBottom component='div'>
        Stanowisko
      </Typography>

      <form
        onSubmit={handleSearch}
        sx={{ display: "flex", flexDirection: "row" }}>
        <TextField
          spellCheck='true'
          error={text.length >= jobPositionSchema.MAX_LENGTH}
          helperText={errorMessage}
          required
          fullWidth
          variant='outlined'
          size='small'
          id='searchPosition'
          name='searchPosition'
          sx={{ ml: 1, flex: 1 }}
          placeholder='szukam osoby na stanowisko...'
          onChange={handleInputChange}
          style={{ fontSize: "14px", marginBottom: "24px" }}
        />

        {searchedPosition && (
          <Button
            type='submit'
            variant='contained'
            color='primary'
            endIcon={<DoneIcon />}>
            Zatwierdź
          </Button>
        )}

        {searchedPosition == false && (
          <Button
            type='submit'
            variant='contained'
            color='primary'
            disabled
            endIcon={<DoneIcon />}>
            Zatwierdź
          </Button>
        )}

        {/* <IconButton
          type='submit'
          sx={{ p: "10px", fontSize: "14px" }}
          aria-label='search'>
          <SearchIcon /> 
        </IconButton> */}
      </form>
    </Paper>
  );
}

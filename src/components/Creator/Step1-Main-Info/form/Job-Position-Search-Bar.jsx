import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@mui/material/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import DoneIcon from "@material-ui/icons/Done";
import Typography from "@mui/material/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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

const jobPositionsFixture = [
  "Specjalista ds. Marketingu",
  "Dyrektor ds. Marketingu",
  "Asystent ds. marketingu",
  "Specjalista ds. e-commerce",
  "Asystent ds. promocji",
  "Specjalista ds. badań rynku",
  "Specjalista ds. planowania mediów",
  "Specjalista ds. mediów społecznościowych",
  "Specjalista ds. marketingu cyfrowego",
  "Menedżer marki",
  "Kierownik ds. marketingu",
  "Kierownik ds. produktu",
];

const responsibilitiesFixture = [
  "Opracowywanie planów mediów",
  "Realizowanie kampanii reklamowych",
  "Opracowywanie harmonogramów na potrzeby mediów",
  "Organizowanie działań w zakresie employer branding",
  "Udział w tworzeniu strategii dla klientów",
  "Budowanie i utrzymywanie relacji z klientami",
  "Planowanie i tworzenie treści",
  "Redagowanie i przygotowywanie informacji do zamieszczenia w serwisach internetowych",
];

const requirementsFixture = [
  "Doświadczenie zawodowe w obszarze planowania różnych mediów/ marketingu i zarządzania projektami",
  "Doświadczenie zawodowe w tworzeniu i prowadzeniu profili w mediach społecznościowych",
  "Wiedza z obszarów zakupów, planowania i analizy mediów",
  "Umiejętność obsługi  narzędzi do publikacji postów w social media",
  "Znajomość modeli rozliczeń z reklamodawcami",
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
    setText(e.target.value);
    dispatch(setSearchedPosition(e.target.value));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (text.length < jobPositionSchema.MAX_LENGTH) {
      console.log("searchedPosition", searchedPosition);
      dispatch(setSearchedPosition(searchedPosition));
      dispatch(setShowResults(true));
    }
    console.log("searchedPosition", searchedPosition);
    onSetBenefits();
    onSetResponsibilities();
    onSetRequirements();
  };

  return (
    <Paper style={{ padding: "24px" }}>
      <Typography variant='h6' gutterBottom component='div'>
        Stanowisko
      </Typography>
      <Typography variant='body1'component='div'>
        Wybierz nazwę stanowiska, na które prowadzisz rekrutację
      </Typography>

      <form
        onSubmit={handleSearch}
        sx={{ display: "flex", flexDirection: "row" }}>
        {/* <InputLabel id='searchPosition'>stanowisko</InputLabel> */}
        <Select
          spellCheck='true'
          error={text.length >= jobPositionSchema.MAX_LENGTH}
          helperText={errorMessage}
          required
          fullWidth
          labelId='searchPosition'
          variant='outlined'
          id='searchPosition'
          value={text}
          style={{ minWidth: "400px" }}
          onChange={handleInputChange}
       >
          {jobPositionsFixture.map((jobPosition) => (
            <MenuItem value={jobPosition} style={{ minWidth: "400px" }}>
              {jobPosition}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{errorMessage}</FormHelperText>

        <Button
          type='submit'
          variant='contained'
          color='primary'
          disabled={!searchedPosition}
          endIcon={<DoneIcon />}>
          Zatwierdź
        </Button>
      </form>

      {/* <form
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

        {searchedPosition == false && (
          <Button
            type='submit'
            variant='contained'
            color='primary'
            disabled={!searchedPosition}
            endIcon={<DoneIcon />}>
            Zatwierdź
          </Button>
        )}
      </form> */}
    </Paper>
  );
}

import { React, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CvList from "./Step3-Cv-List";
import MainActionButtons from "../common/MainActionButtons";
import Step3Filters from "./Step3-Filters/Step3-Filters";
import config from "../../../config";
import { useEffect } from "react";
import CvPreview from "./Step3-Cv-Preview/Step3-Cv-Preview";
import CvDetails from "./Step3-Cv-Preview/Step3-Cv-Details";
import "./Step3-Match.css";
import { ContactSupportOutlined } from "@material-ui/icons";

export default function Step3Match(props) {
  const [text, setText] = useState("");
  const [annotatedText, setAnnotatedText] = useState("");
  const [response, setResponse] = useState([]);
  const [annotations, setAnnotations] = useState({
    "IT skill": true, //TODO: zamienić na zwracane z backendu code-namy
    Company: true,
    Education: true,
    Experience: true,
    Certificate: true,
    "Language skill": true,
    "Occupation name": true,
    "Professional skill": true,
    "Soft skill": true,
  });
  // const [skills, setSkills] = useState([]);

  // ADD SPLICE TO STRING PROTOTYPE
  useEffect(() => {
    String.prototype.splice = function (idx, rem, str) {
      return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
    };
  }, []);

  useEffect(() => {
    if (response.length > 0 && text.length > 0) addHighlightedLabels();
  }, [response, text]);

  const handleOnClick = (e) => {
    e.preventDefault();
    const url = `${config.NER_BASE_URL}/ner_text/`;
    fetch(url, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify({
        text: "Wykształcenie: - 1997 – 2002 - Politechnika Poznańska Wydział Architektury i Urbanistyki ukończone z tytułem magister inżynier architekt- 1993-1997 - Liceum Ogólnokształcące nr 12 w Poznaniu Kwalifikacje: - uprawnienia budowlane do projektowania bez ograniczeń w specjalności architektonicznej - znajomość przepisów z zakresu prawa budowlanego, warunków technicznych, kpa oraz procesów prawnych towarzyszących projektowaniu i realizacji inwestycji - znajomość obsługi komputera (pakiet Office) - znajomość komputerowych programów wspomagających projektowanie: Autocad, Nemtschek - znajomość komputerowych programów graficznych: Corel Draw, Photoshop - prawo jazdy kat. B Doświadczenie: - II.2012-obecnie – projektant API Sp. z o.o. Zakres obowiązków: prowadzenie i przygotowanie projektów we wszystkich stadiach dla inwestycji centra handlowe - III.2007-I.2012 – projektant Spółka Projektowania Architektonicznego Sadowski, Sadowska Zakres obowiązków: prowadzenie i przygotowanie projektów we wszystkich stadiach dla inwestycji użyteczności publicznej Predyspozycje zawodowe:- dokładność, samodyscyplina - łatwość w nawiązywaniu kontaktów-bezkonfliktowa praca w zespole",
      }), //TODO::text from CV will be send here
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setText(data.text);
        sortLabels(data.entities);
        setResponse(data.entities);
      });
  };

  const sortLabels = (data) => {
    data.sort((a, b) =>
      a.start_char > b.start_char ? 1 : b.start_char > a.start_char ? -1 : 0
    );
  };

  const getClass = (annotation) => {
    //all classes names must be the same length
    switch (annotation.label) {
      case "IT skill":
        return "itskill";

      case "Company":
        return "company";

      case "Soft skill":
        return "softskl";

      case "Professional skill":
        return "profskl";

      case "Language skill":
        return "langskl";

      case "Experience":
        return "experce";

      case "Education":
        return "educatn";

      case "Occupation name":
        return "ocupnam";

      case "Certificate":
        return "certifi";
    }
  };

  const highlightLabels = (annotation, i, baseText) => {
    const startSpan = `<span class="${getClass(annotation)}" id="${i + 1000}">`;
    const endSpan = `</span>`;
    const spansLength = (startSpan.length + endSpan.length) * i;
    const startPosition = annotation.start_char + spansLength;
    const endPosition =
      startPosition + (annotation.end_char - annotation.start_char);
    const newStr = baseText.splice(endPosition, 0, endSpan);
    let endStr = newStr.splice(startPosition, 0, startSpan);
    return endStr;
  };

  const addHighlightedLabels = () => {
    let i = 0;
    let baseText = text;
    response.map((annotation) => {
      if (annotations[annotation.label]) {
        baseText = highlightLabels(annotation, i, baseText);
        i++;
      }
    });

    setAnnotatedText(baseText);
    console.log(baseText);
  };

  return (
    <>
      <Grid container spacing={4} className='rankomat step-1-container'>
        {response.length == 0 && (
          <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
            <Typography variant='subtitle2' gutterBottom component='div'>
              Lista życiorysów
            </Typography>
            <Paper className='form-container'>
              <CvList resumes={props.resumes} handleOnClick={handleOnClick} />
            </Paper>
            <MainActionButtons
              handleBack={props.handleStepperBack}
              handleNext={props.handleStepperNext}
            />
          </Grid>
        )}

        {response.length !== 0 && (
          <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
            <Typography variant='subtitle2' gutterBottom component='div'>
              Widok szczegółowy
            </Typography>
            <Paper className='form-container'>
              <CvPreview text={annotatedText}></CvPreview>
            </Paper>
          </Grid>
        )}

        {response.length == 0 && (
          <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
            <Typography variant='subtitle2' gutterBottom component='div'>
              Filtry
            </Typography>
            <Paper className='job-offer-container'>
              <Step3Filters
                onSetQualificationName={props.onSetQualificationName}
                onSetExperienceLevel={props.onSetExperienceLevel}
                onSetPosition={props.onSetPosition}
                onSetCompanyName={props.onSetCompanyName}
                onSetKeyWord={props.onSetKeyWord}
              />
            </Paper>
          </Grid>
        )}

        {response.length !== 0 && (
          <Grid item xs={4} style={{ marginTop: "50px", textAlign: "left" }}>
            <Typography variant='subtitle2' gutterBottom component='div'>
              Statystyki
            </Typography>
            <Paper className='job-offer-container'>
              <CvDetails response={response} />
            </Paper>
          </Grid>
        )}
      </Grid>
    </>
  );
}

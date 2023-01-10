import { React, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CvList from "./Step3-Analysis-Box/Step3-Cv-List";
import MainActionButtons from "../common/MainActionButtons";
import Step3Filters from "./Step3-Filters/Step3-Filters";
import config from "../../../config";
import { useEffect } from "react";

import CvPreview from "./Step3-Cv-Details/Step3-Cv-Preview";
import CvQualifications from "./Step3-Cv-Details/Step3-Cv-Qualifications";
import AnalysisSidebar from "./Step3-Analysis-Box/Step3-Analysis-Sidebar";
import AnalysisTopbar from "./Step3-Analysis-Box/Step3-Analysis-Topbar";
import "./Step3-Match.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setKeyword,
  setResumes,
} from "../../../store/actions/rankomatActions/rankomatStepTwoActions";

import {
  setFavorites,
  setAll,
  setReserves,
  setRejected,
  setSelected,
  setChecked,
} from "../../../store/actions/rankomatActions/rankomatStepThreeActions";
import CVDetails from "./Step3-Cv-Details/Step3-Cv-Details";

export default function Step3Match(props) {
  const [text, setText] = useState("");
  const [annotatedText, setAnnotatedText] = useState("");
  const [response, setResponse] = useState([]);
  const [sortedResponse, setSortedResponse] = useState([]);
  const [professionalSkills, setProfessionalSkills] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);
  const [languageSkills, setLanguageSkills] = useState([]);
  const [itSkills, setItSkills] = useState([]);
  const [education, setEducation] = useState([]);
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
  const [open, setOpen] = useState(false);
  const topbarMenuAll = ["Wybrane", "Rezerwowe", "Odrzucone"];
  const topbarMenuFavorites = ["Wszystkie", "Rezerwowe", "Odrzucone"];
  const topbarMenuReserves = ["Wybrane", "Wszystkie", "Odrzucone"];
  const topbarMenuRejected = ["Wybrane", "Rezerwowe", "Wszystkie"];

  const { resumes } = useSelector((state) => state.rankomatStepTwoReducer);
  const {
    all,
    favorites,
    rejected,
    reserves,
    selected,
    showAll,
    showReserves,
    showFavorites,
    showRejected,
  } = useSelector((state) => state.rankomatStepThreeReducer);
  const dispatch = useDispatch();

  const onSetKeyWord = (newKeyWord) => dispatch(setKeyword(newKeyWord));

  // ADD SPLICE TO STRING PROTOTYPE
  useEffect(() => {
    String.prototype.splice = function (idx, rem, str) {
      return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
    };
  }, []);

  useEffect(() => {
    if (response.length > 0 && text.length > 0) addHighlightedLabels();
  }, [response, text]);

  const handleDetailOpen = () => {
    setOpen(true);
  };
  const handleDetailClose = () => {
    setOpen(false);
  };

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
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => {
        setText(data.text);
        sortLabels(data.entities);
        setResponse(data.entities);
        sortResponse(data.entities);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    handleDetailOpen();
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

  const sortResponse = (array) => {
    array.forEach((skill,index)=> skill.id=1000+index)
    console.log(array);
    const sorted = [...array];

    sorted.sort(function (a, b) {
      return a.label < b.label ? -1 : a.label > b.label ? 1 : 0;
    });
    const professional = sorted.filter(
      (skill) => skill.label == "Professional skill"
    );
    const soft = sorted.filter((skill) => skill.label == "Soft skill");
    const informationTechnology = sorted.filter(
      (skill) => skill.label == "IT skill"
    );
    const education = sorted.filter((skill) => skill.label == "Education");
    const language = sorted.filter((skill) => skill.label == "Language skill");

    setSortedResponse(sorted);
    setProfessionalSkills(professional);
    setSoftSkills(soft);
    setLanguageSkills(language);
    setItSkills(informationTechnology);
    setEducation(education);
    console.log(professional);
  };

  const clearPreview = () => {
    setResponse([]);
  };
  // TOPBAR MENU
  const compareArrays = (arr1, arr2) => {
    let difference = arr1.filter((x) => !arr2.includes(x));
    return difference;
  };
  const patchArray = (arr1, arr2) => {
    let difference = arr1
      .filter((x) => !arr2.includes(x))
      .concat(arr2.filter((x) => !arr1.includes(x)));
    return difference;
  };

  const moveToAll = () => {
    dispatch(setAll(patchArray(selected, all)));
    showFavorites && dispatch(setAll(compareArrays(favorites, selected)));
    showRejected && dispatch(setRejected(compareArrays(rejected, selected)));
    showReserves && dispatch(setReserves(compareArrays(reserves, selected)));
    dispatch(setChecked([]));
    dispatch(setSelected([]));
  };

  const moveToFavorites = () => {
    dispatch(setFavorites(patchArray(selected, favorites)));
    showAll && dispatch(setAll(compareArrays(all, selected)));
    showRejected && dispatch(setRejected(compareArrays(rejected, selected)));
    showReserves && dispatch(setReserves(compareArrays(reserves, selected)));
    dispatch(setChecked([]));
    dispatch(setSelected([]));
  };

  const moveToReserves = () => {
    dispatch(setReserves(patchArray(selected, reserves)));

    showAll
      ? dispatch(setAll(compareArrays(all, selected)))
      : showRejected
      ? dispatch(setRejected(compareArrays(rejected, selected)))
      : dispatch(setFavorites(compareArrays(favorites, selected)));
    dispatch(setChecked([]));
    dispatch(setSelected([]));
  };

  const moveToRejected = () => {
    dispatch(setRejected(patchArray(selected, rejected)));

    showAll
      ? dispatch(setAll(compareArrays(all, selected)))
      : showReserves
      ? dispatch(setReserves(compareArrays(reserves, selected)))
      : dispatch(setFavorites(compareArrays(favorites, selected)));
    dispatch(setChecked([]));
    dispatch(setSelected([]));
  };

  return (
    <>
      <AnalysisSidebar />
      <Grid
        container
        spacing={4}
        className='rankomat'
        style={{ width: "auto" }}>
        <Grid item xs={5} className='CV-list-container'>
          <Paper className='form-container-box'>
            {showAll && (
              <>
                <AnalysisTopbar
                  topbarMenu={topbarMenuAll}
                  moveToFavorites={moveToFavorites}
                  moveToReserves={moveToReserves}
                  moveToRejected={moveToRejected}
                />
                <CvList
                  handleOnClick={handleOnClick}
                  handleDetailClose={handleDetailClose}
                  open={open}
                  resumes={all}
                  annotatedText={annotatedText}
                  sortedResponse={sortedResponse}
                  professionalSkills={professionalSkills}
                  softSkills={softSkills}
                  languageSkills={languageSkills}
                  itSkills={itSkills}
                  education={education}
                />
              </>
            )}
            {showFavorites && (
              <>
                <AnalysisTopbar
                  topbarMenu={topbarMenuFavorites}
                  moveToAll={moveToAll}
                  moveToReserves={moveToReserves}
                  moveToRejected={moveToRejected}
                />
                <CvList
                  handleOnClick={handleOnClick}
                  handleDetailClose={handleDetailClose}
                  open={open}
                  resumes={favorites}
                  annotatedText={annotatedText}
                  sortedResponse={sortedResponse}
                  professionalSkills={professionalSkills}
                  softSkills={softSkills}
                  languageSkills={languageSkills}
                  itSkills={itSkills}
                  education={education}
                />
              </>
            )}

            {showReserves && (
              <>
                <AnalysisTopbar
                  topbarMenu={topbarMenuReserves}
                  moveToFavorites={moveToFavorites}
                  moveToAll={moveToAll}
                  moveToRejected={moveToRejected}
                />
                <CvList
                  handleOnClick={handleOnClick}
                  handleDetailClose={handleDetailClose}
                  open={open}
                  resumes={reserves}
                  annotatedText={annotatedText}
                  sortedResponse={sortedResponse}
                  professionalSkills={professionalSkills}
                  softSkills={softSkills}
                  languageSkills={languageSkills}
                  itSkills={itSkills}
                  education={education}
                />
              </>
            )}
            {showRejected && (
              <>
                <AnalysisTopbar
                  topbarMenu={topbarMenuRejected}
                  moveToFavorites={moveToFavorites}
                  moveToReserves={moveToReserves}
                  moveToAll={moveToAll}
                />
                <CvList
                  handleOnClick={handleOnClick}
                  handleDetailClose={handleDetailClose}
                  open={open}
                  resumes={rejected}
                  annotatedText={annotatedText}
                  sortedResponse={sortedResponse}
                  professionalSkills={professionalSkills}
                  softSkills={softSkills}
                  languageSkills={languageSkills}
                  itSkills={itSkills}
                  education={education}
                />
              </>
            )}
          </Paper>

          <MainActionButtons
            handleBack={props.handleStepperBack}
            handleNext={props.handleStepperNext}
          />
        </Grid>

        <Grid item xs={3} className='filters-container'>
          <Paper>
            <Step3Filters
              // onSetQualificationName={props.onSetQualificationName}
              // onSetExperienceLevel={props.onSetExperienceLevel}
              // onSetPosition={props.onSetPosition}
              // onSetCompanyName={props.onSetCompanyName}
              onSetKeyWord={onSetKeyWord}
            />
          </Paper>
        </Grid>
        {/* <CVDetails annotatedText={annotatedText} sortedResponse={sortedResponse}/> */}
      </Grid>
    </>
  );
}

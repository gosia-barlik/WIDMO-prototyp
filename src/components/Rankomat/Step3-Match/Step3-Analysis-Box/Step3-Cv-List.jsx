import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import CVDetails from "../Step3-Cv-Details/Step3-Cv-Details";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../../config";
import { useEffect } from "react";
import {
  setChecked,
  setSelected,
} from "../../../../store/actions/rankomatActions/rankomatStepThreeActions";
import { purple } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 800,
  },
  button: {
    backgroundColor: purple[500],
    marginBottom: "2px",
    borderRadius: "4px",
    width: "100%",
  },
}));

export default function CvList(props) {
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

  const { resumes } = useSelector((state) => state.rankomatStepTwoReducer);
  const {
    checked,
    all,
    favorites,
    rejected,
    reserves,
    selected,
    showAll,
    showReserves,
    showFavorites,
    showRejected,
    initialFilters,
  } = useSelector((state) => state.rankomatStepThreeReducer);
  const dispatch = useDispatch();
  const classes = useStyles();
  // const [checked, setChecked] = useState([]);

  function getColor(n) {
    return n === 0
      ? "#660DFF"
      : n === 1
      ? "#6A15FF"
      : n === 2
      ? "#6F1EFF"
      : n === 3
      ? "#7F2BFF"
      : n === 4
      ? "#8B39FF"
      : n === 5
      ? "#9341FF"
      : n === 6
      ? "#994BFF"
      : n === 7
      ? "#A051FF"
      : n === 8
      ? "#A358FF"
      : n === 9
      ? "#A361FF"
      : n === 10
      ? "#A869FF"
      : n === 11
      ? "#AD6FFF"
      : n === 12
      ? "#B47BFF"
      : n === 13
      ? "#BD87FF"
      : n === 14
      ? "#BD8EFF"
      : n === 15
      ? "#C19CFF"
      : n === "#dcdcdc";
  }
  const handleToggleCheck = (value) => () => {
    const currentIndex = checked.indexOf(value.id);
    const newChecked = [...checked];
    const newSelected = [...selected];

    if (currentIndex === -1) {
      newChecked.push(value.id);
      newSelected.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
      newSelected.splice(currentIndex, 1);
    }
    dispatch(setChecked(newChecked));
    dispatch(setSelected(newSelected));
  };

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

  const handleShowCvDetails = (e) => {
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
    array.forEach((skill, index) => (skill.id = 1000 + index));
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
   
  };

  const clearPreview = () => {
    setResponse([]);
  };


  return (
    <div>
      <List dense className={classes.root}>
        {showAll &&
          all.map((resume) => {
            const labelId = `checkbox-list-secondary-label-${resume.id}`;
            const color = getColor(resume.id);
            return (
              <ListItem
                key={resume.id}
                button
                className={classes.button}
                style={{ backgroundColor: color }}
                onClick={handleShowCvDetails}>
                <ListItemText
                  id={labelId}
                  primary={`${resume.name} ${resume.id + 1}`}
                  style={{ color: "white" }}
                />
                <ListItemSecondaryAction>
                  <Checkbox
                    className='styled-checkbox'
                    edge='end'
                    onChange={handleToggleCheck(resume)}
                    checked={checked.indexOf(resume.id) !== -1}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        {showFavorites &&
          favorites.map((resume) => {
            const labelId = `checkbox-list-secondary-label-${resume.id}`;
            const color = getColor(resume.id);
            return (
              <ListItem
                key={resume.id}
                button
                className={classes.button}
                style={{ backgroundColor: color }}
                onClick={handleShowCvDetails}>
                <ListItemText
                  id={labelId}
                  primary={`${resume.name} ${resume.id + 1}`}
                  style={{ color: "white" }}
                />
                <ListItemSecondaryAction>
                  <Checkbox
                    className='styled-checkbox'
                    edge='end'
                    onChange={handleToggleCheck(resume)}
                    checked={checked.indexOf(resume.id) !== -1}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        {showReserves &&
          reserves.map((resume) => {
            const labelId = `checkbox-list-secondary-label-${resume.id}`;
            const color = getColor(resume.id);
            return (
              <ListItem
                key={resume.id}
                button
                className={classes.button}
                style={{ backgroundColor: color }}
                onClick={handleShowCvDetails}>
                <ListItemText
                  id={labelId}
                  primary={`${resume.name} ${resume.id + 1}`}
                  style={{ color: "white" }}
                />
                <ListItemSecondaryAction>
                  <Checkbox
                    className='styled-checkbox'
                    edge='end'
                    onChange={handleToggleCheck(resume)}
                    checked={checked.indexOf(resume.id) !== -1}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        {showRejected &&
          rejected.map((resume) => {
            const labelId = `checkbox-list-secondary-label-${resume.id}`;
            const color = getColor(resume.id);
            return (
              <ListItem
                key={resume.id}
                button
                className={classes.button}
                style={{ backgroundColor: color }}
                onClick={handleShowCvDetails}>
                <ListItemText
                  id={labelId}
                  primary={`${resume.name} ${resume.id + 1}`}
                  style={{ color: "white" }}
                />
                <ListItemSecondaryAction>
                  <Checkbox
                    className='styled-checkbox'
                    edge='end'
                    onChange={handleToggleCheck(resume)}
                    checked={checked.indexOf(resume.id) !== -1}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
      </List>
      <CVDetails
        open={open}
        handleDetailClose={handleDetailClose}
        annotatedText={annotatedText}
        sortedResponse={sortedResponse}
        professionalSkills={professionalSkills}
        softSkills={softSkills}
        languageSkills={languageSkills}
        itSkills={itSkills}
        education={education}
        annotations={annotations}
      />
    </div>
  );
}

import { React, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import config from "../../../config";
import { useEffect } from "react";
import CvPreview from "./Step3-Cv-Preview/Step3-Cv-Preview";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 500,
  },
}));

// const checkBoxStyles = theme => ({
//   root: {
//     '&$checked': {
//       color: '#3D70B2',
//     },
//   },
//   checked: {},
//  })

export default function CvList(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState([]);
  const [text, setText] = useState("");
  const [annotatedText, setAnnotatedText] = useState("");
  const [response, setResponse] = useState([]);
  const [annotations, setAnnotations] = useState({
    Benefit: true, //TODO: zamienić na zwracane z backendu code-namy
    Company: true,
    Education: true,
    Experience: true,
    "Language skill": true,
    "Occupation name": true,
    "Professional skill": true,
    "Soft skill": true,
  });
  const [skills, setSkills] = useState([]);

  // ADD SPLICE TO STRING PROTOTYPE
  useEffect(() => {
    String.prototype.splice = function (idx, rem, str) {
      return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
    };
  }, []);

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

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    const url = `${config.NER_BASE_URL}/ner_text/`;
    fetch(url, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify({
        text: "Wykształcenie: - 1997 – 2002 - Politechnika Poznańska Wydział Architektury i Urbanistyki ukończone z tytułem magister inżynier architekt- 1993-1997 - Liceum Ogólnokształcące nr 12 w Poznaniu Kwalifikacje: - uprawnienia budowlane do projektowania bez ograniczeń w specjalności architektonicznej - znajomość przepisów z zakresu prawa budowlanego, warunków technicznych, kpa oraz procesów prawnych towarzyszących projektowaniu i realizacji inwestycji - znajomość obsługi komputera (pakiet Office) - znajomość komputerowych programów wspomagających projektowanie: Autocad, Nemtschek - znajomość komputerowych programów graficznych: Corel Draw, Photoshop - prawo jazdy kat. B Doświadczenie: - II.2012-obecnie – projektant API Sp. z o.o. Zakres obowiązków: prowadzenie i przygotowanie projektów we wszystkich stadiach dla inwestycji centra handlowe - III.2007-I.2012 – projektant Spółka Projektowania Architektonicznego Sadowski, Sadowska Zakres obowiązków: prowadzenie i przygotowanie projektów we wszystkich stadiach dla inwestycji użyteczności publicznej Predyspozycje zawodowe:- dokładność, samodyscyplina - łatwość w nawiązywaniu kontaktów-bezkonfliktowa praca w zespole",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setText(data.text);
        return data.entities;
      })
      .then((data) => {
        sortLabels(data);
        setResponse(data);
        setSkills(data);
      })
      .then(() => {
        addHighlightedLabels();
      })
      .then(() => {
        filterSkills();
      });
  };

  const filterSkills = () => {
    const filtered = skills.filter((array) => {
      return (
        array.label === "Professional skill" || array.label === "Soft skill"
      );
    });
    setSkills(filtered);
    console.log(skills);
  };

  const sortLabels = (data) => {
    data.sort((a, b) =>
      a.start_char > b.start_char ? 1 : b.start_char > a.start_char ? -1 : 0
    );
  };

  const getClass = (annotation) => {
    //all classes names must be the same length
    switch (annotation.label) {
      case "Benefit":
        return "benefit";

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
    }
  };

  const highlightLabels = (annotation, i, baseText) => {
    const startSpan = `<span class="${getClass(annotation)}" id="${i + 1000}">`;
    const endSpan = `<span class="annotation-name"> ${getClass(
      annotation
    )} </span></span>`;
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
    console.log(annotatedText);
  };

  return (
    <>
      <List dense className={classes.root}>
        {props.resumes.map((resume) => {
          const labelId = `checkbox-list-secondary-label-${resume.id}`;
          const color = getColor(resume.id);
          return (
            <ListItem
              key={resume.id}
              button
              style={{
                backgroundColor: color,
                marginBottom: "2px",
                borderRadius: "4px",
              }}
              onClick={handleOnClick}>
              <ListItemText
                id={labelId}
                primary={`${resume.name} ${resume.id + 1}`}
                style={{ color: "white" }}
              />
              <ListItemSecondaryAction>
                <Checkbox
                  className='styled-checkbox'
                  edge='end'
                  onChange={handleToggle(resume.id)}
                  checked={checked.indexOf(resume.id) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      {response.length !== 0 && <CvPreview text={annotatedText}></CvPreview>}
    </>
  );
}

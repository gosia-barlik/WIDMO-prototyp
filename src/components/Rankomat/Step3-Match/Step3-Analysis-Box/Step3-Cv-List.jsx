import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import CVDetails from "../Step3-Cv-Details/Step3-Cv-Details";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  setChecked,
  setSelected,
} from "../../../../store/actions/rankomatActions/rankomatStepThreeActions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 800,
  },
}));

export default function CvList(props) {
  const { checked, selected } = useSelector(
    (state) => state.rankomatStepThreeReducer
  );
  
  const { resumes } = useSelector((state) => state.rankomatStepTwoReducer);
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

  return (
    <div>
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
                width: "100%",
              }}
              onClick={props.handleShowCvDetails}>
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
        open={props.open}
        handleDetailClose={props.handleDetailClose}
        annotatedText={props.annotatedText}
        sortedResponse={props.sortedResponse}
        professionalSkills={props.professionalSkills}
        softSkills={props.softSkills}
        languageSkills={props.languageSkills}
        itSkills={props.itSkills}
        education={props.education}
        annotations={props.annotations}
      />
    </div>
  );
}

import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 500,
  },
}));

const checkBoxStyles = theme => ({
  root: {
    '&$checked': {
      color: '#3D70B2',
    },
  },
  checked: {},
 })



export default function CvList(props) {
  const classes = useStyles();
  
  const [checked, setChecked] = React.useState([1]);

  function getColor(n) {
    return n === 0
      ? "#640DFF"
      : n === 1
      ? "#7F39FB"
      : n === 2
      ? "#9054FB"
      : n === 3
      ? "#985EFF"
      : n === 4
      ? "#B579FE"
      : n === 5
      ? "#BB86FC"
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

  return (
    <List dense className={classes.root}>
      
      {props.resumes.map((resume) => {
        const labelId = `checkbox-list-secondary-label-${resume.id}`;
        const color = getColor(resume.id);
        return (
          <ListItem
            key={resume.id}
            button
            style={{ backgroundColor: color, marginBottom: "2px", borderRadius:"4px" }}>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${resume.id + 1}`}
                src={`/static/images/avatar/${resume.id + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              id={labelId}
              primary={`${resume.name} ${resume.id + 1}`}
              style={{ color: "white" }}
            />
            <ListItemSecondaryAction>
              <Checkbox
              className="styled-checkbox"
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
  );
}

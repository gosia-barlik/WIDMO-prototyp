import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import {
  setResponsibilities,
  setResponsibilitiesToHtml,
  setShowResponsibilitiesList,
} from "../../../../store/actions/stepTwoActions";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  paper: {
    width: "100%",
    height: 230,
    overflow: "auto",
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
  icon: {
    height: 16,
    width: 16,
    marginBottom: 4,
  }
}));

export default function TransferList(props) {
  const { responsibilities, responsibilitiesToHtml, showResponsibilitiesList } =
    useSelector((state) => state.stepTwoReducer);

  const dispatch = useDispatch();
  const classes = useStyles();
  const [added, setAdded] = React.useState([]);

  const handleResponsibilities =(value)=>{
    let newResponsibilities = [...responsibilities];
    newResponsibilities.push(value);
    const responsibilitiesToHtml = `<ul> ${newResponsibilities.map(
      (responsibility) => `<li key=${responsibility}>${responsibility}</li>`
    )}
      </ul> `;
    dispatch(setResponsibilities(newResponsibilities));
    dispatch(setResponsibilitiesToHtml(responsibilitiesToHtml));
  }

  const handleAdd = (value) => () => {
    const newAdded = [...added];
    newAdded.push(value);
    setAdded(newAdded);
    showResponsibilitiesList && handleResponsibilities(value);
  };

  return (
    <Paper className={classes.paper}>
      <List dense component='div' role='list'>
        {props.listItems.map((value) => {
          const labelId = `${value}`;

          return (
            <ListItem
              key={value}
              role='listitem'
              button
              title='Skopiuj do ogłoszenia'
              onClick={handleAdd(value)}>
              <ListItemIcon >
                <FilterNoneIcon className={classes.icon}/>
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );
}

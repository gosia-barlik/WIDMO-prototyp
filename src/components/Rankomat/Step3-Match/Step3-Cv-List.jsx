import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
   
  },
}));



export default function CvList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

function getColor(n) {
  return n == 0 ? "#640DFF"  :
         n == 1  ? "#7F39FB" :
         n == 2 ? "#9054FB" :
         n == 3  ? "#985EFF" :
         n == 4 ? "#B579FE" :
         n == 5   ? "#BB86FC" :
         n =="#dcdcdc" ;
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
      {[0, 1, 2, 3, 4].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        const color = getColor(value);
        return (
          <ListItem key={value} button style={{backgroundColor:color, marginBottom:"2px"}}>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`/static/images/avatar/${value + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`Line item ${value + 1}`} style={{color:"white"}} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}


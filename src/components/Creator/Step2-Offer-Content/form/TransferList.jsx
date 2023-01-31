import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from "react-redux";
import {
  setResponsibilities,
  setResponsibilitiesToHtml,
  setShowResponsibilitiesList,
} from "../../../../store/actions/stepTwoActions";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
  },
  paper: {
    width: '100%',
    height: 230,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

export default function TransferList() {
  const {
    responsibilities,
    responsibilitiesToHtml,
    showResponsibilitiesList,
  } = useSelector((state) => state.stepTwoReducer);

  const dispatch = useDispatch();
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
 

  const newResponsibilitiesFixture = [
    "Stosuje pojęcia związane z bezpieczeństwem i higieną pracy, ochroną przeciwpożarową, ochroną środowiska i ergonomią",
    "Klasyfikuje zadania i uprawnienia instytucji oraz służb działających w zakresie ochrony pracy, ochrony przeciwpożarowej oraz ochrony środowiska",
    "Stosuje prawa i obowiązki pracownika oraz pracodawcy w zakresie bezpieczeństwa i higieny pracy",
    "Opisuje skutki oddziaływania czynników wpływających negatywnie na organizm człowieka",
    "Identyfikuje zagrożenia dla zdrowia i życia człowieka oraz mienia i środowiska związane z wykonywaniem zadań zawodowych",
    "Przestrzega zasad bezpieczeństwa i higieny pracy oraz przepisów prawa dotyczących ochrony przeciwpożarowej i ochrony środowiska"
  ];

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    
    let newResponsibilities = [...responsibilities];
    let responsibilitiesIndex = newResponsibilities.indexOf(value);

    if(responsibilitiesIndex < 0) 
      newResponsibilities.push(value);
    else
      newResponsibilities.splice(responsibilitiesIndex, 1);

    const responsibilitiesToHtml = 
      `<ul> ${newResponsibilities.map((responsibility) => 
        `<li key=${responsibility}>${responsibility}</li>`
        )}
      </ul> `;

    dispatch(setResponsibilities(newResponsibilities));
    dispatch(setResponsibilitiesToHtml(responsibilitiesToHtml));
  };



  return (
    <Paper className={classes.paper}>
      <List dense component="div" role="list">
        {newResponsibilitiesFixture.map((value) => {
          const labelId = `${value}`;

          return (
            <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
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

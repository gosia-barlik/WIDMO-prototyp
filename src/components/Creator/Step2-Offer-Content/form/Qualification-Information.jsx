import React from "react";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import {
  setCopiedSelectedText,
} from "../../../../store/actions/stepTwoActions";

export default function QualificationInformation(props) {
  const {
    showQualificationForm,
    qualificationName,
    qualificationCharacteristic,
    copiedSelectedText,
  } = useSelector((state) => state.stepTwoReducer);
  const dispatch = useDispatch();


  const getSelectedText = () => {
    if (window.getSelection) {
      const newCopiedSelectedText = () => [
        ...copiedSelectedText,
        window.getSelection().toString(),
      ];
      dispatch(setCopiedSelectedText(newCopiedSelectedText()));
    }
  };

  return (
    <Grow in={showQualificationForm}>
      <Card style={{ padding: "12px" }}>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Kwalifikacja: {qualificationName}
        </Typography>
        <Typography
          variant='body2'
          gutterBottom
          component='div'
          style={{ marginTop: "16px" }}>
          1. Krótka charakterystyka
        </Typography>
        <Paper
          style={{ fontSize: "14px", lineHeight: "20px" }}
          sx={{
            p: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
          onMouseUp={getSelectedText}>
          {qualificationCharacteristic}
        </Paper>
       
      </Card>
    </Grow>
  );
}

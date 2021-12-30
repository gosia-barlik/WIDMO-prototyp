import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Stack from "@mui/material/Stack";

export default function QualificationInformation(props) {

  return (
    <>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Kwalifikacja: {props.qualificationName}
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
        onMouseUp = {props.getSelectedText}>
        {props.qualificationCharacteristic}
      </Paper>

      <Typography
        variant='body2'
        gutterBottom
        component='div'
        style={{ marginTop: "16px" }}>
        2. Efekty uczenia się
      </Typography>
      <Paper
        style={{ fontSize: "12px", lineHeight: "20px" }}
        sx={{
          p: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
        }}>
        {props.qualificationEffects.map((effect) => (
          <Accordion key={effect.name}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant='subtitle2' gutterBottom component='div'>
                {effect.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ flexDirection: "column", padding:'4px 12px' }}>
              {effect.effects.map((e) => (
                <Stack key={e} direction='row' style={{maxHeight:'36px' }}>
                  <Typography variant='body2' gutterBottom component='div' style={{paddingTop:'4px'}}>
                    {e}
                  </Typography>
                  <IconButton component='span' style={{ margin:'2px 0 8px 12px', width: '26px', color:'#784af4', boxShadow:'1px 2px 3px rgb(0 0 0 / 20%)' }} onClick={() => {props.copyQualificationEffect(e)}}>
                    <AddIcon />
                  </IconButton>
                </Stack>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </>
  );
}

import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


export default function SearchResults(props) {
  return (
    <Paper
      className='job-position-search-results-wrapper'
      elevation={0}
      style={{ marginTop: "20px" }}>
      <Typography style={{ display: "inline-block" }}>
        Wyniki wyszukiwania dla:{" "}
      </Typography>
      <Paper
        style={{
          display: "inline-block",
          height: "25px",
          padding: "8px 12px 5px 12px",
          marginLeft: "20px",
        }}>
        <Typography>Lorem ipsum</Typography>
      </Paper>
      <Accordion style={{ marginTop: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography>Kwalifikacja: Lorem ipsum</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ marginTop: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography>
            Standard kompetencji zawodowych: Dolor sit amet
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
}

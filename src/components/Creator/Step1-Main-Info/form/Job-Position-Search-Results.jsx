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
        Dla stanowiska 
      </Typography>
      {/* <Paper
        style={{
          display: "inline-block",
          height: "25px",
          padding: "8px 12px 5px 12px",
          marginLeft: "20px",
        }}> */}
        <Typography variant={"subtitle2"} style={{ display: "inline-block" }}> &nbsp; {props.searchedPosition} </Typography>
      {/* </Paper> */}
      <Typography style={{ display: "inline" }}>
      &nbsp; znaleźliśmy poniższe kwalifikacje i standardy kompetencji zawodowych. Na ich podstawie formułowane będą podpowiedzi na dalszych etapach tworzenia ogłoszenia:
      </Typography>
      <Accordion style={{ marginTop: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography>Kwalifikacja: Elektromechanik pojazdów samochodowych</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          "Absolwent szkoły prowadzącej kształcenie w zawodzie elektromechanik pojazdów samochodowych powinien być przygotowany do wykonywania zadań zawodowych w zakresie kwalifikacji MOT.02. Obsługa, diagnozowanie oraz naprawa mechatronicznych systemów pojazdów samochodowych: 1) przeprowadzania obsługi instalacji i konserwacji mechatronicznych systemów pojazdów samochodowych; 2) diagnozowania stanu technicznego mechatronicznych systemów pojazdów samochodowych; 3) wykonywania napraw elektrycznych i elektronicznych układów pojazdów samochodowych"
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

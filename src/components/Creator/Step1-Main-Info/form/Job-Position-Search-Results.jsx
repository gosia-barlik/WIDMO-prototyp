import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from '@mui/material/Link';

export default function SearchResults(props) {
  const qualificationsFixture = [
    {
      name: "Planowanie kampanii automatyzacji marketingu internetowego",
      description:
        'Osoba posiadająca kwalifikację "Planowanie kampanii automatyzacji marketingu internetowego" jest gotowa do samodzielnego wykonywania zadań w zakresie automatyzacji marketingu internetowego. Samodzielnie organizuje swoje stanowisko pracy i przyjmuje odpowiedzialność za podejmowane zadania. Może działać jako niezależny specjalista lub jako członek zespołu zajmującego się automatyzacją marketingu internetowego. Osoba posiadająca certyfikat poświadczający kwalifikację identyfikuje cele i możliwości marketingu internetowego przedsiębiorstwa, identyfikuje i charakteryzuje grupę docelową internetowej kampanii marketingowej oraz przygotowuje plan zautomatyzowanej internetowej kampanii marketingowej. Tworzy diagramy procesów i listy instrukcji dla systemów "marketing automation", przygotowuje wytyczne dotyczące przekazu marketingu internetowego, np. dla grafika. Samodzielnie tworzy nośniki przekazu marketingu internetowego, np. "landing page", szablony newsletterów. Nadzoruje wdrażanie narzędzi automatyzacji marketingu internetowego. Monitoruje efektywność wdrożonej internetowej kampanii marketingowej, testuje ją oraz optymalizuje.',
        link:'https://kwalifikacje.gov.pl/k?id_kw=13968'
    },
    {
      name: "Planowanie, tworzenie i dystrybuowanie treści marketingowych (content marketing)",
      description:
        'Osoba posiadająca kwalifikację „Planowanie, tworzenie i dystrybuowanie treści marketingowych (content marketing)” jest gotowa do samodzielnego podejmowania działań związanych z planowaniem, tworzeniem i rozpowszechnianiem treści marketingowych. Rozpoznaje i charakteryzuje potrzeby odbiorców treści marketingowych. Wspiera realizację strategii marketingowej przedsiębiorstwa. Osoba posiadająca kwalifikację przygotowuje treści marketingowe: tekstowe i multimedialne (zdjęcia, grafiki, filmy, poradniki, artykuły). Dystrybuuje przygotowane treści z wykorzystaniem kanałów internetowych. W trakcie wykonywania swoich zadań zawodowych posługuje się odpowiednimi narzędziami (sprzętem i oprogramowaniem). Monitoruje skuteczność i efektywność wdrażanych rozwiązań. W ramach podejmowanych zadań projektowych planuje i przekazuje zadania współpracownikom oraz zewnętrznym wykonawcom usług.',
        link:'https://kwalifikacje.gov.pl/k?id_kw=12629'
    },
    
  ];

  return (
    <Paper
      className='job-position-search-results-wrapper'
      elevation={1}>
      {qualificationsFixture.map((fixture) => (
        <Accordion style={{ marginTop: "10px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography style={{fontWeight: 500}}>{fixture.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{fixture.description}</Typography><br/>
            <Link style={{color:"blue"}} href ={fixture.link} target="_blank" >{fixture.link}</Link>
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>
  );
}

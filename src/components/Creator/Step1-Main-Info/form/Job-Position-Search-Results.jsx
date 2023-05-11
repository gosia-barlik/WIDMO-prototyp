import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from '@mui/material/Link';
import { useSelector } from "react-redux";

export default function SearchResults(props) {
  const { searchedPosition } = useSelector((state) => state.stepOneReducer);

  const qualificationsFixture = [
    {
      name: "Elektromechanik pojazdów samochodowych",
      description:
        'Efekty uczenia się kwalifikacji pełnej (efekty kształcenia dla zawodu) można przejrzeć w jej kwalifikacjach cząstkowych/poprzedzających. Aby sprawdzić, jakie kwalifikacje wchodzą w skład danego zawodu należy wejść w zakładkę powyżej "Informacje o w kwalifikacji", dalej "Wymagane kwalifikacje poprzedzające i inne warunki jakie są niezbędne do uzyskania kwalifikacji", "Kwalifikacje poprzedzające". Wchodząc w konkretną kwalifikację z listy, a następnie w zakładkę "Efekty uczenia się" zapoznamy się z efektami uczenia się dla danej kwalifikacji cząstkowej/poprzedzającej.',
      link:'https://kwalifikacje.gov.pl/k?id_kw=12907'
    },
    {
      name: "Przeprowadzenie procesu renowacji i naprawy powłoki lakierowej - lakiernik samochodowy",
      description:
        'Osoba posiadająca kwalifikację rynkową "Przeprowadzenie procesu renowacji i naprawy powłoki lakierowej - lakiernik samochodowy" jest gotowa do samodzielnego planowania, organizowania i przeprowadzenia procesu lakierowania. Ocenia stan powierzchni, która ma zostać lakierowana. Dobiera technologię przygotowania elementu do lakierowania. Wykonuje prace przygotowawcze w tym: odtłuszcza, oczyszcza powierzchnię, wykonuje maskowanie powierzchni, które nie będą lakierowane, zabezpiecza antykorozyjnie, nakłada materiały wypełniające oraz przygotowuje powierzchnię do dalszych prac lakierniczych. Dobiera system ochronno-dekoracyjny zgodnie z zaleceniami producenta. Samodzielnie aplikuje system ochronno-dekoracyjny. Kontroluje jakość wykonanych czynności, poleruje, a w razie potrzeby przeprowadza korektę lakierowanych elementów. Podczas prac wykorzystuje wyposażenie lakierni np. promienniki podczerwieni, kabiny lakiernicze, pistolety lakiernicze, inny sprzęt dodatkowy wykorzystywany przy naprawach pojazdów. Posługuje się wiedzą z zakresu lakiernictwa. Osoba posiadająca kwalifikację jest gotowa do nadzorowania procesów lakierniczych, w tym tworzenia harmonogramu prac lakierniczych, wyznaczania zadań pomocnika lakiernika oraz kontrolowania stanu wykonywanych prac. W swojej pracy stosuje zasady samoochrony oraz przestrzega zasad bezpieczeństwa i higieny pracy (BHP). Segreguje odpady lakiernicze zgodnie z wymogami ochrony środowiska',
        link:'https://kwalifikacje.gov.pl/k?id_kw=13891'
    },
    {
      name: "Technik pojazdów samochodowych",
      description:
        'Efekty uczenia się kwalifikacji pełnej (efekty kształcenia dla zawodu) można przejrzeć w jej kwalifikacjach cząstkowych/poprzedzających. Aby sprawdzić, jakie kwalifikacje wchodzą w skład danego zawodu należy wejść w zakładkę powyżej "Informacje o w kwalifikacji", dalej "Wymagane kwalifikacje poprzedzające i inne warunki jakie są niezbędne do uzyskania kwalifikacji", "Kwalifikacje poprzedzające". Wchodząc w konkretną kwalifikację z listy, a następnie w zakładkę "Efekty uczenia się" zapoznamy się z efektami uczenia się dla danej kwalifikacji cząstkowej/poprzedzającej.',
        link:'https://kwalifikacje.gov.pl/k?id_kw=12911'
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
            <Typography>{fixture.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{fixture.description}</Typography>
            <Link href ={fixture.link} target="_blank" >{fixture.link}</Link>
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>
  );
}

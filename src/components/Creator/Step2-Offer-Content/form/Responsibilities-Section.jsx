import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import QualificationInformation from "./Qualification-Information";
import Wysiwyg from "./Wysiwyg";
import TransferList from "./TransferList";
import { useDispatch, useSelector } from "react-redux";
import {
  setResponsibilities,
  setResponsibilitiesToHtml,
  setShowResponsibilitiesList,
  setShowRequirementsList,
  setCustomizedResponsibilities,
  setShowQualificationForm,
  setQualificationName,
  setQualificationCharacteristic,
} from "../../../../store/actions/stepTwoActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingLeft: 6,
    paddingRight: 6,
    zIndex: 10,
  },
  stack: {
    justifyContent: "right",
    paddingTop: "5px",
  },
  card: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default function ResponsibilitiesSection(props) {
  const classes = useStyles();
  const {
    responsibilitiesToHtml,
    showQualificationForm,
    showResponsibilitiesList,
  } = useSelector((state) => state.stepTwoReducer);
  const dispatch = useDispatch();

  //RESPONSIBILITIES
  const onSetResponsibilities = (responsibilities) => {
    dispatch(setResponsibilities(responsibilities));
  };
  const onSetResponsibilitiesToHtml = (responsibilitiesToHtml1) => {
    dispatch(setResponsibilitiesToHtml(responsibilitiesToHtml1));
  };
  const onSetShowResponsibilitiesList = () => {
    dispatch(setShowResponsibilitiesList(!showResponsibilitiesList));
    dispatch(setShowRequirementsList(false));
  };

  const newResponsibilitiesFixture = [
    "Zapoznawanie się z pozyskanymi informacjami oraz dokonywanie ich selekcji pod kątem merytorycznym i rodzajowym",
    "Katalogowanie wyselekcjonowanych treści",
    "Pozyskiwanie informacji z różnych źródeł, ich selekcjonowanie, przetwarzanie oraz opublikowanie na stronie internetowej",
    "Przetwarzanie (optymalizowanie) treści na potrzeby internetu zgodnie z wymaganiami wyszukiwarek internetowych",
    "Publikowanie treści na stronie internetowej zgodnie z otrzymanymi wytycznymi",
    "Modyfikowanie, moderowanie i edytowanie zawartości serwisów internetowych",
    "Optymalizowanie zawartości serwisów internetowych pod kątem wyszukiwarek internetowych",
    "Zamienianie na postać cyfrową treści otrzymanych w formie tradycyjnej (drukowanej) z wykorzystaniem skanerów, programów przekształcających grafikę na tekst oraz edytorów tekstów",
    "Przeprowadzanie badań środków masowego przekazu",
    "Analiza otoczenia wewnętrznego i zewnętrznego pod kątem przygotowania treści",
    "Analizowanie ruchu użytkowników na stronie internetowej",
    "Analizowanie tendencji zakupowych konsumentów",
    "Przygotowywanie raportów oceniających jakość przeprowadzonej kampanii marketingowej",
    "Przygotowywanie i tworzenie materiałów audiowizualnych",
    "Przygotowywanie infografik",
    "Przygotowanie i organizowanie wydarzeń i akcji (np. webinarów, akcji CSR)",
    "Organizacja sesji zdjęciowych",
    "Kontrolowanie publikowanych treści pod kątem ich zgodności ze statusem organizacji oraz zgodności z prawem",
    "Współpraca z innymi pracownikami",
  ];

  return (
    <Stack spacing={2} direction='column' className={classes.stack}>
      <Typography variant='h6' gutterBottom component='div'>
        Zakres obowiązków
      </Typography>
      <Card className={classes.card}>
        <Wysiwyg
          contentToEdit={responsibilitiesToHtml}
          setValueToHtml={onSetResponsibilitiesToHtml}
        />
        <Paper className={classes.paper} elevation={0}>
          <IconButton
            className='styled-icon-button'
            style={{ top: 36 }}
            title='Pokaż podpowiedzi'
            component='span'
            onClick={onSetShowResponsibilitiesList}>
            {showResponsibilitiesList ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
          {showResponsibilitiesList && (
            <TransferList listItems={newResponsibilitiesFixture} />
          )}
        </Paper>
      </Card>

      {/* {showQualificationForm === true && <QualificationInformation />} */}
    </Stack>
  );
}

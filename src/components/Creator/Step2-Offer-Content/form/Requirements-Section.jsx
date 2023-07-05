import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@mui/material/IconButton";
import TransferList from "./TransferList";
import EducationExperience from "./Education-Experience-Form.jsx/Education-Experience";
import Wysiwyg from "./Wysiwyg";
import { useDispatch, useSelector } from "react-redux";
import {
  setRequirements,
  setRequirementsToHtml,
  setShowEducationForm,
  setShowRequirementsList,
  setShowResponsibilitiesList,
} from "../../../../store/actions/stepTwoActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingLeft: 6,
    paddingRight: 6,
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

export default function RequirementsSection(props) {
  const classes = useStyles();
  const {
    requirements,
    requirementsToHtml,
    showEducationForm,
    educationLevel,
    studiesName,
    studiesStage,
    certificateName,
    certificateStage,
    showRequirementsList,
  } = useSelector((state) => state.stepTwoReducer);
  const dispatch = useDispatch();

  const onSetRequirementsToHtml = (requirementsToHtml) => {
    dispatch(setRequirementsToHtml(requirementsToHtml));
  };

  const onSetShowRequirementsList = () => {
    dispatch(setShowRequirementsList(!showRequirementsList));
    dispatch(setShowResponsibilitiesList(false));
  };

  const newRequirementsFixture = [
    "Umiejętność formułowania komunikatu marketingowego",
    "Doświadczenie w pracy w obszarze e-marketingu, znajomość systemów CMS oraz narzędzi Google (Analytics, Ads, Search Console)",
    "Doświadczenie w pracy w obszarze brand marketingu w sektorze B2B (min. ...lat) i/lub w strukturach marketingowych po stronie klienta lub agencji brandowych (min. ...lat)",
    "Doświadczenie w zarządzaniu kilkuosobowym zespołem",
    "Umiejętność dobrej organizacji pracy własnej oraz zespołu",
    "Doświadczenie w samodzielnym zarządzaniu projektami i organizacji wydarzeń",
    "Znajomość narzędzi marketingowych w zakresie ATL i BTL",
    "Doświadczenie w pracy z klientami z różnych branż",
    "Przeprowadzanie badań środków masowego przekazu",
    "Kreatywność oraz umiejętność pracy w zespole",
    "Zdolność do analitycznego myślenia i samodzielnego podejmowania decyzji",
    "Komunikatywność oraz umiejętność współpracy",
    "Znajomość narzędzi pakietu MS Office w stopniu zaawansowanym",
    "Znajomość języka angielskiego w stopniu zaawansowanym",
    "Umiejętność pracy pod presją czasu",
  ];

  const onSetShowEducationForm = () =>
    dispatch(setShowEducationForm(!showEducationForm));
  const hasAnyEducationInfo = () =>
    educationLevel.length > 0 ||
    studiesName.length > 0 ||
    studiesStage.length > 0 ||
    certificateName.length > 0 ||
    certificateStage.length > 0;

  return (
    <Stack spacing={2} direction='column' className={classes.stack}>
      <Typography variant='h6' gutterBottom component='div'>
        Wymagania
      </Typography>
      <Card className={classes.card}>
        <Wysiwyg
          contentToEdit={requirementsToHtml}
          setValueToHtml={onSetRequirementsToHtml}
        />
        <Paper className={classes.paper} elevation={0}>
          <IconButton
            className='styled-icon-button'
            style={{ top: 36 }}
            title='Pokaż podpowiedzi'
            component='span'
            onClick={onSetShowRequirementsList}>
            {showRequirementsList ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
          {showRequirementsList && (
            <TransferList listItems={newRequirementsFixture} />
          )}
        </Paper>
      </Card>

      <Card className='styled-card'>
        <IconButton
          className='styled-icon-button'
          component='span'
          onClick={onSetShowEducationForm}>
          {showEducationForm === true ? <RemoveIcon /> : <AddIcon />}
          {/* {hasAnyEducationInfo() ? <RemoveIcon /> : <AddIcon />} */}
        </IconButton>
        {showEducationForm === true
          ? "Ukryj szczegółowe informacje o wykształceniu i doświadczeniu"
          : "Dodaj szczegółowe informacje o wykształceniu i doświadczeniu"}
      </Card>
      {showEducationForm && <EducationExperience />}
    </Stack>
  );
}

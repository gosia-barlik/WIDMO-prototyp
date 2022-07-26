import React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setLogoPreview,
} from "../../../../../store/actions/stepOneActions";

export default function Step1Accordion(props) {
  const {
    searchedPosition,
    salaryTo,
    salaryFrom,
    salaryCurrency,
    salaryTime,
    salaryType,
    salaryContract,
    addressCountry,
    addressCity,
    addressStreet,
    workMode,
    contractType,
    recruitmentMode,
    workModel,
    companyName,
    aboutCompany,
    logo,
    logoPreview,
  } = useSelector((state) => state.stepOneReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!logo) {
      dispatch(setLogoPreview(undefined));
      return;
    }

    const objectUrl = URL.createObjectURL(logo);
    dispatch(setLogoPreview(objectUrl));

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [logo]);

  return (
    <Accordion className='styled-accordion'>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant='subtitle2' component='div'>
          Informacje podstawowe
        </Typography>
      </AccordionSummary>

      <AccordionDetails style={{ flexDirection: "column" }}>
        <Typography variant='subtitle2' component='div'>
          Stanowisko
        </Typography>
        <Typography variant='body2' gutterBottom component='div'>
          {searchedPosition}
        </Typography>
        {companyName && (
          <>
            <Typography variant='subtitle2' component='div'>
              Nazwa firmy
            </Typography>
            <Typography variant='body2' gutterBottom component='div'>
              {companyName}
            </Typography>
          </>
        )}
        {aboutCompany && (
          <>
            <Typography variant='subtitle2' component='div'>
              O firmie
            </Typography>
            <Typography variant='body2' gutterBottom component='div'>
              {aboutCompany}
            </Typography>
          </>
        )}
        {logoPreview && (
          <img className='logo-preview' src={logoPreview} id={"logo-photo"} />
        )}
        {(salaryType || salaryFrom || salaryTo || salaryTime) && (
          <>
            <Typography
              variant='subtitle2'
              gutterBottom
              component='div'
              style={{}}>
              Wynagrodzenie
            </Typography>
            <Typography variant='body2' gutterBottom component='div'>
              {"od " + salaryFrom} {"do " + salaryTo} {" " + salaryCurrency}{" "}
              {"/" + salaryTime} {salaryType} {salaryContract}
            </Typography>
          </>
        )}
        {workModel && (
          <>
            <Typography variant='subtitle2' component='div'>
              Tryb pracy
            </Typography>
            <Typography variant='body2' gutterBottom component='div'>
              {workModel}
            </Typography>
          </>
        )}

        {contractType && (
          <>
            <Typography variant='subtitle2' component='div'>
              Rodzaj umowy
            </Typography>
            <Typography variant='body2' gutterBottom component='div'>
              {contractType}
            </Typography>
          </>
        )}

        {workMode && (
          <>
            <Typography variant='subtitle2' component='div'>
              Wymiar zatrudnienia
            </Typography>
            <Typography variant='body2' gutterBottom component='div'>
              {workMode}
            </Typography>
          </>
        )}

        {recruitmentMode && (
          <>
            <Typography variant='subtitle2' component='div'>
              Tryb rekrutacji
            </Typography>
            <Typography variant='body2' gutterBottom component='div'>
              {recruitmentMode}
            </Typography>
          </>
        )}

        {(addressStreet || addressCity || addressCountry) && (
          <>
            <Typography variant='subtitle2' component='div'>
              Miejsce pracy
            </Typography>
            <Typography variant='body2' gutterBottom component='div'>
              {addressStreet + " "} {addressCity + " "}
              {addressCountry}
            </Typography>
          </>
        )}
      </AccordionDetails>
    </Accordion>
  );
}

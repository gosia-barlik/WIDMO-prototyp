import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Step2Accordion from "../accordions/Step2-Accordion";
import Step3Accordion from "../accordions/Step3-Accordion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setAboutCompany,
  setLogo,
  setLogoPreview,
} from "../../../../../store/actions/stepOneActions";

export default function Step1MainInfo(props) {
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
  const {
    responsibilities,
    customizedResponsibilities,
    copiedQualificationEffects,
    copiedSelectedText,
    requirements,
    customizedRequirements,
    educationLevel,
    studiesName,
    studiesStage,
    certificateName,
    certificateStage,
    benefits,
    showEducationForm,
    customizedBenefits,
  } = useSelector((state) => state.stepTwoReducer);
  const {
    rodo,
    applicationWay,
    applicationExpectation,
    applicationDate,
    contactInformation,
  } = useSelector((state) => state.stepThreeReducer);
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
    <>
      <Stack style={{ marginBottom: "20px" }}>
        <Typography
          variant='subtitle2'
          component='div'
          style={{ color: "#784af4", fontWeight: "700" }}>
          Informacje podstawowe
        </Typography>
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

        {(salaryType ||
          salaryFrom ||
          salaryTo ||
          salaryCurrency ||
          salaryTime) && (
          <>
            <Typography variant='subtitle2' component='div'>
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
      </Stack>

      {(responsibilities.length>0 ||
        customizedResponsibilities.length>0||
        requirements.length>0 || customizedRequirements.length>0 ||
        benefits.length>0 || customizedBenefits.length>0) && <Step2Accordion />}
      {(rodo ||
        applicationWay ||
        applicationExpectation ||
        applicationDate ||
        contactInformation) && <Step3Accordion />}
    </>
  );
}

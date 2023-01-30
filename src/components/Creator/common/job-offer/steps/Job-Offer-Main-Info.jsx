import React from "react";

import ApartmentOutlinedIcon from "@material-ui/icons/ApartmentOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import TimelapseOutlinedIcon from "@material-ui/icons/TimelapseOutlined";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setAboutCompany,
  setLogo,
  setLogoPreview,
} from "../../../../../store/actions/stepOneActions";

export default function JobOfferMainInfo(props) {
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
    <>
      <Stack className='offer-section-container section-maininfo'>
        {searchedPosition ? (
          <Typography variant='h6' gutterBottom component='div'>
            {searchedPosition}
          </Typography>
        ) : (
          <Typography variant='h6' gutterBottom component='div'>
            Nazwa stanowiska
          </Typography>
        )}

        {companyName ? (
          <Typography variant='body2' gutterBottom component='div'>
            {companyName}
          </Typography>
        ) : (
          <Typography variant='body2' gutterBottom component='div'>
            Nazwa firmy
          </Typography>
        )}

        {aboutCompany ? (
          <Typography variant='body2' gutterBottom component='div'>
            {aboutCompany}
          </Typography>
        ) : (
          <Typography variant='body2' gutterBottom component='div'>
            Krótki opis firmy
          </Typography>
        )}

        {logoPreview && (
          <img className='logo-preview' src={logoPreview} id={"logo-photo"} />
        )}

        {salaryType ||
        salaryFrom ||
        salaryTo ||
        salaryCurrency ||
        salaryTime ||
        salaryContract ? (
          <Typography variant='subtitle2' gutterBottom component='div'>
            {salaryFrom} {salaryTo ? " - " + salaryTo : ""}
            {" " + salaryCurrency} {salaryTime ? "/ " + salaryTime : ""}
            {" " + salaryType} {" " + salaryContract}
          </Typography>
        ) : (
          <Typography variant='subtitle2' gutterBottom component='div'>
            Wynagrodzenie
          </Typography>
        )}
        <Grid container spacing={3} style={{marginTop:"24px"}}>
          {workModel && (
            <Grid item xs={6}>
              <Typography variant='body2' gutterBottom component='div'>
                <ApartmentOutlinedIcon style={{ fontSize: "medium" }} />
                {workModel}
              </Typography>
            </Grid>
          )}

          {salaryContract && (
            <Grid item xs={6}>
              <Typography variant='body2' gutterBottom component='div'>
                <DescriptionOutlinedIcon style={{ fontSize: "medium" }} />
                {salaryContract}
              </Typography>
            </Grid>
          )}

          {workMode && (
            <Grid item xs={6}>
              <Typography variant='body2' gutterBottom component='div'>
                <TimelapseOutlinedIcon style={{ fontSize: "medium" }} />
                {workMode}
              </Typography>
            </Grid>
          )}

          {recruitmentMode && (
            <Grid item xs={6}>
              <Typography variant='body2' gutterBottom component='div'>
                <ChatBubbleOutlineOutlinedIcon style={{ fontSize: "medium" }} />
                {recruitmentMode}
              </Typography>
            </Grid>
          )}
          {(addressStreet || addressCity || addressCountry) && (
            <Grid item xs={6}>
              <Typography variant='body2' gutterBottom component='div'>
                <RoomOutlinedIcon style={{ fontSize: "medium" }} />
                {addressStreet + " "} {addressCity + " "}
                {addressCountry}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Stack>
    </>
  );
}

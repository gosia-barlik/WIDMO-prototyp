import React from "react";
import Typography from "@mui/material/Typography";
import Chip from "@material-ui/core/Chip";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";

export default function JobOfferContent(props) {
  const {
    responsibilitiesToHtml,
    requirementsToHtml,
    educationLevel,
    studiesName,
    studiesStage,
    certificateName,
    certificateStage,
    benefitsToHtml,
    showEducationForm,
  } = useSelector((state) => state.stepTwoReducer);
  const dispatch = useDispatch();

  // const removeResponsibility = (responsibility) => {
  //   const filteredResponsibilities = responsibilities.filter(
  //     (obj) => obj != responsibility
  //   );
  //   dispatch(setResponsibilities(filteredResponsibilities));
  // };
 
  // const removeRequirement = (requirement) => {
  //   const filteredRequirements = requirements.filter(
  //     (obj) => obj != requirement
  //   );
  //   dispatch(setRequirements(filteredRequirements));
  // };

  // const removeBenefit = (benefit) => {
  //   const filteredBenefits = benefits.filter((obj) => obj != benefit);
  //   dispatch(setBenefits(filteredBenefits));
  // };


  return (

    <>
      <Stack className='offer-section-container section-offer'>
        <Typography variant='subtitle2' component='div'>
          Zakres obowiązków
        </Typography>
        
        {responsibilitiesToHtml && <Typography style={{fontSize:14}} dangerouslySetInnerHTML={{__html: responsibilitiesToHtml.toString().replaceAll('</li>,', '</li>')}}></Typography>}
        
        <Typography
          variant='subtitle2'
          component='div'
          style={{ marginTop: "6px" }}>
          Wymagania
        </Typography>
        {requirementsToHtml && <Typography style={{fontSize:14}} dangerouslySetInnerHTML={{__html: requirementsToHtml.toString().replaceAll('</li>,', '</li>')}}></Typography>}

        {showEducationForm == true && (
          <>
            <Typography
             variant='subtitle2'
              gutterBottom
              component='div'
              style={{ marginTop: "8px" }}>
              Wykształcenie
            </Typography>
            <>
              {educationLevel.length > 0 && (
                <Stack direction='row' spacing={1}>
                  {educationLevel.map((level) => (
                    <Chip
                      className='styled-chip'
                      key={level}
                      variant='outlined'
                      label={level}
                      style={{ margin: "2px" }}
                    />
                  ))}
                </Stack>
              )}
              {studiesName.length > 0 && (
                <>
                  {studiesName && (
                    <Typography
                      variant='body2'
                      gutterBottom
                      component='div'
                      style={{ marginTop: "4px" }}>
                      na kierunku
                    </Typography>
                  )}
                  <Stack direction='row' spacing={1}>
                    {studiesName.map((name) => (
                      <Chip
                        className='styled-chip'
                        key={name}
                        variant='outlined'
                        label={name}
                        style={{ margin: "2px" }}
                      />
                    ))}
                  </Stack>
                </>
              )}

              {studiesStage.length > 0 && (
                <Stack direction='row' spacing={1}>
                  {studiesStage.map((stage) => (
                    <Chip
                      className='styled-chip'
                      key={stage}
                      variant='outlined'
                      label={stage}
                      style={{ margin: "2px" }}
                    />
                  ))}
                </Stack>
              )}

              <br></br>
              {certificateName.length > 0 && (
                <>
                  <Typography
                    variant='body2'
                    gutterBottom
                    component='div'
                    style={{ marginTop: "4px" }}>
                    Mile widziana certyfikacja
                  </Typography>
                  <Stack direction='row' spacing={1}>
                    {certificateName.map((name) => (
                      <Chip
                        className='styled-chip'
                        key={name}
                        variant='outlined'
                        label={name}
                        style={{ margin: "2px" }}
                      />
                    ))}
                  </Stack>
                </>
              )}
              <Stack direction='row' spacing={1}>
                {certificateStage.map((stage) => (
                  <Chip
                    className='styled-chip'
                    key={stage}
                    variant='outlined'
                    label={stage}
                    style={{ margin: "2px" }}
                  />
                ))}
              </Stack>
            </>
          </>
        )}

        <Typography
          variant='subtitle2'
          component='div'
          style={{ marginTop: "6px" }}>
          Co oferujemy
        </Typography>

        <Typography
          variant='subtitle2'
          component='div'
          style={{ marginTop: "6px" }}>
          Benefity
        </Typography>
        {benefitsToHtml && <Typography style={{fontSize:14}} dangerouslySetInnerHTML={{__html: benefitsToHtml.toString().replaceAll('</li>,', '</li>')}}></Typography>}
      </Stack>
    </>
  );
}

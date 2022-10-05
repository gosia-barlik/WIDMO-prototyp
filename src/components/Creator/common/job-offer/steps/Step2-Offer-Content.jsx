import React from "react";
import Typography from "@mui/material/Typography";
import Grow from "@material-ui/core/Grow";
import Chip from "@material-ui/core/Chip";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";

import {
  setCopiedQualificationEffects,
  setCopiedSelectedText,
  setRequirements,
  setCustomizedRequirements,
  setResponsibilities,
  setCustomizedResponsibilities,
  setBenefits,
  setCustomizedBenefits,
} from "../../../../../store/actions/stepTwoActions";

export default function Step2OfferContent(props) {
  const {
    responsibilities,
    responsibilitiesToHtml,
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
  const dispatch = useDispatch();

  const removeQualificationEffect = (effect) => {
    const filteredCopiedQualificationEffects =
      copiedQualificationEffects.filter((obj) => obj != effect);
    dispatch(setCopiedQualificationEffects(filteredCopiedQualificationEffects));
  };

  const removeSelectedText = (text) => {
    const filteredSelectedText = copiedSelectedText.filter(
      (obj) => obj != text
    );
    dispatch(setCopiedSelectedText(filteredSelectedText));
  };
  const removeResponsibility = (responsibility) => {
    const filteredResponsibilities = responsibilities.filter(
      (obj) => obj != responsibility
    );
    dispatch(setResponsibilities(filteredResponsibilities));
  };
  const removeCustomizedResponsibility = (responsibility) => {
    const filteredResponsibilities = customizedResponsibilities.filter(
      (obj) => obj != responsibility
    );
    dispatch(setCustomizedResponsibilities(filteredResponsibilities));
  };

  const removeRequirement = (requirement) => {
    const filteredRequirements = requirements.filter(
      (obj) => obj != requirement
    );
    dispatch(setRequirements(filteredRequirements));
  };

  const removeCustomizedRequirement = (requirement) => {
    const filteredRequirements = customizedRequirements.filter(
      (obj) => obj != requirement
    );
    dispatch(setCustomizedRequirements(filteredRequirements));
  };

  const removeBenefit = (benefit) => {
    const filteredBenefits = benefits.filter((obj) => obj != benefit);
    dispatch(setBenefits(filteredBenefits));
  };

  const removeCustomizedBenefit = (customizedBenefit) => {
    const filteredBenefits = customizedBenefits.filter(
      (obj) => obj != customizedBenefit
    );
    dispatch(setCustomizedBenefits(filteredBenefits));
  };

  return (
    <>
      <Stack style={{ marginBottom: "20px" }}>
        <Typography variant='subtitle2' component='div'>
          Zakres obowiązków
        </Typography>
        {responsibilitiesToHtml && <Typography dangerouslySetInnerHTML={{__html: responsibilitiesToHtml}}></Typography>}
        {/* {(responsibilities || customizedResponsibilities) && (
          <>
            {responsibilities.map((responsibility, index) => (
              <Grow
                in={true}
                {...(responsibility ? { timeout: index * 1000 } : {})}>
                <Chip
                  className='styled-chip'
                  key={responsibility}
                  onDelete={() => {
                    removeResponsibility(responsibility);
                  }}
                  variant='outlined'
                  label={responsibility}
                />
              </Grow>
            ))}

            {customizedResponsibilities.map((responsibility) => (
              <Chip
                className='styled-chip'
                key={responsibility.name}
                onDelete={() => {
                  removeCustomizedResponsibility(responsibility);
                }}
                variant='outlined'
                label={responsibility.name}
              />
            ))}
          </>
        )}

        {copiedQualificationEffects && (
          <>
            {copiedQualificationEffects.map((effect) => (
              <Chip
                className='styled-chip'
                key={effect}
                onDelete={() => {
                  removeQualificationEffect(effect);
                }}
                variant='outlined'
                label={effect}
              />
            ))}
          </>
        )}
        {copiedSelectedText && (
          <>
            {copiedSelectedText.map((text) => (
              <Chip
                className='styled-chip'
                key={text}
                onDelete={() => {
                  removeSelectedText(text);
                }}
                variant='outlined'
                label={text}
              />
            ))}
          </>
        )} */}
        <Typography
          variant='subtitle2'
          component='div'
          style={{ marginTop: "6px" }}>
          Wymagania
        </Typography>
        {(requirements.length > 0 || customizedRequirements.length > 0) && (
          <>
            {requirements.map((requirement, index) => (
              <Grow
                in={true}
                {...(requirement ? { timeout: index * 1000 } : {})}>
                <Chip
                  className='styled-chip'
                  key={requirement}
                  onDelete={() => {
                    removeRequirement(requirement);
                  }}
                  variant='outlined'
                  label={requirement}
                />
              </Grow>
            ))}
            {customizedRequirements.map((reuirement) => (
              <Chip
                className='styled-chip'
                key={reuirement.name}
                onDelete={() => {
                  removeCustomizedRequirement(reuirement);
                }}
                variant='outlined'
                label={reuirement.name}
              />
            ))}
          </>
        )}

        {showEducationForm == true && (
          <>
            <Typography
              variant='body2'
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
        {(benefits.length > 0 || customizedBenefits.length > 0) && (
          <>
            <Stack
              direction='row'
              spacing={1}
              style={{ display: "inline-block" }}>
              {benefits.map((benefit, index) => (
                <Grow in={true} {...(benefit ? { timeout: index * 1000 } : {})}>
                  <Chip
                    className='styled-chip'
                    key={benefit}
                    onDelete={() => {
                      removeBenefit(benefit);
                    }}
                    variant='outlined'
                    label={benefit}
                    style={{ margin: "2px" }}
                  />
                </Grow>
              ))}
              {customizedBenefits.map((benefit) => (
                <Chip
                  className='styled-chip'
                  key={benefit.name}
                  onDelete={() => {
                    removeCustomizedBenefit(benefit);
                  }}
                  variant='outlined'
                  label={benefit.name}
                  style={{ margin: "2px" }}
                />
              ))}
            </Stack>
          </>
        )}
      </Stack>
    </>
  );
}
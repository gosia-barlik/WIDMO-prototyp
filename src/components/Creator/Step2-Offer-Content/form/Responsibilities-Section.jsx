import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import QualificationInformation from "./Qualification-Information";
import Wysiwyg from "./Wysiwyg";
import { useDispatch, useSelector } from "react-redux";
import {
  setResponsibilities,
  setResponsibilitiesToHtml,
  setCustomizedResponsibilities,
  setShowQualificationForm,
  setQualificationName,
  setQualificationCharacteristic,
} from "../../../../store/actions/stepTwoActions";

const useStyles = makeStyles((theme) => ({
  textField: {
    fontSize: "14px",
    width: "25vw",
  },
}));

export default function ResponsibilitiesSection(props) {

  const classes = useStyles();
  const {
    responsibilities,
    responsibilitiesToHtml,
    customizedResponsibilities,
    copiedSelectedText,
    showQualificationForm,
  } = useSelector((state) => state.stepTwoReducer);
  const dispatch = useDispatch();

  
    //RESPONSIBILITIES
    const onSetResponsibilities = (responsibilities) => {
      dispatch(setResponsibilities(responsibilities));
    };
    const onSetResponsibilitiesToHtml = (responsibilitiesToHtml) => {
      dispatch(setResponsibilitiesToHtml(responsibilitiesToHtml));
    };

  // const onSetQualificationInfo = (e) => {
  //   e.preventDefault();
  //   dispatch(setShowQualificationForm(!showQualificationForm));
  //   dispatch(setQualificationName(qualificationNameFixture));
  //   dispatch(
  //     setQualificationCharacteristic(qualitficationCharacteristicFixture)
  //   );
  // };

  // DYNAMIC SECTION
  // let handleChange = (i, e) => {
  //   let newResponsibilities = [...customizedResponsibilities];
  //   newResponsibilities[i][e.target.name] = e.target.value;
  //   dispatch(setCustomizedResponsibilities(newResponsibilities));
  //   console.log(customizedResponsibilities);
  // };

  // let addFormFields = () => {
  //   dispatch(
  //     setCustomizedResponsibilities([
  //       ...customizedResponsibilities,
  //       { name: "" },
  //     ])
  //   );
  // };

  // let removeFormFields = (i) => {
  //   let newResponsibilities = [...customizedResponsibilities];
  //   newResponsibilities.splice(i, 1);
  //   dispatch(setCustomizedResponsibilities(newResponsibilities));
  // };

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(JSON.stringify(customizedResponsibilities));
  // };


  return (
    <Stack
      spacing={2}
      direction='column'
      style={{ justifyContent: "right", paddingTop: "5px" }}>
      <Typography variant='h6' gutterBottom component='div'>
        Zakres obowiązków
      </Typography>
      <Card className='styled-card'>
       <Wysiwyg contentToEdit={responsibilitiesToHtml} setValueToHtml={onSetResponsibilitiesToHtml}/>
      </Card>

      {showQualificationForm === true && <QualificationInformation />}

      {/* DYNAMIC SECTION*/}
      {/* <Card
        className='styled-card'
        style={{ display: "flex", flexDirection: "column" }}>
        {customizedResponsibilities.map((element, index) => (
          <div className='form-inline' key={index}>
            <TextField
              className={classes.textField}
              variant='outlined'
              size='small'
              label='Obowiązek'
              placeholder='Wpisz swój obowiązek'
              fullWidth
              type='text'
              name='name'
              value={element.name || ""}
              onChange={(e) => handleChange(index, e)}
            />
            {index ? (
              <IconButton
                component='span'
                className='styled-icon-button'
                style={{ marginTop: "-4px" }}
                onClick={() => removeFormFields(index)}>
                <RemoveIcon />
              </IconButton>
            ) : null}
          </div>
        ))}
        <div className='button-section'>
          <IconButton
            className='styled-icon-button'
            component='span'
            onClick={() => addFormFields()}>
            <AddIcon />
          </IconButton>
          {customizedResponsibilities.length === 0
            ? "Dodaj swój element"
            : "Dodaj kolejny element"}
        </div>
      </Card> */}
    </Stack>
  );
}

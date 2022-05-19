import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setResponsibilities,
  setShowResponsibilitiesButton,
  setShowQualificationForm,
  setQualificationName,
  setQualificationCharacteristic,
  setQualificationEffects
} from "../../../../store/actions/stepTwoActions";


const ColorButton = styled(Button)(() => ({
  textTransform: "none",
  width: "100%",
}));

export default function AddResponsibilitiesButtons(props) {
  const { showResponsibilitiesButton, responsibilities, copiedQualificationEffects, copiedSelectedText, showQualificationForm } = useSelector((state) => state.stepTwoReducer);
  const dispatch = useDispatch();

  const responsibilitesFixture = [
    "diagnozowanie usterek mechanicznych",
    "wykonywanie napraw",
    "bieżące usuwanie awarii i usterek",
  ];
  const qualificationNameFixture = "Elektromechanik pojazdów samochodowych";
  const qualitficationCharacteristicFixture = "Absolwent szkoły prowadzącej kształcenie w zawodzie elektromechanik pojazdów samochodowych powinien być przygotowany do wykonywania zadań zawodowych w zakresie kwalifikacji MOT.02. Obsługa, diagnozowanie oraz naprawa mechatronicznych systemów pojazdów samochodowych: 1) przeprowadzania obsługi instalacji i konserwacji mechatronicznych systemów pojazdów samochodowych; 2) diagnozowania stanu technicznego mechatronicznych systemów pojazdów samochodowych; 3) wykonywania napraw elektrycznych i elektronicznych układów pojazdów samochodowych";
  const qualificationEffectsFixture = [
    {
      name: "Podstawy motoryzacji",
      effects: [
        "Rozróżnia zjawiska związane z motoryzacją",
        "Charakteryzuje zjawiska związane z motoryzacją",
        "Przeprowadza pomiary warsztatowe motoryzacji",
      ],
    },
    {
      name: "Przeprowadzanie obsługi i konserwacji mechatronicznych systemów pojazdów samochodowych",
      effects: [
        "Rozróżnia zjawiska związane z elektrycznością",
        "Charakteryzuje zjawiska związane z elektromagnetyzmem",
        "Przeprowadza pomiary warsztatowe",
      ],
    },
  ];

  const onSetResponsibilities = (e) => {
    let newResponsibilites;
    
    if(responsibilities.length > 0)
      newResponsibilites = []
    else
      newResponsibilites = responsibilitesFixture;

    dispatch(setResponsibilities(newResponsibilites));
    dispatch(setShowResponsibilitiesButton(false));
  };

  const onSetQualificationInfo = (e) => {

    e.preventDefault();
    dispatch(setShowQualificationForm(!showQualificationForm));
    dispatch(setQualificationName(qualificationNameFixture));
    dispatch(setQualificationCharacteristic(qualitficationCharacteristicFixture));
    dispatch(setQualificationEffects(qualificationEffectsFixture));
  };
  const resetShowQualificationForm = (e) => {
    dispatch(setShowQualificationForm(false));
  };

  return (
    <Stack
      spacing={2}
      direction='column'
      style={{ justifyContent: "right", paddingTop: "5px" }}>
        <ColorButton className='styled-button' variant='contained'>
          <IconButton
            className='styled-icon-button'
            component='span'
            onClick={onSetResponsibilities}>
            {responsibilities.length == 0 ? <AddIcon /> : <RemoveIcon/>}
          </IconButton>
          Dodaj najczęściej poszukiwane umiejętności na rynku pracy
        </ColorButton>
      <ColorButton className='styled-button' variant='contained'>
        <IconButton
          className='styled-icon-button'
          component='span'
          onClick={onSetQualificationInfo}>
            {(showQualificationForm  == false)  ? <AddIcon /> : <RemoveIcon/>}
            {/* {(copiedSelectedText.length == 0 && copiedQualificationEffects.length  == 0)  ? <AddIcon /> : <RemoveIcon/>} */}
        </IconButton>
        Dodaj informacje z opisów kwalifikacji i zestawów efektów uczenia się
      </ColorButton>
    </Stack>
  );
}

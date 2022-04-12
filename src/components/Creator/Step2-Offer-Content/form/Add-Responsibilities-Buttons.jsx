import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@material-ui/icons/Add";
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
  const { showResponsibilitiesButton } = useSelector((state) => state.stepTwoReducer);
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
    e.preventDefault();
    dispatch(setResponsibilities(responsibilitesFixture));
    dispatch(setShowResponsibilitiesButton(false));
  };

  const onSetQualificationInfo = (e) => {

    e.preventDefault();
    dispatch(setShowQualificationForm(true));
    dispatch(setQualificationName(qualificationNameFixture));
    dispatch(setQualificationCharacteristic(qualitficationCharacteristicFixture));
    dispatch(setQualificationEffects(qualificationEffectsFixture));
  };
  const resetShowQualificationForm = (e) => {
    dispatch(setShowQualificationForm(false));
  };

  // const copyQualificationEffect = (e) => {
  //   setcopiedQualificationEffects((oldArray) => [...oldArray, e]);
  // };

  // const getSelectedText = () => {
  //   if (window.getSelection) {
  //     setCopiedSelectedText((oldArray) => [
  //       ...oldArray,
  //       window.getSelection().toString(),
  //     ]);
  //   } else if (document.selection) {
  //     console.log(document.selection.createRange().text);
  //   }
  // };

  return (
    <Stack
      spacing={2}
      direction='column'
      style={{ justifyContent: "right", paddingTop: "5px" }}>
      {showResponsibilitiesButton ?
        <ColorButton className='styled-button' variant='contained'>
          <IconButton
            className='styled-icon-button'
            component='span'
            onClick={onSetResponsibilities}>
            <AddIcon />
          </IconButton>
          Dodaj najczęściej poszukiwane umiejętności na rynku pracy
        </ColorButton> : null}
      <ColorButton className='styled-button' variant='contained'>
        <IconButton
          className='styled-icon-button'
          component='span'
          onClick={onSetQualificationInfo}>
          <AddIcon />
        </IconButton>
        Dodaj informacje z opisów kwalifikacji i zestawów efektów uczenia się
      </ColorButton>
    </Stack>
  );
}

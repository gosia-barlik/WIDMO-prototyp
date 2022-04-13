import React from "react";
import Typography from "@mui/material/Typography";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { setRODO } from "../../../../store/actions/stepThreeActions";

export default function DataProcessing(props) {
  const dispatch = useDispatch();

  const addRODO = () => dispatch(setRODO(document.querySelector("#RODO").value));

  return (
    <>
      <Typography variant='subtitle2' gutterBottom component='div'>
        Przetwarzanie danych osobowych
      </Typography>
      <TextareaAutosize
      id="RODO"
      name="RODO"
      style={{lineHeight:'20px'}}
      aria-label="minimum height"
      minRows={3}
      defaultValue="Administratorem danych osobowych jest NazwaFirmy sp. z o.o. zarejestrowana w AdresFirmy. Ze specjalistą ochrony danych można kontaktować się pod adresem email: biuro@gmaill. Dane osobowe przetwarzane będą na podstawie art. 6 ust. 1 lit a) RODO Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO) w celu rekrutacji na stanowisko określone w ogłoszeniu oraz późniejszych rekrutacji o podobnym profilu w zakresie: imię i nazwisko, adres zamieszkania, adres e-mail, nr telefonu, wykształcenie, informacje o wcześniejszym zatrudnieniu, kursy i certyfikaty oraz inne informacje podane w przesłanym cv bezpośrednio związane z rekrutacją. Dane przetwarzane będą do momentu wycofania zgody. Osoba, której dane przetwarzamy posiada prawo dostępu do treści swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, prawo do wniesienia sprzeciwu wobec przetwarzania oraz prawo do cofnięcia zgody w dowolnym momencie. Osoba, której dane przetwarzamy może także wnieść skargę do Urzędu Ochrony Danych Osobowych, jeżeli uzna, że przetwarzanie jej danych odbywa się niezgodnie z prawem."
    />  
    <Stack
      spacing={2}
      direction='row'
      style={{ justifyContent: "center", paddingTop: "5px" }}>
      <Button
        className='button-contained'
        variant='contained'
        onClick={addRODO}>
        Dodaj
      </Button>
    </Stack>
    </>
  );
}
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "24px"
  },
}));

export default function AlertAbout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert severity='info' onClose={() => {}}>
        <AlertTitle>Info</AlertTitle>
        Napisz w jakiej branży działa firma, czym się zajmuje, od kiedy istnieje na rynku, gdzie znajduje się  jej siedziba,  jakie są jej główne wartości. Skoncentruj się na odbiorcy, pisz  prosto i konkretnie. Jeśli chcesz dowiedzieć się więcej, jak napisać ten tekst, <strong>skorzystaj z naszego poradnika (link)</strong>
      </Alert>
    </div>
  );
}

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CvQualifications from "./Step3-Cv-Qualifications";
import CvPreview from "./Step3-Cv-Preview";
import { useTheme } from "@mui/material/styles";

export default function CVDetails(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={props.open}
      onClose={props.handleDetailClose}
      aria-labelledby='responsive-dialog-title'>
      <DialogTitle id='responsive-dialog-title'>{""}</DialogTitle>
      <DialogContent style={{ minWidth: "600px" }}>
        <Grid
          item
          xs={7}
          style={{ margin: "50px 20px 20px 20px", textAlign: "left" }}>
          <Paper className='form-container-box'>
            <CvPreview text={props.annotatedText} />
          </Paper>
        </Grid>
        <Grid
          item
          xs={5}
          style={{ margin: "50px 20px 20px 20px", textAlign: "left" }}>
          <Paper
            className='form-container-box'
            style={{ marginBottom: "12px" }}>
            <Typography variant='subtitle1' style={{ fontWeight: "600" }}>
              Dopasowanie
            </Typography>
          </Paper>

          <Paper className='form-container-box'>
            <CvQualifications
              sortedResponse={props.sortedResponse}
              professionalSkills={props.professionalSkills}
              softSkills={props.softSkills}
              languageSkills={props.languageSkills}
              itSkills={props.itSkills}
              education={props.education}
            />
          </Paper>

          <Paper className='form-container-box' style={{ marginTop: "12px" }}>
            <Typography variant='subtitle1' style={{ fontWeight: "600" }}>
              Inne umiejętności
            </Typography>
          </Paper>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button
          className='button-outlined'
          variant='outlined'
          autoFocus
          onClick={props.handleDetailClose}>
          ZAMKNIJ
        </Button>
      </DialogActions>
    </Dialog>
  );
}

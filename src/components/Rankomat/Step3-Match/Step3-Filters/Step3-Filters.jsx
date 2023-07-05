import React from "react";
import Typography from "@mui/material/Typography";
import { FormControlLabel, FormGroup, Checkbox } from "@material-ui/core";
import { alpha, withStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../../store/actions/rankomatActions/rankomatStepThreeActions";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 12,
    maxWidth: 80,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    // fontFamily: ['"Segoe UI"', "Roboto", "Arial", "sans-serif"].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

export default function Step3Filters(props) {
  const dispatch = useDispatch();
  const { initialFilters } = useSelector(
    (state) => state.rankomatStepThreeReducer
  );
  const [checkboxes, setCheckboxes] = React.useState(initialFilters);

  const handleSelectChange = (e, checkboxId) => {
    const newCheckboxes = checkboxes.map((o) => {
      if (o.id == checkboxId) o.weight = e.target.value;
      return o;
    });
    setCheckboxes(newCheckboxes);
    dispatch(setFilters(newCheckboxes));
  };

  const handleCheckboxToggle = (checkbox) => () => {
    const newCheckboxes = checkboxes.map((e) => {
      if (e.id == checkbox.id) e.checked = !e.checked;
      return e;
    });

    setCheckboxes(newCheckboxes);
    dispatch(setFilters(newCheckboxes));
  };

  const getDisabled = (val) => {
    if (val) return { disabled: true };
    return {};
  };

  const filterCheckboxes = checkboxes.filter((e) => e.checked);

  return (
    <>
      <Typography
        variant='h6'
        component='div'
        style={{ padding: "20px 20px 0 20px" }}>
        Filtry
      </Typography>
      <Typography
        variant='body'
        component='div'
        style={{ padding: "20px" }}>
        Uporządkuj CV według wybranej kategorii
      </Typography>

      {checkboxes.map((checkbox) => (
        <FormGroup
          row
          className='o-form checkbox-container'
          key={"form-group" + checkbox.id}>
          <FormControlLabel
            key={checkbox.value}
            className={`filters-checkbox-${checkbox.id}`}
            control={
              <Checkbox
                name={checkbox.name}
                value={checkbox.value}
                id={checkbox.id.toString()}
                color='primary'
                onChange={handleCheckboxToggle(checkbox)}
                checked={checkbox.checked}
              />
            }
            label={checkbox.label}
          />
          <FormControl
            sx={{ m: 1 }}
            variant='standard'
            style={{ maxWidth: 90, display: checkbox.checked ? 'block' : 'none'}}
            {...getDisabled(!checkbox.checked)}>
            <InputLabel>Waga</InputLabel>
            <Select
              id={`filters-weight-${checkbox.id}`}
              autoWidth
              onChange={(e) => handleSelectChange(e, checkbox.id)}
              input={
                <BootstrapInput value={checkbox.weight ? checkbox.weight : 0} />
              }>
              <MenuItem value={1}>mało ważne</MenuItem>
              <MenuItem value={2}>średnio ważne</MenuItem>
              <MenuItem value={3}>bardzo ważne</MenuItem>
            </Select>
          </FormControl>
        </FormGroup>
      ))}

      {/* <CustomizedInput
        label={keyWordLabel}
        options={keyWord}
        onSetKeyWord={props.onSetKeyWord}
      /> */}
      <Button variant='contained' className='button-contained' style={{}}>
        Filtruj
      </Button>
    </>
  );
}

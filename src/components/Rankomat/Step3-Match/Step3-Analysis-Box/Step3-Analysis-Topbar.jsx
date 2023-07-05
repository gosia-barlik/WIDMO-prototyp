import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import RedoIcon from "@material-ui/icons/Redo";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import {
  setFavorites,
  setAll,
  setReserves,
  setRejected,
  setSelected,
  setChecked,
} from "../../../../store/actions/rankomatActions/rankomatStepThreeActions";
import { setResumes } from "../../../../store/actions/rankomatActions/rankomatStepTwoActions";

export default function AnalysisTopbar(props) {
  const topbarMenuAll = ["Wybrane", "Rezerwowe", "Odrzucone"];
  const topbarMenuFavorites = ["Wszystkie", "Rezerwowe", "Odrzucone"];
  const topbarMenuReserves = ["Wybrane", "Wszystkie", "Odrzucone"];
  const topbarMenuRejected = ["Wybrane", "Rezerwowe", "Wszystkie"];
  const {
    checked,
    all,
    favorites,
    rejected,
    reserves,
    selected,
    showAll,
    showRejected,
    showReserves,
    showFavorites,
  } = useSelector((state) => state.rankomatStepThreeReducer);

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const openMoveToMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMoveToMenu = () => {
    setAnchorEl(null);
  };

  // TOPBAR MENU
  const compareArrays = (arr1, arr2) => {
    let difference = arr1.filter((x) => !arr2.includes(x));
    return difference;
  };
  const patchArray = (arr1, arr2) => {
    let difference = arr1
      .filter((x) => !arr2.includes(x))
      .concat(arr2.filter((x) => !arr1.includes(x)));
    return difference;
  };

  const moveToAll = () => {
    dispatch(setAll(patchArray(selected, all)));
    showFavorites && dispatch(setAll(compareArrays(favorites, selected)));
    showRejected && dispatch(setRejected(compareArrays(rejected, selected)));
    showReserves && dispatch(setReserves(compareArrays(reserves, selected)));
    dispatch(setChecked([]));
    dispatch(setSelected([]));
  };

  const moveToFavorites = () => {
    dispatch(setFavorites(patchArray(selected, favorites)));
    showAll && dispatch(setAll(compareArrays(all, selected)));
    showRejected && dispatch(setRejected(compareArrays(rejected, selected)));
    showReserves && dispatch(setReserves(compareArrays(reserves, selected)));
    dispatch(setChecked([]));
    dispatch(setSelected([]));
  };

  const moveToReserves = () => {
    dispatch(setReserves(patchArray(selected, reserves)));

    showAll
      ? dispatch(setAll(compareArrays(all, selected)))
      : showRejected
      ? dispatch(setRejected(compareArrays(rejected, selected)))
      : dispatch(setFavorites(compareArrays(favorites, selected)));
    dispatch(setChecked([]));
    dispatch(setSelected([]));
  };

  const moveToRejected = () => {
    dispatch(setRejected(patchArray(selected, rejected)));

    showAll
      ? dispatch(setAll(compareArrays(all, selected)))
      : showReserves
      ? dispatch(setReserves(compareArrays(reserves, selected)))
      : dispatch(setFavorites(compareArrays(favorites, selected)));
    dispatch(setChecked([]));
    dispatch(setSelected([]));
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton edge='start' sx={{ mr: 2 }}>
          <DeleteOutlineIcon />
        </IconButton>
        <Tooltip title='Przenieś do'>
          <IconButton onClick={openMoveToMenu} size='small' sx={{ ml: 2 }}>
            <RedoIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={closeMoveToMenu}
        onClick={closeMoveToMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,

            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
        {showAll &&
          topbarMenuAll.map((text, index) => (
            <MenuItem>
              {index === 0 && <div onClick={moveToFavorites}>{text}</div>}
              {index === 1 && <div onClick={moveToReserves}>{text}</div>}
              {index === 2 && <div onClick={moveToRejected}>{text}</div>}
            </MenuItem>
          ))}

        {showFavorites &&
          topbarMenuFavorites.map((text, index) => (
            <MenuItem>
              {index === 0 && <div onClick={moveToAll}>{text}</div>}
              {index === 1 && <div onClick={moveToReserves}>{text}</div>}
              {index === 2 && <div onClick={moveToRejected}>{text}</div>}
            </MenuItem>
          ))}

        {showReserves &&
          topbarMenuReserves.map((text, index) => (
            <MenuItem>
              {index === 0 && <div onClick={moveToFavorites}>{text}</div>}
              {index === 1 && <div onClick={moveToAll}>{text}</div>}
              {index === 2 && <div onClick={moveToRejected}>{text}</div>}
            </MenuItem>
          ))}

        {showRejected &&
          topbarMenuRejected.map((text, index) => (
            <MenuItem>
              {index === 0 && <div onClick={moveToFavorites}>{text}</div>}
              {index === 1 && <div onClick={moveToReserves}>{text}</div>}
              {index === 2 && <div onClick={moveToAll}>{text}</div>}
            </MenuItem>
          ))}
      </Menu>
    </React.Fragment>
  );
}

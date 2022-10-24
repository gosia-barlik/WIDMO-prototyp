import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import RedoIcon from "@material-ui/icons/Redo";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbsUpDownOutlinedIcon from "@material-ui/icons/ThumbsUpDownOutlined";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites, setAll } from "../../../../store/actions/rankomatActions/rankomatStepThreeActions";
import { setResumes } from "../../../../store/actions/rankomatActions/rankomatStepTwoActions";

export default function AnalysisTopbar() {

  const { checked, all, selected } = useSelector((state) => state.rankomatStepThreeReducer);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const openMoveToMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMoveToMenu = () => {
    setAnchorEl(null);
  };
  const moveToFavorites = () => {
    
    dispatch(setFavorites(selected));
    dispatch(setAll(compareArrays(all,selected)));
   
  };

const compareArrays = (arr1, arr2)=> {
    let difference = arr1.filter(x => !arr2.includes(x));
    console.log(difference);
    return difference
    
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

        <MenuItem onClick={moveToFavorites}>
          <ListItemIcon>
            <ThumbUpAltOutlinedIcon fontSize='small' />
          </ListItemIcon>
          Wybrane
        </MenuItem>
        <MenuItem onClick={() => console.log("przenieś do Rezerwowe")}>
          <ListItemIcon>
            <ThumbsUpDownOutlinedIcon fontSize='small' />
          </ListItemIcon>
          Rezerwowe
        </MenuItem>
        <MenuItem onClick={() => console.log("przenieś do Odrzucone")}>
          <ListItemIcon>
            <ThumbDownAltOutlinedIcon fontSize='small' />
          </ListItemIcon>
          Odrzucone
        </MenuItem>

      </Menu>
    </React.Fragment>
  );
}

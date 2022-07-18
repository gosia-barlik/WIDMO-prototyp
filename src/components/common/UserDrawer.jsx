import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

import { useDispatch, useSelector } from "react-redux";
import { setIsDrawerOpen } from "../../store/actions/userActions";

const useStyles = makeStyles({
  list: {
    width: 250,
    fontFamily: "Montserrat",
  },
  fullList: {
    width: "auto",
  },
  empty: {
    height: 80,
    display: "flex",
    justifyContent: "end",
  },
  icon: {
    height: 26,
    width: 26,
    top: 18,
    right: 8,
  },
  backDrop: {
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.4)",
  },
});

export default function UserDrawer() {
  const classes = useStyles();
  const { isDrawerOpen } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const toggleUserDrawer = () => {
    dispatch(setIsDrawerOpen(!isDrawerOpen));
  };

  const list = (
    <div className={classes.list} role='presentation'>
      <div className={classes.empty}>
        <IconButton
          color='primary'
          component='span'
          className={classes.icon}
          onClick={toggleUserDrawer}>
          <ArrowBackIosRoundedIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {["Strona główna", "Moje dokumenty", "Kosz"].map((text, index) => (
          <ListItem button key={text} onClick={toggleUserDrawer}>
            <ListItemIcon>
              {index === 0 && <HomeRoundedIcon color='primary' />}
              {index === 1 && <FolderOpenOutlinedIcon color='primary' />}
              {index === 2 && <DeleteRoundedIcon color='primary' />}
            </ListItemIcon>
            <ListItemText primary={text} style={{ color: "black" }} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
      onClose={toggleUserDrawer}
      open={isDrawerOpen}
      BackdropProps={{
        classes: {
          root: classes.backDrop,
        },
      }}>
      {list}
    </Drawer>
  );
}

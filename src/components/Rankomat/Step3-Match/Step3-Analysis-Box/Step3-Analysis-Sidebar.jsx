import React from "react";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbsUpDownOutlinedIcon from "@material-ui/icons/ThumbsUpDownOutlined";
import MoveToInboxOutlinedIcon from "@material-ui/icons/MoveToInboxOutlined";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowAll,
  setShowFavorites,
  setShowReserves,
  setShowRejected,
} from "../../../../store/actions/rankomatActions/rankomatStepThreeActions";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    zIndex: 0,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function AnalysisSidebar(props) {
  const { showAll, showReserves, showFavorites, showRejected } = useSelector(
    (state) => state.rankomatStepThreeReducer
  );
  const dispatch = useDispatch();
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onSetShowAll = () => {
    setActive(0);
    dispatch(setShowAll(true));
    dispatch(setShowFavorites(false));
    dispatch(setShowReserves(false));
    dispatch(setShowRejected(false));
  };

  const onSetShowFavorites = () => {
    setActive(1);
    dispatch(setShowFavorites(true));
    dispatch(setShowAll(false));
    dispatch(setShowReserves(false));
    dispatch(setShowRejected(false));
  };

  const onSetShowReserves = () => {
    setActive(2);
    dispatch(setShowReserves(true));
    dispatch(setShowFavorites(false));
    dispatch(setShowAll(false));
    dispatch(setShowRejected(false));
  };

  const onSetShowRejected = () => {
    setActive(3);
    console.log(active);
    dispatch(setShowRejected(true));
    dispatch(setShowFavorites(false));
    dispatch(setShowAll(false));
    dispatch(setShowReserves(false));
  };

  const drawer = (
    <div style={{ zIndex: "1" }}>
      <div className={classes.toolbar} style={{ height: "210px" }} />
      <Divider />
      <List>
        <ListItem
          button
          key='wszystkie'
          className={active == "0" ? "active" : ""}
          onClick={() => onSetShowAll()}>
          <ListItemIcon>
            <MoveToInboxOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary='Wszystkie' />
        </ListItem>
        <ListItem
          button
          key='wybrane'
          className={active == "1" ? "active" : ""}
          onClick={() => onSetShowFavorites()}>
          <ListItemIcon>
            <ThumbUpAltOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary='Wybrane' />
        </ListItem>
        <ListItem
          button
          key='rezerwowe'
          className={active == "2" ? "active" : ""}
          onClick={() => onSetShowReserves()}>
          <ListItemIcon>
            <ThumbsUpDownOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary='Rezerwowe' />
        </ListItem>
        <ListItem
          button
          key='odrzucone'
          className={active == "3" ? "active" : ""}
          onClick={() => onSetShowRejected()}>
          <ListItemIcon>
            <ThumbDownAltOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary='Odrzucone' />
        </ListItem>
      </List>
      <Divider />
      <List>
        {["Wysłane", "Kosz"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <DeleteOutlineIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        edge='start'
        onClick={handleDrawerToggle}
        className={classes.menuButton}>
        <MenuIcon />
      </IconButton>

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

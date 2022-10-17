import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import "./Header.css";
import logo from "../../assets/logo.jpg";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsLoginOpen,
  setIsLoggedIn,
  setIsDrawerOpen,
} from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    marginLeft: "3%",
    marginRight: "4%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuPopover: {
    marginTop: 48,
    top: 48,
    fontSize: 14,
  },
  menuItem: {
    fontSize: 14,
  },
  logo: {
    width: "100%",
  },
  title: {
    flexGrow: 1,
    color: "black",
    fontFamily: "Montserrat",
    fontSize: "24px",
  },
}));

export default function Header() {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLoggedIn, isDrawerOpen } = useSelector(
    (state) => state.userReducer
  );

  const [isAccountMenuOpen, setAccountMenuOpen] = React.useState(null);
  const [isModulesMenuOpen, setModulesMenuOpen] = React.useState(null);

  const openAccountMenu = Boolean(isAccountMenuOpen);
  const openModulesMenu = Boolean(isModulesMenuOpen);

  //ACCOUNT MENU
  const handleAccountMenu = (event) => {
    setAccountMenuOpen(event.currentTarget);
  };
  const closeAccountMenu = () => {
    setAccountMenuOpen(null);
  };
  //MODULES MENU
  const handleModulesMenu = (event) => {
    setModulesMenuOpen(event.currentTarget);
  };
  const closeModulesMenu = () => {
    setModulesMenuOpen(null);
  };
  //LOGIN FORM
  const openLoginForm = () => {
    dispatch(setIsLoginOpen(true));
  };
  const logOut = () => {
    dispatch(setIsLoggedIn(false));
    navigate("/", { replace: true });
  };
  const toggleUserDrawer = () => {
    dispatch(setIsDrawerOpen(!isDrawerOpen));
  };

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className='navbar' elevation={1}>
        <Toolbar className='appbar-toolbar'>
          {isLoggedIn && (
            <div className={classes.navbar}>
              <IconButton
                className={classes.menuButton}
                aria-label='menu'
                onClick={toggleUserDrawer}>
                <MenuIcon />
              </IconButton>

              <NavLink to='/' component='div' className={classes.logo}>
                <img src={logo} className='App-logo' alt='logo' />
                {/* <Typography variant='h6' className={classes.title}>
                  AIRA
                </Typography> */}
              </NavLink>

              <div>
                <IconButton
                  aria-label='account of current user'
                  aria-controls='account-menu'
                  aria-haspopup='true'
                  onClick={handleAccountMenu}>
                  <AccountCircle />
                </IconButton>
                <Menu
                  className={classes.menuPopover}
                  id='account-menu'
                  anchorEl={isAccountMenuOpen}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={openAccountMenu}
                  onClose={closeAccountMenu}>
                  <MenuItem
                    className={classes.menuItem}
                    onClick={closeAccountMenu}>
                    Profil
                  </MenuItem>
                  <MenuItem
                    className={classes.menuItem}
                    onClick={closeAccountMenu}>
                    Ustawienia
                  </MenuItem>
                  <MenuItem className={classes.menuItem} onClick={logOut}>
                    Wyloguj
                  </MenuItem>
                </Menu>
              </div>
            </div>
          )}

          {isLoggedIn == false && (
            <div className={classes.navbar}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <NavLink to='/' component='div' className={classes.logo}>
                  <img src={logo} className='App-logo' alt='logo' />
                  {/* <Typography variant='h6' className={classes.title}>
                  AIRA
                </Typography> */}
                </NavLink>

                <div style={{ paddingTop: "12px", paddingLeft:"24px" }}>
                  <IconButton
                    aria-label='app modules'
                    aria-controls='modules-menu'
                    aria-haspopup='true'
                    onClick={handleModulesMenu}
                    className='modules-button'>
                    Moduły
                  </IconButton>
                  <Menu
                    className={classes.menuPopover}
                    id='modules-menu'
                    anchorEl={isModulesMenuOpen}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={openModulesMenu}
                    onClose={closeModulesMenu}>
                    <NavLink NavLink to='/creator'>
                      <MenuItem
                        className={classes.menuItem}
                        onClick={closeModulesMenu}>
                        Tworzenie ogłoszenia
                      </MenuItem>
                    </NavLink>
                    <NavLink to='/rankomat'>
                      <MenuItem
                        className={classes.menuItem}
                        onClick={closeModulesMenu}>
                        Analizowanie CV
                      </MenuItem>
                    </NavLink>
                    <MenuItem
                      className={classes.menuItem}
                      onClick={closeModulesMenu}>
                      Poradnik rekrutera
                    </MenuItem>
                  </Menu>
                </div>
              </div>

              <Button
                onClick={openLoginForm}
                color='primary'
                style={{ width: "150px" }}>
                Zaloguj się
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

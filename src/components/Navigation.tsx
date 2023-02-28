import { AccountCircle } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useMediaQuery,
  Button,
  Box,
  useTheme,
  Theme,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store";
import { login, logout, selectIsAuth } from "../store/reducers/auth";
import { ICredentials } from "../types/auth";
import DrawerComponent from "./DrawerComponent";

const pages = [{ id: 0, name: "News", url: "/news" }];

const useStyles = makeStyles(() => ({
  navlinks: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    justifyContent: "start",
  },
  logo: { flexGrow: "0", cursor: "pointer" },
  link: {
    textDecoration: "none",
    fontSize: "20px",
    marginLeft: "10px",
    "&:hover": { color: "primary", borderBottom: "1px solid lightblue" },
  },
}));

const Navigation = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const theme: Theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints?.down("md"));

  const isAuth: boolean = useSelector(selectIsAuth);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLogin = () => {
    const user: ICredentials = {
      login: "admin",
      password: "1234",
    };
    dispatch(login(user));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const settings = [
    { id: 0, name: "Profile", url: "/profile" },
    { id: 1, name: "Logout", handler: handleLogout },
  ];

  return (
    <AppBar position="sticky" color="inherit">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h6" className={classes.logo} color="primary">
          AlterEGO-Test
        </Typography>

        {isMobile ? (
          <DrawerComponent />
        ) : (
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mx: 4 }}>
            <Box className={classes.navlinks} width="90%">
              {pages.map((page) => (
                <Link to={page.url} className={classes.link} key={page.id}>
                  <Typography color="primary">{t(page.name)}</Typography>
                </Link>
              ))}
            </Box>
            {isAuth ? (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {settings.map(({ id, name, url, handler }) => (
                    <MenuItem onClick={handleClose} key={id}>
                      {url ? (
                        <Link to={url}>
                          <Typography color="primary">{t(name)}</Typography>
                        </Link>
                      ) : (
                        <Link to={"/"} onClick={handler}>
                          <Typography color="primary">{t(name)}</Typography>
                        </Link>
                      )}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ) : (
              <Button variant="outlined" color="primary" onClick={handleLogin}>
                {t("Login")}
              </Button>
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;

import { useTheme } from "@emotion/react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useMediaQuery,
  Button,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store";
import { login } from "../store/reducers/auth";
import { ICredentials } from "../types/auth";
import DrawerComponent from "./DrawerComponent";

const pages = [{ id: 0, name: "News", url: "/news" }];
const settings = ["Profile", "Logout"];

const useStyles = makeStyles((theme) => ({
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const isAuth: boolean = true;

  const handleLogin = () => {
    const user: ICredentials = {
      login: "admin",
      password: "1234",
    };
    dispatch(login(user));
  };

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
              <Link to="/profile" className={classes.link}>
                <Typography color="primary">{t("Profile")}</Typography>
              </Link>
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

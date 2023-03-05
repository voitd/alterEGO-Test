import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { CloseRounded, MenuOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Credentials } from "../types/auth";
import { MobileMenuItem } from "./UI/MobileMenuItem";
import useStyles from "../assets/styles/styles";
import useAuth from "../hooks/useAuth";

const pages = [
  { id: 0, name: "News", url: "/news" },
  { id: 1, name: "Profile", url: "/profile" },
  { id: 2, name: "Logout", url: "/" },
  { id: 2, name: "Login", url: "" },
];

const DrawerComponent = () => {
  const { doLogin, doLogout, isAuth } = useAuth();
  const { t } = useTranslation();
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleLogout = () => {
    doLogout();
  };

  const handleLogin = () => {
    const user: Credentials = {
      login: "admin",
      password: "1234",
    };
    doLogin(user);
  };

  const handleToggle = () => {
    setOpenDrawer((prev) => !prev);
  };

  return (
    <>
      <Drawer
        anchor="top"
        sx={{
          width: 250,
          color: "#fff",
        }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Toolbar
          sx={{
            position: "relative",
            backgroundColor: "primary.light",
          }}
        >
          <Typography variant="h4" className={classes.logo}>
            AlterEGO-test
          </Typography>
          <CloseRounded
            onClick={() => setOpenDrawer(false)}
            className={classes.closeIcon}
          />
        </Toolbar>
        <Box sx={{ backgroundColor: "primary.light" }} height="100vh">
          <List sx={{ height: "100vh" }}>
            {pages.map((page) => (
              <MobileMenuItem
                page={page}
                onClick={handleToggle}
                key={page.id}
              />
            ))}
            {isAuth ? (
              <>
                <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                    <Link to="/profile" className={classes.link}>
                      {t("Profile")}
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                    <Link
                      to="/"
                      onClick={handleLogout}
                      className={classes.link}
                    >
                      {t("Logout")}
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
              </>
            ) : (
              <>
                <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                    <Link to="/" onClick={handleLogin} className={classes.link}>
                      {t("Login")}
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
              </>
            )}
          </List>
        </Box>
      </Drawer>
      <Box position="absolute" top={6} right={12}>
        <IconButton
          className={classes.icon}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuOutlined color="primary" />
        </IconButton>
      </Box>
    </>
  );
};

export default DrawerComponent;

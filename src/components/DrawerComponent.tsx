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
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../store";
import { login, logout, selectIsAuth } from "../store/reducers/auth";
import { ICredentials } from "../types/auth";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  link: { textDecoration: "none", color: "white", fontSize: "20px" },
  icon: { color: "blue", cursor: "pointer" },
  closeIcon: { color: "white", cursor: "pointer" },
  logo: { flexGrow: "1", cursor: "pointer", color: "white" },
  draw: { background: "red" },
}));

const pages = [{ id: 0, name: "News", url: "/news" }];

const DrawerComponent = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const isAuth: boolean = useSelector(selectIsAuth);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLogin = () => {
    const user: ICredentials = {
      login: "admin",
      password: "1234",
    };
    dispatch(login(user));
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
            {pages.map((page) => {
              return (
                <Box key={page.id}>
                  <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                      <Link to={page.url} className={classes.link}>
                        {t(page.name)}
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <Divider />
                </Box>
              );
            })}
            {isAuth ? (
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/profile" className={classes.link}>
                    {t("Profile")}
                  </Link>
                </ListItemText>
              </ListItem>
            ) : (
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/" onClick={handleLogin} className={classes.link}>
                    {t("Login")}
                  </Link>
                </ListItemText>
              </ListItem>
            )}

            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/" onClick={handleLogout} className={classes.link}>
                  {t("Logout")}
                </Link>
              </ListItemText>
            </ListItem>

            <Divider />
          </List>
        </Box>
      </Drawer>
      <IconButton
        className={classes.icon}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuOutlined color="primary" />
      </IconButton>
    </>
  );
};

export default DrawerComponent;

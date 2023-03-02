import { useTranslation } from "react-i18next";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { login, selectIsAuth } from "../store/reducers/auth";
import { Credentials } from "../types/auth";
import { BaseLink } from "./UI/BaseLink";
import { pages } from "../mocks/pages";
import { UserMenu } from "./UI/UserMenu";

const useStyles = makeStyles(() => ({
  navlinks: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    justifyContent: "start",
  },
  link: {
    textDecoration: "none",
    fontSize: "20px",
    marginLeft: "10px",
    "&:hover": { color: "primary", borderBottom: "1px solid lightblue" },
  },
}));

export const BaseNav = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const classes = useStyles();

  const isAuth: boolean = useSelector(selectIsAuth);

  const handleLogin = () => {
    const user: Credentials = {
      login: "admin",
      password: "1234",
    };
    dispatch(login(user));
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mx: 4 }}>
      <Box className={classes.navlinks} width="90%">
        {pages.map((page, idx) => {
          if (idx > 0) return;
          return <BaseLink page={page} key={page.id} />;
        })}
      </Box>
      {isAuth ? (
        <UserMenu />
      ) : (
        <Button variant="outlined" color="primary" onClick={handleLogin}>
          {t("Login")}
        </Button>
      )}
    </Box>
  );
};

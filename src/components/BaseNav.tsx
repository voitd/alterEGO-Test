import { useTranslation } from "react-i18next";
import { Box, Button } from "@mui/material";
import { BaseLink } from "./UI/BaseLink";
import { pages } from "../mocks/pages";
import { UserMenu } from "./UI/UserMenu";
import useStyles from "../assets/styles/styles";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Dropdown from "./UI/Dropdown";

export const BaseNav = () => {
  const { t } = useTranslation();
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const classes = useStyles();

  const handleLogin = () => {
    navigate("/login");
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
      <Dropdown />
    </Box>
  );
};

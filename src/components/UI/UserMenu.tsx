import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import { useState, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/reducers/auth";

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { doLogout } = useAuth();

  const { t } = useTranslation();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    doLogout();
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
    <Box>
      <Button
        onClick={handleMenu}
        size="small"
        aria-controls="menu"
        aria-haspopup="true"
        variant="text"
        startIcon={<AccountCircle color="primary" />}
        sx={{ textTransform: "capitalize", px: 2 }}
      >
        <Typography noWrap py={2} component="p">
          {user.username}
        </Typography>
      </Button>

      <Menu
        id="menu"
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
        {settings.map(({ id, name, url = "/", handler }) => (
          <MenuItem onClick={handleClose} key={id}>
            <Link to={url} onClick={handler}>
              <Typography color="primary">{t(name)}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

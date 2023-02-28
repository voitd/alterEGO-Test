import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { IconButton, Typography, Menu, MenuItem } from "@mui/material";
import { useState, MouseEvent } from "react";
import { useAppDispatch } from "../../store";
import { logout } from "../../store/reducers/auth";
import { useTranslation } from "react-i18next";

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

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
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle color="primary" />
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
        {settings.map(({ id, name, url = "/", handler }) => (
          <MenuItem onClick={handleClose} key={id}>
            <Link to={url} onClick={handler}>
              <Typography color="primary">{t(name)}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

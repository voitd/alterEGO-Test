import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { BaseNav } from "./BaseNav";
import MobileNav from "./MobileNav";

const Nav = () => {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints?.down("md"));

  return (
    <AppBar position="sticky" color="inherit">
      <CssBaseline />
      <Toolbar>
        <Link to="/">
          <Typography
            variant="h6"
            sx={{ flexGrow: "0", cursor: "pointer" }}
            color="primary"
          >
            AlterEGO-Test
          </Typography>
        </Link>
        {isMobile ? <MobileNav /> : <BaseNav />}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;

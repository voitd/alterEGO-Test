import { Divider, ListItem, ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

interface Page {
  id: string | number;
  url: string;
  name: string;
}

interface Props {
  page: Page;
  onClick: () => void;
}

const useStyles = makeStyles(() => ({
  link: { textDecoration: "none", color: "white", fontSize: "20px" },
}));

export const MobileMenuItem = ({ page, onClick }: Props) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <>
      <ListItem onClick={onClick}>
        <ListItemText>
          <Link to={page.url} className={classes.link}>
            {t(page.name)}
          </Link>
        </ListItemText>
      </ListItem>
      <Divider />
    </>
  );
};

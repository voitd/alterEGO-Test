import { Divider, ListItem, ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useStyles from "../../assets/styles/styles";

interface Page {
  id: string | number;
  url: string;
  name: string;
}

interface Props {
  page: Page;
  onClick: () => void;
}

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

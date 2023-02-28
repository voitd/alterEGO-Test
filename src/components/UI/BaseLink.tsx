import { Typography } from "@mui/material";
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
}

const useStyles = makeStyles(() => ({
  link: { textDecoration: "none", color: "white", fontSize: "20px" },
}));

export const BaseLink = ({ page }: Props) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Link to={page.url} className={classes.link} key={page.id}>
      <Typography color="primary">{t(page.name)}</Typography>
    </Link>
  );
};

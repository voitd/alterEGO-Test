import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Skeleton,
  Typography,
} from "@mui/material";
import { IPost } from "../types/posts";
import { Link, useNavigate } from "react-router-dom";
import getRandomImg from "../utils/getRandomImg";
import { useEffect, useState } from "react";

interface Props {
  post: IPost;
}
const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12px rgba(0,0,0,0.3)",
    },
  },
  media: {
    objectFit: "cover",
  },
  content: {
    textAlign: "left",
    padding: 12,
    display: "grid",
    gap: 2,
  },
  divider: {
    margin: `2px 0`,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: 4,
    },
  },
  title: {
    fontWeight: "bold",
  },
  body: {
    lineHeight: 1.8,
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 3,
    wordBreak: "break-all",
    overflow: "hidden",
  },
}));

const NewsCard = ({ post }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const classes = useStyles();
  const [imgUrl, setImgUrl] = useState<string>("");

  useEffect(() => {
    const randomImg = getRandomImg(post.id);
    setImgUrl(randomImg);
  }, []);
  const handleClick = () => {
    navigate(`/news/${post.id}`);
  };
  return (
    <Card className={classes.card} onClick={handleClick}>
      {!!imgUrl ? (
        <CardMedia component="img" className={classes.media} src={imgUrl} />
      ) : (
        <Skeleton variant="rectangular" width={640} height={220} />
      )}
      <CardContent className={classes.content}>
        <Typography noWrap variant={"h6"} gutterBottom>
          {post.title}
        </Typography>
        <Typography className={classes.body} variant={"body1"}>
          {post.body}
        </Typography>
        <Divider className={classes.divider} light />
        <Link to={`/news/${post.id}`}>
          <Typography color="primary" mt={2}>
            {t("Read more")}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default NewsCard;

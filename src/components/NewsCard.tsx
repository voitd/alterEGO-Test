import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Skeleton,
  Typography,
} from "@mui/material";
import { Post } from "../types/posts";
import { Link, useNavigate } from "react-router-dom";
import getRandomImg from "../utils/getRandomImg";
import { useEffect, useState } from "react";
import useStyles from "../assets/styles/styles";

interface Props {
  post: Post;
}

const NewsCard = ({ post }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const classes = useStyles();
  const [imgUrl, setImgUrl] = useState<string | null>(null);

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

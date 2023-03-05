import { useGetPostsByUserIdQuery } from "../services/news";
import { Post } from "../types/posts";
import { Grid, Box, Alert, Snackbar } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import BaseGrid from "../components/UI/BaseGrid";
import NewsCard from "../components/NewsCard";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import { selectNews } from "../store/reducers/news";

const NewsPage = () => {
  const { t } = useTranslation();
  const [userId, setUserId] = useState<string>("1");
  const [open, setOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const { isLoading, isError, error } = useGetPostsByUserIdQuery(userId);
  const news = useSelector(selectNews);

  useEffect(() => {
    if (isError && "data" in error) {
      setOpen((open) => !open);
      setErrorMessage(error.data);
    }
  }, [isError]);

  const handleLoadMore = () => {
    if (!news) return;
    const lastNews: Post = news[news.length - 1];
    const newUserId: string = String(lastNews?.userId + 1);
    setUserId(newUserId);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box className="News" my={10}>
      <Container>
        {isError && (
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity="error" color="error">
              {errorMessage}
            </Alert>
          </Snackbar>
        )}
        {isLoading ? (
          <>Loading...</>
        ) : news ? (
          <>
            <BaseGrid>
              {news?.map((post: Post) => (
                <Grid item md={6} lg={3} key={post.id}>
                  <NewsCard post={post} />
                </Grid>
              ))}
            </BaseGrid>
            <Box display="grid" justifyItems="center" py={4}>
              <LoadingButton
                loading={isLoading}
                variant="contained"
                color="primary"
                onClick={handleLoadMore}
              >
                {t("Load more")}
              </LoadingButton>
            </Box>
          </>
        ) : null}
      </Container>
    </Box>
  );
};

export default NewsPage;

import { useGetNewsQuery } from "../services/news";
import { IPost } from "../types/posts";
import { Grid, Box } from "@mui/material";
import { BaseGrid } from "../components/UI/BaseGrid";
import NewsCard from "../components/NewsCard";

const NewsPage = () => {
  const { data: news } = useGetNewsQuery();

  return (
    <Box className="News" my={10}>
      <BaseGrid>
        {news?.map((post: IPost) => (
          <Grid item key={post.id}>
            <NewsCard post={post} />
          </Grid>
        ))}
      </BaseGrid>
    </Box>
  );
};

export default NewsPage;

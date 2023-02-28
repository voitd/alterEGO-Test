import { Link } from "react-router-dom";
import { useGetNewsQuery } from "../services/news";
import { IPost } from "../types/posts";

const NewsPage = () => {
  const { data: news } = useGetNewsQuery();

  return (
    <section className="News">
      <h1>News:</h1>
      <div>
        {news?.map((post: IPost) => (
          <div key={post.id}>
            <Link to={`/news/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsPage;

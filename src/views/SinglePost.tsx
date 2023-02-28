import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../services/news";

const SinglePost = () => {
  let { id } = useParams<{ id: any }>();
  const { data: post } = useGetPostQuery(String(id));
  return <div className="SinglePost">{post?.title}</div>;
};

export default SinglePost;

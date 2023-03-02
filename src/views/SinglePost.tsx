import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../services/news";

const SinglePost = () => {
  let { id } = useParams<{ id: any }>();
  const { data: post } = useGetPostByIdQuery(String(id));
  return <div className="SinglePost">{post?.title}</div>;
};

export default SinglePost;

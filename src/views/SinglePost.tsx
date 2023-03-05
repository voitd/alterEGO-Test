import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../services/news";

const SinglePost = () => {
  let { id } = useParams<{ id: any }>();
  const { data: post } = useGetPostByIdQuery(String(id));
  console.log("file: SinglePost.tsx~line: 6~post", post);
  return <div className="SinglePost">{post?.title}</div>;
};

export default SinglePost;

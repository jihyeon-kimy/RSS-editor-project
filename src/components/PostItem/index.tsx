import { useParams } from "react-router-dom";

const PostItem = () => {
  const { postId } = useParams();

  return <h1>This is postId : {postId} page</h1>;
};

export default PostItem;

import { useParams } from "react-router-dom";
import { usePostDetail } from "../../hooks/usePostDetail";
import ItemDetail from "../Common/ItemDetail";

const PostDetail = () => {
  const { postId } = useParams();
  const post = usePostDetail(+postId!);

  return (
    <ItemDetail
      title={post?.title}
      author={post?.creator || post?.author}
      date={post?.isoDate?.substr(0, 10)}
      content={post?.["content:encoded"] || post?.content}
    />
  );
};

export default PostDetail;

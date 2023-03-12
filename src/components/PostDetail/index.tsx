import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { asyncGetPosts, selectPosts } from "../../store/postSlice";
import PostCard from "../Common/PostCard";

const PostDetail = () => {
  const { postId } = useParams()!;
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  let post;

  if (posts?.length === 0) {
    dispatch(asyncGetPosts());
  }

  if (posts && postId) {
    post = posts[+postId];
  }

  return (
    <PostCard>
      <h1>{post?.title}</h1>
      <p>{post?.creator || post?.author}</p>
      <p>{post?.isoDate?.substr(0, 10)}</p>
      <p>{post[`content:encoded`] || post?.contentSnippet}</p>
    </PostCard>
  );
};

export default PostDetail;

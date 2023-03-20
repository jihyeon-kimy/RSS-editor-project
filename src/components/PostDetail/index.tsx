import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { asyncGetPosts, selectPosts } from "../../store/postSlice";
import Card from "../Common/Card";
import { PostContent, PostHeader, Updated } from "./style";

const PostDetail = () => {
  const { postId } = useParams()!;
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const post = posts && postId && posts[+postId];
  // NOTE : posts가 undefined이거나 postId가 undefined일 수 있어서 타입에러 해결하려고 &&로 연결했는데, 가독성이 떨어지는 것 같다.
  // 더 좋은 방법이 뭔지 아직 모르겠다.

  if (posts?.length === 0) {
    dispatch(asyncGetPosts());
  }

  return (
    <Card>
      <PostHeader>
        <h2>{post?.title}</h2>
        <span>작성자 : {post?.creator || post?.author}</span>
        <Updated>{post?.isoDate?.substr(0, 10)}</Updated>
      </PostHeader>
      <PostContent
        dangerouslySetInnerHTML={{
          __html: post?.["content:encoded"] || post?.content,
        }}
      />
    </Card>
  );
};

export default PostDetail;

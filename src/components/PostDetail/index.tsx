import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { asyncGetPosts, selectPosts } from "../../store/postSlice";
import color from "../../styles/color";
import { customMedia } from "../../styles/GlobalStyle";
import text from "../../styles/text";
import Card from "../Common/Card";

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

const PostHeader = styled.div`
  position: relative;
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid ${color.border};

  h2 {
    ${text.textStyle24()}
    margin-bottom: 10px;
    font-weight: 600;
  }

  span {
    ${text.textStyle16(color.secondary)}
    font-weight: 500;
  }

  ${customMedia.lessThan("md")`
  h2{
    ${text.textStyle18()}
  }
  `}
`;

const Updated = styled.span`
  position: absolute;
  right: 0;
`;

const PostContent = styled.div`
  ${text.textStyle14()}

  p {
    margin-bottom: 20px;
  }

  img {
    width: 100%;
  }

  pre,
  a {
    display: inline-block;
    width: 100%;
    overflow: auto;
  }

  pre {
    background-color: ${color.blueLight};
    padding: 5px;
    border-radius: 5px;
  }
`;

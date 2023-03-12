import { useEffect } from "react";
import styled from "styled-components";
import color from "../../styles/color";
import text from "../../styles/text";
import { customMedia } from "../../styles/GlobalStyle";
import PostItem from "./PostItem";
import { asyncGetPosts } from "../../store/postSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const PostList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.post.value);

  useEffect(() => {
    dispatch(asyncGetPosts());
  }, [dispatch]);

  console.log(posts);
  return (
    <PostListContainer>
      <Title>
        <h3>피드 리스트</h3>
        <strong>편하게 모아보는 꿀같은 피드</strong>
      </Title>
      <List>
        {posts?.map((newPostItem, idx) => (
          <PostItem
            key={idx}
            id={idx}
            title={newPostItem?.title}
            content={newPostItem[`content:encodedSnippet`] || newPostItem.contentSnippet}
            author={newPostItem?.creator || newPostItem?.author}
            date={newPostItem?.isoDate?.substr(0, 10)}
          />
        ))}
      </List>
    </PostListContainer>
  );
};

export default PostList;

const PostListContainer = styled.section`
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.div`
  padding: 50px 25px 30px;
  font-weight: 600;

  h3 {
    ${text.textStyle24()};
  }

  strong {
    ${text.textStyle18()};
  }
`;

const List = styled.ol`
  margin: 0 auto;
  margin: 10px;
  background-color: ${color.white};
  border: 1px solid ${color.border};
  border-radius: 10px;

  ${customMedia.lessThan("md")`
    margin: 0;
    border-radius: none;
    border-top: 1px solid ${color.border};
    border-bottom: 1px solid ${color.border};
  `}
`;

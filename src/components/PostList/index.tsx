import { useEffect } from "react";
import PostItem from "./PostItem";
import { asyncGetPosts, selectPosts, selectStatus } from "../../store/postSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import LoadingSpinner from "../Common/LoadingSpinner";
import styled from "styled-components";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";

const CORSAnywhereUrl = "https://cors-anywhere.herokuapp.com/";

const PostList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const postLoadingStatus = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(asyncGetPosts());
  }, [dispatch]);

  if (postLoadingStatus === "Loading") {
    return (
      <FlexBox>
        <LoadingSpinner />
      </FlexBox>
    );
  }

  if (postLoadingStatus === "Fail") {
    return (
      <FlexBox>
        <h4>❌로딩에 실패했습니다❌</h4>
        <button
          onClick={() => {
            window.open(CORSAnywhereUrl);
          }}>
          CORS ANYWHERE
        </button>
        <p>위 페이지에 접속하여 CORS Anywhere 서버를 실행한 후에 새로고침 해주세요!</p>
      </FlexBox>
    );
  }

  return (
    <ol>
      {posts?.map((newPostItem, idx) => (
        <PostItem
          key={idx}
          id={idx}
          title={newPostItem?.title}
          content={newPostItem[`content:encodedSnippet`] || newPostItem?.contentSnippet}
          author={newPostItem?.creator || newPostItem?.author}
          date={newPostItem?.isoDate?.substr(0, 10)}
        />
      ))}
    </ol>
  );
};

export default PostList;

const FlexBox = styled.div`
  ${flexBox({ direction: "column" })}
  padding: 20px;
  ${text.textStyle18()};

  h4 {
    margin-bottom: 30px;
    font-weight: 600;
  }

  button {
    ${text.textStyle18()};
    cursor: pointer;
  }
`;

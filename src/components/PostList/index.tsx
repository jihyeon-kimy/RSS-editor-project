import { useEffect } from "react";
import { asyncGetPosts, selectPosts, selectStatus } from "../../store/postSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import LoadingSpinner from "../Common/LoadingSpinner";
import { FlexBox } from "./style";
import PostItem from "../Common/PostItem";
import { useRouter } from "../../hooks/useRouter";
import { selectIsLoggedIn } from "../../store/authSlice";
import useBookmark from "../../hooks/useBookmark";

const CORSAnywhereUrl = "https://cors-anywhere.herokuapp.com/";

const PostList = () => {
  const dispatch = useAppDispatch();
  const postList = useAppSelector(selectPosts);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const postLoadingStatus = useAppSelector(selectStatus);
  const { routeTo } = useRouter();
  const { addBookmarkPost } = useBookmark();

  useEffect(() => {
    dispatch(asyncGetPosts());
  }, [dispatch]);

  const addBookmarkHandler = (event: React.MouseEvent, id: string) => {
    event.stopPropagation();
    // Todo: '로그인 후 이용가능합니다.' 안내 모달로 수정
    if (!isLoggedIn) return console.log("로그인 후 이용 가능합니다.");
    addBookmarkPost(postList?.[+id]);
  };

  if (postLoadingStatus === "Loading") {
    return (
      <FlexBox>
        <LoadingSpinner />
      </FlexBox>
    );
  }

  if (postLoadingStatus === "Fail" || postList?.length === 0) {
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
      {postList?.map((item, idx) => (
        <PostItem
          key={idx}
          id={idx.toString()}
          title={item?.title}
          summary={item?.["content:encodedSnippet"] || item?.contentSnippet}
          author={item?.creator || item?.author}
          date={item?.isoDate?.substr(0, 10)}
          onBookmark={addBookmarkHandler}
          onClick={() => {
            routeTo(`/post/${idx}`);
          }}
        />
      ))}
    </ol>
  );
};

export default PostList;

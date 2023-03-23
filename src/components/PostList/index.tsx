import { useEffect } from "react";
import { getPostsReducer, selectPosts, selectStatus } from "../../store/postSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import LoadingSpinner from "../Common/LoadingSpinner";
import PostItem from "../Common/PostItem";
import { useRouter } from "../../hooks/useRouter";
import { selectIsLoggedIn } from "../../store/authSlice";
import useBookmark from "../../hooks/useBookmark";
import CorsError from "./CorsError";
import { useSnackbar } from "notistack";

const PostList = () => {
  const dispatch = useAppDispatch();
  const postList = useAppSelector(selectPosts);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const postLoadingStatus = useAppSelector(selectStatus);
  const { routeTo } = useRouter();
  const { addBookmarkPost } = useBookmark();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(getPostsReducer());
  }, [dispatch]);

  const addBookmarkHandler = (event: React.MouseEvent, id: string) => {
    event.stopPropagation();
    if (!isLoggedIn) {
      enqueueSnackbar("로그인 후 이용 가능합니다.", {
        autoHideDuration: 2000,
        variant: "info",
      });
      return;
    }
    addBookmarkPost(postList?.[+id]);
  };

  if (postLoadingStatus === "Loading") {
    return <LoadingSpinner />;
  }

  if (postLoadingStatus === "Fail" || postList?.length === 0) {
    return <CorsError />;
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

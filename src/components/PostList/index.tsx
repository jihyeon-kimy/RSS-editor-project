import { useEffect } from "react";
import { getPostsReducer, selectLastUpdated, selectPosts } from "../../store/postSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { selectIsLoggedIn } from "../../store/authSlice";
import useBookmark from "../../hooks/useBookmark";
import { useSnackbar } from "notistack";
import List from "./List";
import PageHeader from "../Common/PageHeader";
import Card from "../Common/Card";
import { LastUpdated } from "./style";

const PostList = () => {
  const dispatch = useAppDispatch();
  const postList = useAppSelector(selectPosts);
  const lastUpdated = useAppSelector(selectLastUpdated);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const { addBookmarkPost } = useBookmark();
  const { enqueueSnackbar } = useSnackbar();
  const calculateupdateDuration = new Date().getTime() - new Date(lastUpdated).getTime();

  useEffect(() => {
    if (calculateupdateDuration <= 180000) return;
    dispatch(getPostsReducer());
  }, [calculateupdateDuration, dispatch]);

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

  return (
    <>
      <PageHeader title="피드 리스트" subTitle="편하게 모아보는 꿀같은 피드" />
      <LastUpdated>LastUpdated: {new Date(lastUpdated).toLocaleString()}</LastUpdated>
      <Card>
        <List onBookmark={addBookmarkHandler} />
      </Card>
    </>
  );
};

export default PostList;

import { getPostsReducer, selectLastUpdated } from "../../store/postSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import List from "./List";
import PageHeader from "../Common/PageHeader";
import { LastUpdated } from "./style";
import { selectIsLoggedIn } from "../../store/authSlice";
import useSubscribe from "../../hooks/useSubscribe";
import { useEffect } from "react";
import SUBSCRIBE_LIST from "../../lib/constants/defaultSubscribeList";

const PostList = () => {
  const { subscribeList } = useSubscribe();
  const lastUpdated = useAppSelector(selectLastUpdated);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(getPostsReducer(SUBSCRIBE_LIST));
    } else {
      dispatch(getPostsReducer(subscribeList));
    }
  }, [subscribeList]);

  return (
    <>
      <PageHeader title="피드 리스트" subTitle="편하게 모아보는 꿀같은 피드" />
      <LastUpdated>LastUpdated: {new Date(lastUpdated).toLocaleString()}</LastUpdated>
      <List />
    </>
  );
};

export default PostList;

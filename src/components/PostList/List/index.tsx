import { MagnifyingGlass } from "react-loader-spinner";
import { useAppSelector } from "../../../hooks/useRedux";
import { useRouter } from "../../../hooks/useRouter";
import { selectPosts, selectStatus } from "../../../store/postSlice";
import CorsError from "../CorsError";
import PostItem from "../PostItem";
import Card from "../../Common/Card";
import { PostList } from "./style";
import { useSnackbar } from "notistack";
import { selectIsLoggedIn } from "../../../store/authSlice";
import useBookmark from "../../../hooks/useBookmark";

const List = () => {
  const { routeTo } = useRouter();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const postList = useAppSelector(selectPosts);
  const postLoadingStatus = useAppSelector(selectStatus);
  const { addBookmarkPost } = useBookmark();
  const { enqueueSnackbar } = useSnackbar();

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
    return (
      <Card>
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{ display: "block", margin: "20px auto" }}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </Card>
    );
  }

  if (postLoadingStatus === "Fail") {
    return (
      <Card>
        <CorsError />
      </Card>
    );
  }

  return (
    <PostList>
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
    </PostList>
  );
};

export default List;

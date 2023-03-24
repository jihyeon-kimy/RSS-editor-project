import { useAppSelector } from "../../../hooks/useRedux";
import { useRouter } from "../../../hooks/useRouter";
import { selectPosts, selectStatus } from "../../../store/postSlice";
import LoadingSpinner from "../../Common/LoadingSpinner";
import PostItem from "../../Common/PostItem";
import CorsError from "../CorsError";

interface ListProps {
  onBookmark: (event: React.MouseEvent, id: string) => void;
}

const List: React.FC<ListProps> = ({ onBookmark }) => {
  const { routeTo } = useRouter();
  const postLoadingStatus = useAppSelector(selectStatus);
  const postList = useAppSelector(selectPosts);

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
          onBookmark={onBookmark}
          onClick={() => {
            routeTo(`/post/${idx}`);
          }}
        />
      ))}
    </ol>
  );
};

export default List;

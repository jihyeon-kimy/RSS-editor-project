import { MagnifyingGlass } from "react-loader-spinner";
import { useAppSelector } from "../../../hooks/useRedux";
import { useRouter } from "../../../hooks/useRouter";
import { selectPosts, selectStatus } from "../../../store/postSlice";
import CorsError from "../CorsError";
import PostItem from "../PostItem";
import Card from "../../Common/Card";
import { PostList } from "./style";

interface ListProps {
  onBookmark: (event: React.MouseEvent, id: string) => void;
}

const List: React.FC<ListProps> = ({ onBookmark }) => {
  const { routeTo } = useRouter();
  const postLoadingStatus = useAppSelector(selectStatus);
  const postList = useAppSelector(selectPosts);

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

  if (postLoadingStatus === "Fail" || postList?.length === 0) {
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
          onBookmark={onBookmark}
          onClick={() => {
            routeTo(`/post/${idx}`);
          }}
        />
      ))}
    </PostList>
  );
};

export default List;

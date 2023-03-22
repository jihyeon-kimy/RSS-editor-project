import useBookmark from "../../hooks/useBookmark";
import { useRouter } from "../../hooks/useRouter";
import PostItem from "../Common/PostItem";

const Bookmark = () => {
  const { routeTo } = useRouter();
  const { bookmarkList, deleteBookmarkItem } = useBookmark();

  if (!bookmarkList) {
    return <span>비어있습니다.</span>;
  }

  return (
    <>
      <ol>
        {bookmarkList?.map((item, idx) => (
          <PostItem
            key={idx}
            id={item?.id}
            title={item?.title}
            summary={item?.summary}
            author={item?.author}
            date={item?.date?.substr(0, 10)}
            onDelete={deleteBookmarkItem}
            onClick={() => {
              routeTo(`/bookmark/${idx}`);
            }}
          />
        ))}
      </ol>
    </>
  );
};

export default Bookmark;

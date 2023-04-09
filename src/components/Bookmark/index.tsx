import useBookmark from "../../hooks/useBookmark";
import { useRouter } from "../../hooks/useRouter";
import BookmarkItem from "./BookmarkItem";
import { BookmarkContainer } from "./style";

const Bookmark = () => {
  const { routeTo } = useRouter();
  const { bookmarkList, deleteBookmarkItem } = useBookmark();

  if (!bookmarkList) {
    return <span>비어있습니다.</span>;
  }

  return (
    <>
      <BookmarkContainer>
        {bookmarkList?.map((item, idx) => (
          <BookmarkItem
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
      </BookmarkContainer>
    </>
  );
};

export default Bookmark;

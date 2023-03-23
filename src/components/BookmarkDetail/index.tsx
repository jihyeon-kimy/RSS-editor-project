import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBookmark from "../../hooks/useBookmark";
import { bookmarkItem } from "../../types/bookmark";
import ItemDetail from "../Common/ItemDetail";

const BookmarkDetail = () => {
  const [bookmarkPost, setBookmarkPost] = useState<bookmarkItem>();
  const { bookmarkList } = useBookmark();
  const { postId } = useParams();

  useEffect(() => {
    setBookmarkPost(bookmarkList[+postId!]);
  }, [bookmarkList, postId]);

  return (
    <ItemDetail
      title={bookmarkPost?.title!}
      author={bookmarkPost?.author!}
      date={bookmarkPost?.date?.substr(0, 10)!}
      content={bookmarkPost?.content!}
    />
  );
};

export default BookmarkDetail;

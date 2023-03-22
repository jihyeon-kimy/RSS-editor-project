import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBookmark from "../../hooks/useBookmark";
import { bookmarkItem } from "../../types/bookmark";
import ItemDetail from "../Common/ItemDetail";

const BookmarkDetail = () => {
  const [bookmarkPost, setBookmarkPost] = useState<bookmarkItem>();
  const { getBookmarkPost } = useBookmark();
  const { postId } = useParams();

  const getBookmark = useCallback(async () => {
    let post = await getBookmarkPost(postId!);
    setBookmarkPost(post);
  }, []);

  useEffect(() => {
    getBookmark();
  }, [getBookmark]);

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

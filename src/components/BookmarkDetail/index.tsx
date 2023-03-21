import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FB_GetBookmarkItem } from "../../api/bookmark";
import { bookmarkItem } from "../../types/bookmark";
import ItemDetail from "../Common/ItemDetail";

const BookmarkDetail = () => {
  const { postId } = useParams();
  const [bookmarkPost, setBookmarkPost] = useState<bookmarkItem>();

  const getBookmarkPost = async (postId: string) => {
    const subscribeListRes = await FB_GetBookmarkItem(+postId);
    setBookmarkPost(subscribeListRes);
  };

  useEffect(() => {
    getBookmarkPost(postId!);
  }, []);

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

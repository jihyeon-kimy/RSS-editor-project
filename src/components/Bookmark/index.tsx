import { useState, useEffect } from "react";
import { FB_DeleteBookmarkItem, FB_GetBookmarkList } from "../../api/bookmark";
import { useRouter } from "../../hooks/useRouter";
import { bookmarkItem } from "../../types/bookmark";
import PostItem from "../Common/PostItem";

const Bookmark = () => {
  const [userBookmarkList, setuserBookmarkList] = useState<bookmarkItem[]>([]);
  const { routeTo } = useRouter();

  const getUserBookmarkList = async () => {
    const bookmarkListRes = await FB_GetBookmarkList();
    setuserBookmarkList(bookmarkListRes);
  };

  const deleteBookmarkHandler = async (event: React.MouseEvent, id: string) => {
    event.stopPropagation();
    await FB_DeleteBookmarkItem(id, userBookmarkList);
    await getUserBookmarkList();
  };

  useEffect(() => {
    getUserBookmarkList();
  }, []);

  if (!userBookmarkList) {
    return <span>비어있습니다.</span>;
  }

  return (
    <>
      <ol>
        {userBookmarkList?.map((item, idx) => (
          <PostItem
            key={idx}
            id={item?.id}
            title={item?.title}
            summary={item?.summary}
            author={item?.author}
            date={item?.date?.substr(0, 10)}
            onDelete={deleteBookmarkHandler}
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

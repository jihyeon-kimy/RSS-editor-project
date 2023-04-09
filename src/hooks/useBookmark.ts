import { useSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";
import uuid from "react-uuid";
import { FB_GetBookmarkList, FB_UpdateBookmarkList } from "../api/bookmark";
import { bookmarkItem } from "../types/bookmark";

const useBookmark = () => {
  const [bookmarkList, setBookmarkList] = useState<bookmarkItem[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  const getBookmarkList = useCallback(async () => {
    const bookmarkListRes = await FB_GetBookmarkList();
    setBookmarkList(bookmarkListRes);
  }, []);

  const addBookmarkPost = async (post: any) => {
    const filteredPost = {
      id: uuid(),
      title: post?.title,
      author: post?.creator || post?.author,
      date: post?.isoDate?.substr(0, 10),
      summary: post?.["content:encodedSnippet"] || post?.contentSnippet,
      content: post?.["content:encoded"] || post?.content,
      link: post?.link,
    };

    let updatedBookmarkList;
    if (bookmarkList === null) {
      updatedBookmarkList = [filteredPost];
    } else {
      const checkSamePost = bookmarkList.filter(
        (item: any) => item.link === filteredPost.link
      );
      if (checkSamePost.length) {
        enqueueSnackbar("동일한 피드가 북마크에 존재합니다.", {
          autoHideDuration: 2000,
          variant: "info",
        });
        return;
      }
      updatedBookmarkList = [...bookmarkList, filteredPost];
    }
    await FB_UpdateBookmarkList(updatedBookmarkList);
    await getBookmarkList();
    enqueueSnackbar("북마크 되었습니다.", {
      autoHideDuration: 2000,
      variant: "success",
    });
  };

  const deleteBookmarkItem = async (event: React.MouseEvent, id: string) => {
    event.stopPropagation();
    const updatedBookmarkList = bookmarkList?.filter((item) => item.id !== id);

    await FB_UpdateBookmarkList(updatedBookmarkList);
    await getBookmarkList();
    enqueueSnackbar("북마크된 피드가 삭제되었습니다.", {
      autoHideDuration: 2000,
      variant: "error",
    });
  };

  useEffect(() => {
    getBookmarkList();
  }, [getBookmarkList]);

  return { bookmarkList, addBookmarkPost, deleteBookmarkItem };
};

export default useBookmark;

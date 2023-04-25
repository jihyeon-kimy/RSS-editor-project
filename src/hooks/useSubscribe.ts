import { useCallback, useEffect, useState } from "react";
import uuid from "react-uuid";
import { FB_GetSubscribeList, FB_UpdateSubscribeList } from "../api/subscribe";
import { subscribeItem } from "../types/subscribe";

const useSubscribe = () => {
  const [subscribeList, setSubscribeList] = useState<subscribeItem[]>([]);

  const getSubscribeList = useCallback(async () => {
    const subscribeListRes = await FB_GetSubscribeList();
    setSubscribeList(Object.values(subscribeListRes));
  }, []);

  const addSubscribeItem = async (subscribItem: { name: string; rssLink: string }) => {
    const updatedSubscribeList = [
      ...subscribeList!,
      { ...subscribItem, id: uuid(), enabled: true },
    ];
    await FB_UpdateSubscribeList(updatedSubscribeList);
    await getSubscribeList();
  };

  const deleteSubscribeItem = async (id: string) => {
    const updatedSubscribeList = subscribeList?.filter((item) => item.id !== id);
    await FB_UpdateSubscribeList(updatedSubscribeList);
    await getSubscribeList();
  };

  const toggleActiveStatus = async (id: string) => {
    const updatedSubscribeList = subscribeList.map((item) => {
      if (item.id !== id) return item;
      return { ...item, enabled: !item.enabled };
    });
    await FB_UpdateSubscribeList(updatedSubscribeList);
    await getSubscribeList();
  };

  useEffect(() => {
    getSubscribeList();
  }, [getSubscribeList]);

  return {
    subscribeList,
    addSubscribeItem,
    deleteSubscribeItem,
    toggleActiveStatus,
  };
};

export default useSubscribe;

import { useEffect, useState } from "react";
import { FB_GetSubscribeList } from "../../api/subscribe";
import { subscribeItem } from "../../types/subscribe";
import Card from "../Common/Card";
import AddSubscribeItem from "./AddSubscribeItem";
import SubscribeItem from "./SubscribeItem";

const Subscribe = () => {
  const [userSubscribeList, setUserSubscribeList] = useState<subscribeItem[]>([]);

  const getUserSubscribeList = async () => {
    const subscribeListRes = await FB_GetSubscribeList();
    setUserSubscribeList(Object.values(subscribeListRes));
  };

  useEffect(() => {
    getUserSubscribeList();
  }, []);

  return (
    <>
      <AddSubscribeItem
        subscribeList={userSubscribeList}
        reloadUpdatedSubscirbeList={getUserSubscribeList}
      />
      <Card>
        <ol>
          {userSubscribeList?.map((item) => (
            <SubscribeItem
              key={item?.id}
              id={item?.id}
              name={item?.name}
              rssLink={item?.rssLink}
              enabled={item?.enabled}
              subscribeList={userSubscribeList}
              reloadUpdatedSubscirbeList={getUserSubscribeList}
            />
          ))}
        </ol>
      </Card>
    </>
  );
};

export default Subscribe;

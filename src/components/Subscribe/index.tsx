import { useEffect, useState } from "react";
import { getSubscribeList } from "../../api/subscribe";
import { subscribeItem } from "../../types/subscribe";
import Card from "../Common/Card";
import AddSubscribeItem from "./AddSubscribeItem";
import SubscribeItem from "./SubscribeItem";

const Subscribe = () => {
  const [userSubscribeList, setUserSubscribeList] = useState<subscribeItem[]>([]);

  const getUserSubscirbeList = async () => {
    const subscribeListRes = await getSubscribeList();
    setUserSubscribeList(Object.values(subscribeListRes));
  };

  useEffect(() => {
    getUserSubscirbeList();
  }, []);

  return (
    <>
      <AddSubscribeItem
        subscribeList={userSubscribeList}
        reloadUpdatedSubscirbeList={getUserSubscirbeList}
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
              reloadUpdatedSubscirbeList={getUserSubscirbeList}
            />
          ))}
        </ol>
      </Card>
    </>
  );
};

export default Subscribe;

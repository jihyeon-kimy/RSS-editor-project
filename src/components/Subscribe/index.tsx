import useSubscribe from "../../hooks/useSubscribe";
import Card from "../Common/Card";
import AddSubscribeItem from "./AddSubscribeItem";
import SubscribeItem from "./SubscribeItem";

const Subscribe = () => {
  const { subscribeList, addSubscribeItem, deleteSubscribeItem, toggleActiveStatus } =
    useSubscribe();

  return (
    <>
      <AddSubscribeItem onAddItem={addSubscribeItem} />
      <Card>
        <ol>
          {subscribeList?.map((item, idx) => (
            <SubscribeItem
              key={item?.id}
              id={item?.id}
              name={item?.name}
              rssLink={item?.rssLink}
              enabled={item?.enabled}
              onDeleteItem={deleteSubscribeItem}
              onToggleItem={toggleActiveStatus}
            />
          ))}
        </ol>
      </Card>
    </>
  );
};

export default Subscribe;

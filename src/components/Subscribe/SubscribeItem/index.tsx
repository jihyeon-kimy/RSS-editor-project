import { subscribeItem } from "../../../types/subscribe";
import { MdDone, MdDelete } from "react-icons/md";
import {
  FB_ChangeActiveStatusOfSubscribeItem,
  FB_DeleteSubscribeItem,
} from "../../../api/subscribe";
import { CheckCircle, Name, Remove, SubscribeItemContainer, Text, Link } from "./style";

interface subscribeItemProps extends subscribeItem {
  subscribeList: subscribeItem[];
  reloadUpdatedSubscirbeList: () => Promise<void>;
}

const SubscribeItem: React.FC<subscribeItemProps> = ({
  id,
  name,
  rssLink,
  enabled,
  subscribeList,
  reloadUpdatedSubscirbeList,
}) => {
  const ToggleActiveStatusHandler = async () => {
    await FB_ChangeActiveStatusOfSubscribeItem(id, subscribeList);
    await reloadUpdatedSubscirbeList();
  };

  const RemoveItemHandler = async () => {
    await FB_DeleteSubscribeItem(id, subscribeList);
    await reloadUpdatedSubscirbeList();
  };

  return (
    <SubscribeItemContainer>
      <CheckCircle enabled={enabled} onClick={ToggleActiveStatusHandler}>
        {enabled && <MdDone />}
      </CheckCircle>
      <Text enabled={enabled}>
        <Name>{name} </Name>
        <Link>{rssLink}</Link>
      </Text>
      <Remove onClick={RemoveItemHandler}>
        <MdDelete />
      </Remove>
    </SubscribeItemContainer>
  );
};

export default SubscribeItem;

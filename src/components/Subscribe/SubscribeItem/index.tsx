import { subscribeItem } from "../../../types/subscribe";
import { MdDone, MdDelete } from "react-icons/md";
import {
  changeActiveStatusOfSubscribeItem,
  deleteSubscribeItem,
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
  const ToggleActiveStatus = async () => {
    await changeActiveStatusOfSubscribeItem(id, subscribeList);
    await reloadUpdatedSubscirbeList();
  };

  const RemoveSubscribeItem = async () => {
    await deleteSubscribeItem(id, subscribeList);
    await reloadUpdatedSubscirbeList();
  };

  return (
    <SubscribeItemContainer>
      <CheckCircle enabled={enabled} onClick={ToggleActiveStatus}>
        {enabled && <MdDone />}
      </CheckCircle>
      <Text enabled={enabled}>
        <Name>{name} </Name>
        <Link>{rssLink}</Link>
      </Text>
      <Remove onClick={RemoveSubscribeItem}>
        <MdDelete />
      </Remove>
    </SubscribeItemContainer>
  );
};

export default SubscribeItem;

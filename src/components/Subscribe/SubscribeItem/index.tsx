import { subscribeItem } from "../../../types/subscribe";
import { MdDone, MdDelete } from "react-icons/md";
import { CheckCircle, Name, Remove, SubscribeItemContainer, Text, Link } from "./style";

interface SubscribeItemProps extends subscribeItem {
  onDeleteItem: (id: string) => Promise<void>;
  onToggleItem: (id: string) => Promise<void>;
}

const SubscribeItem: React.FC<SubscribeItemProps> = ({
  id,
  name,
  rssLink,
  enabled,
  onDeleteItem,
  onToggleItem,
}) => {
  return (
    <SubscribeItemContainer>
      <CheckCircle
        enabled={enabled}
        onClick={() => {
          onToggleItem(id);
        }}>
        {enabled && <MdDone />}
      </CheckCircle>
      <Text enabled={enabled}>
        <Name>{name} </Name>
        <Link>{rssLink}</Link>
      </Text>
      <Remove
        onClick={() => {
          onDeleteItem(id);
        }}>
        <MdDelete />
      </Remove>
    </SubscribeItemContainer>
  );
};

export default SubscribeItem;

import Card from "../../Common/Card";
import {
  PostItemContainer,
  CheckBox,
  PostItemHeader,
  PostItemContent,
  PostItemBottom,
} from "./style";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";

interface PostItemProps {
  id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  onBookmark: (event: React.MouseEvent, id: string) => void;
  onClick: () => void;
}

const PostItem: React.FC<PostItemProps> = ({
  id,
  title,
  summary,
  author,
  date,
  onBookmark,
  onClick,
}) => {
  return (
    <PostItemContainer>
      <Card className="card-class" onClick={onClick}>
        <PostItemHeader>{title}</PostItemHeader>
        <PostItemContent>{summary}</PostItemContent>
        <PostItemBottom>
          <span>
            {author} / {date}
          </span>
          <CheckBox
            onClick={(event) => {
              onBookmark(event, id);
            }}>
            <IoBookmarkOutline className="outline" />
            <IoBookmark className="full bookmark" />
          </CheckBox>
        </PostItemBottom>
      </Card>
    </PostItemContainer>
  );
};

export default PostItem;

import { PostItemContainer, CheckBox, PostItemHeader, PostItemContent } from "./style";
import { IoBookmarkOutline, IoBookmark, IoTrashOutline, IoTrash } from "react-icons/io5";

interface PostItemProps {
  id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  onBookmark?: (event: React.MouseEvent, id: string) => void;
  onDelete?: (event: React.MouseEvent, id: string) => void;
  onClick: () => void;
}

const PostItem: React.FC<PostItemProps> = ({
  id,
  title,
  summary,
  author,
  date,
  onBookmark,
  onDelete,
  onClick,
}) => {
  return (
    <PostItemContainer onClick={onClick}>
      <PostItemHeader>
        <h5>{title}</h5>
        {onBookmark && (
          <CheckBox
            onClick={(event) => {
              onBookmark(event, id);
            }}>
            <IoBookmarkOutline className="outline" />
            <IoBookmark className="full bookmark" />
          </CheckBox>
        )}
        {onDelete && (
          <CheckBox
            onClick={(event) => {
              onDelete(event, id);
            }}>
            <IoTrashOutline className="outline" />
            <IoTrash className="full delete" />
          </CheckBox>
        )}
      </PostItemHeader>
      <PostItemContent>{summary}</PostItemContent>
      <span>
        {author} / {date}
      </span>
    </PostItemContainer>
  );
};

export default PostItem;

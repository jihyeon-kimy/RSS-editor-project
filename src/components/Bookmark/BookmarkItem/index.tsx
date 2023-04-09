import {
  BookmarkItemContainer,
  CheckBox,
  BookmarkItemHeader,
  BookmarkItemContent,
} from "./style";
import { IoTrashOutline, IoTrash } from "react-icons/io5";

interface BookmarkItemProps {
  id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  onDelete: (event: React.MouseEvent, id: string) => void;
  onClick: () => void;
}

const BookmarkItem: React.FC<BookmarkItemProps> = ({
  id,
  title,
  summary,
  author,
  date,
  onDelete,
  onClick,
}) => {
  return (
    <BookmarkItemContainer onClick={onClick}>
      <BookmarkItemHeader>
        <h5>{title}</h5>
        <CheckBox
          onClick={(event) => {
            onDelete(event, id);
          }}>
          <IoTrashOutline className="outline" />
          <IoTrash className="full delete" />
        </CheckBox>
      </BookmarkItemHeader>
      <BookmarkItemContent>{summary}</BookmarkItemContent>
      <span>
        {author} / {date}
      </span>
    </BookmarkItemContainer>
  );
};

export default BookmarkItem;

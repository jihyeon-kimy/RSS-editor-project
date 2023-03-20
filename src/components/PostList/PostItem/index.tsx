import { useRouter } from "../../../hooks/useRouter";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Desc, PostItemContainer } from "./style";

interface PostItemProps {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

const PostItem: React.FC<PostItemProps> = ({ id, title, content, author, date }) => {
  const { routeTo } = useRouter();

  // TODO: 게시물 좋아요 버튼(하트)는 우선 기능없이 붙여둔 상태

  return (
    <PostItemContainer
      onClick={() => {
        routeTo(`/post/${id}`);
      }}>
      <h5>{title}</h5>
      <p>{content}</p>
      <Desc>
        <span>
          {author} / {date}
        </span>
        <AiOutlineHeart />
        {/* <AiFillHeart /> */}
      </Desc>
    </PostItemContainer>
  );
};

export default PostItem;

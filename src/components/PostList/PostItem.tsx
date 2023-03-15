import styled from "styled-components";
import color from "../../styles/color";
import { flexBox } from "../../styles/postion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import text from "../../styles/text";
import { useRouter } from "../../hooks/useRouter";

interface PostItemProps {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

const PostItem = ({ id, title, content, author, date }: PostItemProps) => {
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

const PostItemContainer = styled.li`
  border-bottom: 1px solid ${color.border};
  padding: 15px 10px;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: ${color.blueLight};
  }

  h5 {
    ${text.textStyle16()}
    display: inline-block;
    width: 100%;
    margin-bottom: 10px;
    overflow: hidden;
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    ${text.textStyle13(color.secondary)}
    width: 100%;
    margin-bottom: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const Desc = styled.div`
  ${flexBox({ justify: "space-between" })}
  span {
    ${text.textStyle12(color.secondary)};
    font-weight: 600;
  }

  svg {
    font-size: 12px;
    color: ${color.secondary};
  }
`;

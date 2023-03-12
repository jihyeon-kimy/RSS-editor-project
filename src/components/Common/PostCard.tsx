import React from "react";
import styled from "styled-components";
import color from "../../styles/color";
import { customMedia } from "../../styles/GlobalStyle";

interface PostCardProps {
  children: React.ReactNode;
}

const PostCard = ({ children }: PostCardProps) => {
  return <Card>{children}</Card>;
};

export default PostCard;

const Card = styled.div`
  margin: 10px;
  background-color: ${color.white};
  border: 1px solid ${color.border};
  border-radius: 10px;

  ${customMedia.lessThan("md")`
    margin: 0;
    border-radius: 0;
    border-top: 1px solid ${color.border};
    border-bottom: 1px solid ${color.border};
  `}
`;

import React from "react";
import styled from "styled-components";
import color from "../../styles/color";
import { customMedia } from "../../styles/GlobalStyle";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <CardContainer className={className}>{children}</CardContainer>;
};

export default Card;

const CardContainer = styled.div`
  margin: 10px;
  padding: 20px;
  background-color: ${color.white};
  border: 1px solid ${color.border};
  border-radius: 10px;

  ${customMedia.lessThan("md")`
    margin: 0;
    padding: 10px;
    border-radius: 0;
    border-top: 1px solid ${color.border};
    border-bottom: 1px solid ${color.border};
  `}
`;

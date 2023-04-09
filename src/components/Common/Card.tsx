import React from "react";
import styled from "styled-components";
import color from "../../styles/color";
import { customMedia } from "../../styles/GlobalStyle";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  return (
    <CardContainer className={className} onClick={onClick}>
      {children}
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  margin: 10px;
  padding: 20px;
  background-color: ${color.white};
  border: 1px solid ${color.border};
  border-radius: 10px;

  ${customMedia.lessThan("md")`
    padding: 10px;
  `}
`;

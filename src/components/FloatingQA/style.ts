import styled, { css, keyframes } from "styled-components";
import color from "../../styles/color";
import { customMedia } from "../../styles/GlobalStyle";
import text from "../../styles/text";

export const FloatingButton = styled.button<{ visible: boolean }>`
  display: none;
  position: fixed;
  bottom: 30px;
  right: 50%;
  padding: 15px 90px;
  background-color: ${color.border};
  border-radius: 20px;
  opacity: 0.9;
  cursor: pointer;
  transform: translateX(50%);

  span {
    ${text.textStyle18(color.dark)};
    font-weight: 600;
    white-space: nowrap;

    ${customMedia.lessThan("md")`
    display: none;
  `}
  }

  svg {
    display: none;
    margin: 0 auto;
    font-size: 30px;
    color: ${color.white};

    ${customMedia.lessThan("md")`
    display: block
  `};
  }

  ${customMedia.lessThan("md")`
    right: 40px;
    width: 40px;
    height: 40px;
    padding: 0; 
    background-color: ${color.tertiary};
    border-radius: 50%;
  `}

  ${(props) =>
    props.visible &&
    css`
      display: block;
      animation: ${Slide} 0.6s ease-in-out;
    `}
`;

export const Slide = keyframes`
  from{
    opacity: 0;
    transform: translate(50%, 30px);
  }
  to{
    opacity: 1;
    transform: translate(50%, 0);
  }
  `;

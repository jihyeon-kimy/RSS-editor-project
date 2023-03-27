import styled, { css, keyframes } from "styled-components";
import color from "../../../styles/color";
import { flexBox } from "../../../styles/postion";
import text from "../../../styles/text";

export const ChattingModalContainer = styled.div<{ visible: boolean }>`
  display: none;
  position: fixed;
  right: 20px;
  bottom: 30px;
  width: 330px;
  height: 500px;
  background-color: ${color.background};
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: display 200ms ease-in-out;

  ${(props) =>
    props.visible &&
    css`
      display: block;
      animation: ${ZoomIn} 0.6s ease-in-out;
    `}
`;

export const ChattingHeader = styled.div`
  ${flexBox({ justify: "space-between" })}
  ${text.textStyle16()}
  height: 50px;
  padding: 0 20px;
  font-weight: 600;

  svg {
    font-size: 20px;
    cursor: pointer;
  }
`;

export const ChatList = styled.ul`
  padding: 10px;
  ${flexBox({ direction: "column", justify: "flex-start" })}
  height: 400px;
  border-end-start-radius: 20px;
  border-end-end-radius: 20px;
  background-color: ${color.white};
  overflow-y: scroll;
`;

export const ChatItem = styled.li`
  margin-bottom: 10px;
  padding: 15px;
  display: inline-block;
  border-radius: 20px;
  &.request {
    margin-left: auto;
    background-color: ${color.blueLight};
  }

  &.response {
    margin-right: auto;
    background-color: ${color.background};
  }
`;

export const Chattingform = styled.form`
  ${flexBox({ justify: "space-between" })}
  position: absolute;
  bottom: 10px;
  left: 50%;
  width: 90%;
  height: 35px;
  padding: 3px 15px;
  background-color: ${color.background};
  border-radius: 15px;
  transform: translateX(-50%);

  input {
    width: 100%;
    height: 30px;
    border: none;
    background-color: inherit;

    &:focus {
      outline: none;
    }
  }
`;

export const ZoomIn = keyframes`
  0%{
        opacity: 0;
        transform: scale(0.7);
    }
    65%{
        opacity: 0.65;
        transform: scale(1.01);
    }
    85%{
        opacity: 0.85;
        transform: scale(0.97);
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
`;

import styled from "styled-components";
import color from "../../../styles/color";
import { customMedia } from "../../../styles/GlobalStyle";
import { flexBox } from "../../../styles/postion";
import text from "../../../styles/text";

export const SubscribeItemForm = styled.form`
  ${flexBox({ justify: "space-between" })}
  padding-bottom: 10px;

  input {
    ${text.textStyle16()}
    width: 100%;
    height: 40px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${color.border};
    outline: none;
    transition: border 200ms ease-in-out;

    :hover,
    :active,
    :focus {
      border: 2px solid ${color.blue};
    }

    &.error {
      border: 1px solid ${color.red};
    }
  }

  div {
    position: relative;
    margin-right: 5px;

    ${customMedia.lessThan("md")`
    width: 85%;
    margin: 10px 0;
  `}
  }

  ${customMedia.lessThan("md")`
    ${flexBox({ direction: "column", alignItem: "flex-start" })}
  `}
`;

export const NameInputContainer = styled.div`
  width: 20%;
`;

export const UrlInputContainer = styled.div`
  width: 80%;
`;

export const SubmitButton = styled.button`
  ${flexBox({})}
  width: 40px;
  height: 40px;
  margin-left: 5px;
  background-color: ${color.blue};
  border: none;
  border-radius: 50%;
  font-size: 40px;
  color: ${color.white};
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &.error {
    background-color: ${color.red};
    transform: rotate(45deg);
  }

  ${customMedia.lessThan("md")`
  position: absolute;
  right: 10px;`}
`;

export const ErrorMessage = styled.small`
  ${text.textStyle13(color.red)}
  display: block;
  position: absolute;
  bottom: 10;
  font-weight: 600;
`;

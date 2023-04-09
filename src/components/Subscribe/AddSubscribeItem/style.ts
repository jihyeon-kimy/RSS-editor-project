import styled from "styled-components";
import color from "../../../styles/color";
import { customMedia } from "../../../styles/GlobalStyle";
import { flexBox } from "../../../styles/postion";
import text from "../../../styles/text";

export const SubscribeItemForm = styled.form`
  ${flexBox({ justify: "space-between" })}
  padding: 10px;

  ${customMedia.lessThan("md")`
    ${flexBox({ direction: "column" })}
  `}
`;

export const InputContainer = styled.div`
  width: 40%;
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

  ${customMedia.lessThan("md")`
    width: 100%;
    margin-bottom: 20px;
  `}
`;

export const SubmitButton = styled.button`
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
`;

export const ErrorMessage = styled.small`
  ${text.textStyle13(color.red)}
  display: block;
  position: absolute;
  bottom: 10;
  font-weight: 500;
`;

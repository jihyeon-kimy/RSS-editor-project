import styled, { css } from "styled-components";
import color from "../../../styles/color";
import { customMedia } from "../../../styles/GlobalStyle";
import { flexBox } from "../../../styles/postion";
import text from "../../../styles/text";

export const Remove = styled.div`
  ${flexBox({})};
  display: none;
  color: ${color.border};
  font-size: 24px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: ${color.red};
  }
`;

export const SubscribeItemContainer = styled.li`
  ${flexBox({})}
  padding: 10px 0;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

export const CheckCircle = styled.div<{ enabled: boolean }>`
  ${flexBox({})}
  width: 26px;
  height: 26px;
  margin-right: 20px;
  border: 1px solid ${color.blue};
  border-radius: 13px;
  color: ${color.blue};
  font-size: 20px;
  cursor: pointer;

  ${(props) =>
    !props.enabled &&
    css`
      border: 1px solid ${color.secondary}; ;
    `}
`;

export const Text = styled.div<{ enabled: boolean }>`
  ${text.textStyle16()}
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  transition: font-weight 200ms ease-in-out;

  &:hover {
    font-weight: 600;
  }

  ${(props) =>
    !props.enabled &&
    css`
      color: ${color.secondary};
    `}
`;

export const Name = styled.span`
  display: inline-block;
  width: 150px;
`;

export const Link = styled.span`
  ${customMedia.lessThan("md")`
    display:none;
  `}
`;

import styled from "styled-components";
import color from "../../../styles/color";
import { flexBox } from "../../../styles/postion";
import text from "../../../styles/text";
import { customMedia } from "../../../styles/GlobalStyle";

export const BookmarkItemContainer = styled.li`
  border-bottom: 1px solid ${color.border};
  padding: 15px 10px;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: ${color.blueLight};
  }

  span {
    ${text.textStyle12(color.secondary)};
    font-weight: 600;
  }
`;

export const BookmarkItemHeader = styled.div`
  ${flexBox({ justify: "space-between" })}

  h5 {
    ${text.textStyle20()}
    display: inline-block;
    width: 100%;
    margin-bottom: 15px;
    overflow: hidden;
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;

    ${customMedia.lessThan("md")`
      ${text.textStyle18()}
    `}
  }
`;

export const CheckBox = styled.button`
  ${flexBox}
  color: ${color.secondary};
  font-size: 20px;
  margin-bottom: 15px;
  cursor: pointer;

  .full {
    display: none;
  }

  .delete {
    color: ${color.red};
  }

  &:hover {
    .outline {
      display: none;
    }
    .full {
      display: initial;
    }
  }
`;

export const BookmarkItemContent = styled.p`
  ${text.textStyle13(color.secondary)}
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

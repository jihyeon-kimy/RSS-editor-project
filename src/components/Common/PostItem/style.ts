import styled from "styled-components";
import color from "../../../styles/color";
import { flexBox } from "../../../styles/postion";
import text from "../../../styles/text";

export const PostItemContainer = styled.li`
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

export const PostItemHeader = styled.div`
  ${flexBox({ justify: "space-between" })}

  h5 {
    ${text.textStyle16()}
    display: inline-block;
    width: 100%;
    margin-bottom: 15px;
    overflow: hidden;
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;
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

  .bookmark {
    color: ${color.blueDark};
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

export const PostItemContent = styled.p`
  ${text.textStyle13(color.secondary)}
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
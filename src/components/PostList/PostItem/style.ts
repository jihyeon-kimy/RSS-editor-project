import styled from "styled-components";
import color from "../../../styles/color";
import { flexBox } from "../../../styles/postion";
import text from "../../../styles/text";
import { customMedia } from "../../../styles/GlobalStyle";

export const PostItemContainer = styled.li`
  position: relative;
  width: 33.333%;
  cursor: pointer;

  .card-class {
    padding: 40px 20px 30px;
    &:hover {
      background-color: ${color.blueLight};
    }
  }

  ${customMedia.lessThan("lg")`
    width: 50%;
  `}

  ${customMedia.lessThan("md")`
    width: 100%;
  `}
`;

export const PostItemHeader = styled.h5`
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
`;

export const PostItemContent = styled.p`
  ${text.textStyle13(color.secondary)}
  width: 100%;
  margin-bottom: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const PostItemBottom = styled.div`
  ${flexBox({ justify: "space-between", alignItem: "center" })}
  padding-top: 15px;
  border-top: 1px solid ${color.border};

  span {
    ${text.textStyle12(color.secondary)};
  }
`;

export const CheckBox = styled.button`
  color: ${color.secondary};
  font-size: 20px;
  cursor: pointer;

  .full {
    display: none;
  }

  .bookmark {
    color: ${color.blueDark};
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

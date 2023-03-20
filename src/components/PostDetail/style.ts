import styled from "styled-components";
import color from "../../styles/color";
import { customMedia } from "../../styles/GlobalStyle";
import text from "../../styles/text";

export const PostHeader = styled.div`
  position: relative;
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid ${color.border};

  h2 {
    ${text.textStyle24()}
    margin-bottom: 10px;
    font-weight: 600;
  }

  span {
    ${text.textStyle16(color.secondary)}
    font-weight: 500;
  }

  ${customMedia.lessThan("md")`
  h2{
    ${text.textStyle18()}
  }
  `}
`;

export const Updated = styled.span`
  position: absolute;
  right: 0;
`;

export const PostContent = styled.div`
  ${text.textStyle14()}

  p {
    margin-bottom: 20px;
  }

  img {
    width: 100%;
  }

  pre,
  a {
    display: inline-block;
    width: 100%;
    overflow: auto;
  }

  pre {
    background-color: ${color.blueLight};
    padding: 5px;
    border-radius: 5px;
  }
`;

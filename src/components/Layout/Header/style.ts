import styled from "styled-components";
import color from "../../../styles/color";
import { customMedia } from "../../../styles/GlobalStyle";
import { flexBox } from "../../../styles/postion";
import text from "../../../styles/text";
import zIndex from "../../../styles/z-index";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px;
  background-color: ${color.background};
  border-bottom: 1px solid ${color.border};
  z-index: ${zIndex.headerLevel};

  div {
    ${flexBox({ justify: "space-between" })}
    max-width: 1050px;
    margin: 0 auto;
  }

  .menuButton {
    display: none;
    font-size: 18px;
    cursor: pointer;
  }

  ${customMedia.lessThan("lg")`
    .menuButton {
      display: block;
    }
  `}
`;

export const Title = styled.h1`
  ${text.textStyle30(color.blue)}
  display: inline-block;
  font-weight: 600;
  cursor: pointer;
`;

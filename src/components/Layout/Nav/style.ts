import styled from "styled-components";
import color from "../../../styles/color";
import { customMedia } from "../../../styles/GlobalStyle";
import { flexBox } from "../../../styles/postion";
import text from "../../../styles/text";

export const NavContainer = styled.nav`
  ${flexBox}
  background-color: ${color.background};
`;

export const NavItem = styled.li`
  display: inline-block;
  margin-right: 20px;

  a {
    ${text.textStyle18()};
    font-weight: 600;

    &.isActive {
      color: ${color.blueDark};
    }
  }

  ${customMedia.lessThan("lg")`
    display: none;
  `}
`;

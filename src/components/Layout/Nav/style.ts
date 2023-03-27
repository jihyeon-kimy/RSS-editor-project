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
  transition: transform 200ms ease-in-out, color 200ms ease-in-out;

  * {
    ${text.textStyle18()};
    font-weight: 600;
    cursor: pointer;

    &:hover {
      color: ${color.blueDark};
    }
  }

  a.isActive {
    color: ${color.blueDark};
  }

  &:hover {
    transform: translateY(3px);
  }

  ${customMedia.lessThan("lg")`
    display: none;
  `}
`;

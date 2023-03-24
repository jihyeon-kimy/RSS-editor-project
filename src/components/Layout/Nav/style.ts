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

  * {
    ${text.textStyle18()};
    font-weight: 600;
  }

  a.isActive {
    color: ${color.blueDark};
  }

  button {
    margin-left: 10px;
    padding: 5px 15px;
    border: 1px solid ${color.tertiary};
    border-radius: 10px;
    background-color: ${color.border};
    cursor: pointer;
    transition: background-color 200ms ease-in-out;

    :hover {
      background-color: ${color.tertiary};
    }
  }

  ${customMedia.lessThan("lg")`
    display: none;
  `}
`;

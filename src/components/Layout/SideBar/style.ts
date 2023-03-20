import styled from "styled-components";
import color from "../../../styles/color";
import text from "../../../styles/text";
import zIndex from "../../../styles/z-index";

export const SideBarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100vh;
  padding: 30px 20px;
  background-color: ${color.background};
  cursor: pointer;
  transition: all 300ms ease-in-out;
  z-index: ${zIndex.sideBarLevel};

  .closeButton {
    display: block;
    font-size: 25px;
  }

  &.isOpen {
    left: 0;
  }
`;

export const SideBarList = styled.ul`
  padding-top: 30px;
`;

export const SideBarItem = styled.li`
  display: block;
  padding-bottom: 10px;

  a {
    ${text.textStyle18()};
    font-weight: 600;

    &.isActive {
      color: ${color.blueDark};
    }
  }
`;

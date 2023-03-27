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

  .scroll {
    overflow: hidden;
  }

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
  transition: transform 200ms ease-in-out, color 200ms ease-in-out;

  * {
    ${text.textStyle18()};
    font-weight: 600;
  }

  a.isActive {
    color: ${color.blueDark};
  }

  a:hover {
    color: ${color.blueDark};
  }

  button {
    display: block;
    position: absolute;
    bottom: 30px;
    left: 50%;
    height: 50px;
    width: 90%;
    background-color: ${color.border};
    cursor: pointer;
    transform: translateX(-50%);
    transition: background-color 200ms ease-in-out, transform 200ms ease-in-out;

    :hover {
      background-color: ${color.tertiary};
      transform: translate(-50%, 3px);
    }
  }
`;

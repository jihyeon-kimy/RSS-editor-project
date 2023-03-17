import { NavLink } from "react-router-dom";
import styled from "styled-components";
import text from "../../styles/text";
import color from "../../styles/color";
import { AiOutlineClose } from "react-icons/ai";
import zIndex from "../../styles/z-index";
import { NavContent } from "../../router";

interface SideBarProps {
  onClose: () => void;
  visibleSideBar: boolean;
}

const SideBar = ({ onClose, visibleSideBar }: SideBarProps) => {
  return (
    <SideBarContainer className={visibleSideBar ? "isOpen" : ""}>
      <h2 className="visually-hidden">메뉴</h2>
      <AiOutlineClose className="closeButton" onClick={onClose} />
      <SideBarList>
        {NavContent().map((NavTag, idx) => (
          <SideBarItem key={idx}>
            <NavLink
              to={NavTag.path}
              className={({ isActive }) => (isActive ? "isActive" : "")}>
              {NavTag.label}
            </NavLink>
          </SideBarItem>
        ))}
      </SideBarList>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.nav`
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

const SideBarList = styled.ul`
  padding-top: 30px;
`;

const SideBarItem = styled.li`
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

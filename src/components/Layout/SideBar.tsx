import { NavLink } from "react-router-dom";
import styled from "styled-components";
import text from "../../styles/text";
import color from "../../styles/color";
import RouterInfo from "../../router/RouterInfo";
import { AiOutlineClose } from "react-icons/ai";

interface SideBarProps {
  onClose: () => void;
  visibleSideBar: boolean;
}

const SideBar = ({ onClose, visibleSideBar }: SideBarProps) => {
  // TODO: 로그인 기능 구현 후, 로그인 여부에 따라 필터링 되도록 코드 수정할 예정
  const NavTags = RouterInfo.filter((item) => item);

  return (
    <Nav className={visibleSideBar ? "isOpen" : ""}>
      <h2 className="visually-hidden">메뉴</h2>
      <AiOutlineClose className="closeButton" onClick={onClose} />
      <NavList>
        {NavTags.map((NavTag, idx) => (
          <NavItem key={idx}>
            <NavLink
              to={NavTag.path}
              className={({ isActive }) => (isActive ? "isActive" : "")}>
              {NavTag.label}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};

export default SideBar;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100vh;
  padding: 30px 20px;
  background-color: ${color.background};
  cursor: pointer;
  transition: all 300ms ease-in-out;

  .closeButton {
    display: block;
    font-size: 25px;
  }

  &.isOpen {
    left: 0;
  }
`;

const NavList = styled.ul`
  padding-top: 30px;
`;

const NavItem = styled.li`
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

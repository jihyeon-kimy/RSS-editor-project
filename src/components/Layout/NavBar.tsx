import { NavLink } from "react-router-dom";
import styled from "styled-components";
import text from "../../styles/text";
import color from "../../styles/color";
import RouterInfo from "../../router/RouterInfo";
import { customMedia } from "../../styles/GlobalStyle";
import { flexBox } from "../../styles/postion";

const NavBar = () => {
  // TODO: 로그인 기능 구현 후, 로그인 여부에 따라 필터링 되도록 코드 수정할 예정
  const NavTags = RouterInfo.filter((item) => item);

  return (
    <Nav>
      <h2 className="visually-hidden">메뉴</h2>
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
      <LoginButton>MY PAGE</LoginButton>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  ${flexBox}
  background-color: ${color.background};
`;

const NavList = styled.ul``;

const NavItem = styled.li`
  display: inline-block;
  margin-right: 10px;

  a {
    ${text.textStyle16()};
    font-weight: 600;

    &.isActive {
      color: ${color.blueDark};
    }
  }

  ${customMedia.lessThan("lg")`
    display: none;
  `}
`;

const LoginButton = styled.button`
  ${text.textStyle16()};
  padding: 6px 15px;
  font-weight: 600;
  background-color: ${color.background};
  border-radius: 9px;
  border: 1px solid ${color.secondary};
  transition: background-color 200ms ease-in-out;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background-color: ${color.blueLight};
    /* border: 1px solid transparent; */
  }

  ${customMedia.lessThan("md")`
    ${text.textStyle14()};
    border: 1px solid transparent;
    padding: 0;
  `}
`;

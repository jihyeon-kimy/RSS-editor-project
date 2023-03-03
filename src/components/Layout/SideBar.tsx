import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { textStyle18 } from "../../styles/text";
import color from "../../styles/color";

let isActiveStyle = {
  color: color.blueDark,
  fontWeight: "600",
};

const SideBar = () => {
  return (
    <Nav>
      <h2 className="visually-hidden">메뉴</h2>
      <NavList>
        <NavItem>
          <NavLink
            to="/pageA"
            style={({ isActive }) => (isActive ? isActiveStyle : undefined)}>
            Page A
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/pageB"
            style={({ isActive }) => (isActive ? isActiveStyle : undefined)}>
            Page B
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/pageC"
            style={({ isActive }) => (isActive ? isActiveStyle : undefined)}>
            Page C
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default SideBar;

const Nav = styled.nav`
  width: 130px;
  border-right: 1px solid ${color.dark};
`;

const NavList = styled.ul`
  height: 100vh;
  padding: 20px 15px;
`;

const NavItem = styled.li`
  margin-bottom: 10px;

  a {
    ${textStyle18};
    color: ${color.primary};
  }
`;

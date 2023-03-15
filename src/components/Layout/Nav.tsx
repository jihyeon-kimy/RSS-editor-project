import { NavLink } from "react-router-dom";
import styled from "styled-components";
import text from "../../styles/text";
import color from "../../styles/color";
import { customMedia } from "../../styles/GlobalStyle";
import { flexBox } from "../../styles/postion";
import { withAuthNavContent, withoutAuthNavContent } from "../../router";
import { useAppSelector } from "../../hooks/useRedux";
import { selectIsLoggedIn } from "../../store/authSlice";

const Nav = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const NavContent = isLoggedIn ? withAuthNavContent : withoutAuthNavContent;
  return (
    <NavContainer>
      <h2 className="visually-hidden">메뉴</h2>
      <ul>
        {NavContent.map((NavTag, idx) => (
          <NavItem key={idx}>
            <NavLink
              to={NavTag.path}
              className={({ isActive }) => (isActive ? "isActive" : "")}>
              {NavTag.label}
            </NavLink>
          </NavItem>
        ))}
      </ul>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  ${flexBox}
  background-color: ${color.background};
`;

const NavItem = styled.li`
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

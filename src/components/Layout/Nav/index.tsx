import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useAppSelector } from "../../../hooks/useRedux";
import { NavContent } from "../../../router";
import { selectIsLoggedIn } from "../../../store/authSlice";
import { NavContainer, NavItem } from "./style";

const Nav = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const { logout } = useAuth();
  return (
    <NavContainer>
      <h2 className="visually-hidden">메뉴</h2>
      <ul>
        {NavContent().map((NavTag, idx) => (
          <NavItem key={idx}>
            <NavLink
              to={NavTag.path}
              className={({ isActive }) => (isActive ? "isActive" : "")}>
              {NavTag.label}
            </NavLink>
          </NavItem>
        ))}
        {isLoggedIn && (
          <NavItem>
            <button type="button" onClick={logout}>
              로그아웃
            </button>
          </NavItem>
        )}
      </ul>
    </NavContainer>
  );
};

export default Nav;

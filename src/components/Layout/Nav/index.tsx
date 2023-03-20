import { NavLink } from "react-router-dom";
import { NavContent } from "../../../router";
import { NavContainer, NavItem } from "./style";

const Nav = () => {
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
      </ul>
    </NavContainer>
  );
};

export default Nav;

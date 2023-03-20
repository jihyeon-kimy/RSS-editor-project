import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { SideBarContainer, SideBarItem, SideBarList } from "./style";
import { NavContent } from "../../../router";

interface SideBarProps {
  onClose: () => void;
  visibleSideBar: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ onClose, visibleSideBar }) => {
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

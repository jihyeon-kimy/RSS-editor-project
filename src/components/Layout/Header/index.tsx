import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import { GiHamburgerMenu } from "react-icons/gi";
import { HeaderContainer, Title } from "./style";
import { useRouter } from "../../../hooks/useRouter";

interface HeaderProps {
  onOpenSideBar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenSideBar }) => {
  const { currentPath } = useRouter();

  return (
    <HeaderContainer currentPath={currentPath}>
      <div>
        <GiHamburgerMenu className="menuButton" onClick={onOpenSideBar} />
        <Link to="/">
          <Title>RSS-Reader</Title>
        </Link>
        <Nav />
      </div>
    </HeaderContainer>
  );
};

export default Header;

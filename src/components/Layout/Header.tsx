import { Link } from "react-router-dom";
import styled from "styled-components";
import color from "../../styles/color";
import text from "../../styles/text";
import NavBar from "./NavBar";
import { flexBox } from "../../styles/postion";
import { GiHamburgerMenu } from "react-icons/gi";
import { customMedia } from "../../styles/GlobalStyle";
import SideBar from "./SideBar";
import { useState } from "react";

const Header = () => {
  const [visibleSideBar, setVisibleSideBar] = useState(false);

  const openSideBarHandler = () => {
    setVisibleSideBar(true);
  };

  const closeSideBarHandler = () => {
    setVisibleSideBar(false);
  };

  return (
    <HeaderContainer>
      <GiHamburgerMenu className="menuButton" onClick={openSideBarHandler} />
      <SideBar onClose={closeSideBarHandler} visibleSideBar={visibleSideBar} />
      <Link to="/">
        <Title>RSS-Reader</Title>
      </Link>
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  ${flexBox({ justify: "space-between" })}
  padding: 25px;
  border-bottom: 1px solid ${color.border};

  .menuButton {
    display: none;
    font-size: 18px;
    cursor: pointer;
  }

  ${customMedia.lessThan("lg")`
    .menuButton {
      display: block;
    }
  `}
`;

const Title = styled.h1`
  ${text.textStyle24(color.red)}
  display: inline-block;
  font-weight: 600;
  cursor: pointer;

  ${customMedia.lessThan("md")`
    ${text.textStyle18(color.red)}
  `}
`;

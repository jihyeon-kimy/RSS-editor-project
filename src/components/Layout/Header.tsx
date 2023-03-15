import { Link } from "react-router-dom";
import styled from "styled-components";
import color from "../../styles/color";
import text from "../../styles/text";
import Nav from "./Nav";
import { flexBox } from "../../styles/postion";
import { GiHamburgerMenu } from "react-icons/gi";
import { customMedia } from "../../styles/GlobalStyle";
import zIndex from "../../styles/z-index";

interface HeaderProps {
  onOpenSideBar: () => void;
}

const Header = ({ onOpenSideBar }: HeaderProps) => {
  return (
    <HeaderContainer>
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

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px;
  background-color: ${color.background};
  border-bottom: 1px solid ${color.border};
  z-index: ${zIndex.headerLevel};

  div {
    ${flexBox({ justify: "space-between" })}
    max-width: 1050px;
    margin: 0 auto;
  }

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
  ${text.textStyle30(color.blue)}
  display: inline-block;
  font-weight: 600;
  cursor: pointer;
`;

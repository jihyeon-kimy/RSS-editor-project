import { Link } from "react-router-dom";
import styled from "styled-components";
import color from "../../styles/color";
import { textStyle24 } from "../../styles/text";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Title>wanted Pre-onboarding course</Title>
      </Link>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: ${color.background};
  border-bottom: 1px solid ${color.dark};
`;

const Title = styled.h1`
  ${textStyle24}
  display: inline-block;
  padding: 20px 15px;
  font-weight: 600;
  color: ${color.dark};
  cursor: pointer;
`;

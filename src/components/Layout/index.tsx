import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";
import { flexBox } from "../../styles/postion";

const Layout = () => {
  return (
    <>
      <Header />
      <ContentBox>
        <SideBar />
        <Outlet />
      </ContentBox>
    </>
  );
};

export default Layout;

const ContentBox = styled.div`
  ${flexBox({ justify: "flex-start", alignItem: "flex-start" })};
`;

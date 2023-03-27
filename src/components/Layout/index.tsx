import React from "react";
import styled from "styled-components";
import useToggleComponent from "../../hooks/useToggleComponent";
import FloatingQA from "../FloatingQA";
import Header from "./Header";
import SideBar from "./SideBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const {
    visible: visibleSideBar,
    openComponent: openSideBarHandler,
    closeComponent: closeSideBarHandler,
  } = useToggleComponent();

  return (
    <>
      <Header onOpenSideBar={openSideBarHandler} />
      <SideBar onClose={closeSideBarHandler} visibleSideBar={visibleSideBar} />
      <Contents>{children}</Contents>
      <FloatingQA />
    </>
  );
};

export default Layout;

const Contents = styled.div`
  max-width: 1100px;
  margin: 100px auto 0;
`;

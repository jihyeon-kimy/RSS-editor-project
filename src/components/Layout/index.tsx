import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [visibleSideBar, setVisibleSideBar] = useState(false);

  const openSideBarHandler = () => {
    setVisibleSideBar(true);
  };

  const closeSideBarHandler = () => {
    setVisibleSideBar(false);
  };

  return (
    <>
      <Header onOpenSideBar={openSideBarHandler} />
      <SideBar onClose={closeSideBarHandler} visibleSideBar={visibleSideBar} />
      <Contents>{children}</Contents>
    </>
  );
};

export default Layout;

const Contents = styled.div`
  max-width: 1100px;
  margin: 100px auto 0;
`;

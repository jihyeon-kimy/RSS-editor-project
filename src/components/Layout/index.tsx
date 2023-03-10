import React from "react";
import styled from "styled-components";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Contents>{children}</Contents>
    </>
  );
};

export default Layout;

const Contents = styled.div`
  margin-top: 90px;
`;

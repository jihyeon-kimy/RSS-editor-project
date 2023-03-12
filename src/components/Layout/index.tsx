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
  max-width: 1100px;
  margin: 100px auto 0;
`;

import React from "react";
import styled from "styled-components";
import Header from "./Header";

import { flexBox } from "../../styles/postion";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;

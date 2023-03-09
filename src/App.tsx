import React from "react";
import { RouterProvider } from "react-router-dom";
import ReactRouterObject from "./router";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={ReactRouterObject} />
    </>
  );
}

export default App;

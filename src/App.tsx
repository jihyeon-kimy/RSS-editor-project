import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import { store } from "./store";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <RouterProvider router={routers} />
      </Provider>
    </>
  );
}

export default App;

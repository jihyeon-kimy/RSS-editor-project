import React from "react";
import { SnackbarProvider } from "notistack";
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
        <SnackbarProvider maxSnack={3}>
          <RouterProvider router={routers} />
        </SnackbarProvider>
      </Provider>
    </>
  );
}

export default App;

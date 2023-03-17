import { createBrowserRouter } from "react-router-dom";
import Authorization from "../components/Authorization";
import { useAppSelector } from "../hooks/useRedux";
import { selectIsLoggedIn } from "../store/authSlice";
import RouterInfo, { RouterItem } from "./RouterInfo";

export const routers = createBrowserRouter(
  RouterInfo.map((router: RouterItem) => {
    if (router.withAuthorization) {
      return {
        path: router.path,
        element: <Authorization>{router.element}</Authorization>,
      };
    } else {
      return {
        path: router.path,
        element: router.element,
      };
    }
  })
);

interface NavElement {
  id: number;
  label: string;
  path: string;
}

const withAuthNavContent = RouterInfo.reduce((prev, router) => {
  if (router.IsOnNav)
    return [...prev, { id: router.id, path: router.path, label: router.label }];

  return prev;
}, [] as NavElement[]);

const withoutAuthNavContent = RouterInfo.reduce((prev, router) => {
  if (!router.withAuthorization && router.IsOnNav)
    return [...prev, { id: router.id, path: router.path, label: router.label }];

  return prev;
}, [] as NavElement[]);

export const NavContent = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return isLoggedIn ? withAuthNavContent : withoutAuthNavContent;
};

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

const NavContentInLogin = RouterInfo.reduce((prev, router) => {
  if (router.IsOnNav === "both" || router.IsOnNav === "inLogin")
    return [...prev, { id: router.id, path: router.path, label: router.label }];

  return prev;
}, [] as NavElement[]);

const NavContentInLogout = RouterInfo.reduce((prev, router) => {
  if (router.IsOnNav === "both" || router.IsOnNav === "inLogout")
    return [...prev, { id: router.id, path: router.path, label: router.label }];

  return prev;
}, [] as NavElement[]);

export const NavContent = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return isLoggedIn ? NavContentInLogin : NavContentInLogout;
};

import { createBrowserRouter } from "react-router-dom";
import RouterInfo, { RouterItem } from "./RouterInfo";

const ReactRouterObject = createBrowserRouter(
  RouterInfo.map((routerInfo: RouterItem) => {
    return routerInfo.withAuthorization
      ? {
          path: routerInfo.path,
          element: routerInfo.element,
          // TODO: Authorization 컴포넌트 만들 예정
          // (
          //   <Authorization currentPath={routerInfo.path.replace(searchValue:, replaceValue:'')}>
          //     {routerInfo.element}
          //   </Authorization>
          // )
        }
      : {
          path: routerInfo.path,
          element: routerInfo.element,
        };
  })
);

export default ReactRouterObject;

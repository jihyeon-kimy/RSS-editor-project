import PostItemPage from "../pages/PostItemPage";
import PostListPage from "../pages/PostListPage";

export interface RouterItem {
  path: string;
  element: JSX.Element;
  withAuthorization: boolean;
  label: string;
  IsOnNav: boolean;
}

const RouterInfo: RouterItem[] = [
  {
    path: "/",
    element: <PostListPage />,
    withAuthorization: false,
    label: "New Post",
    IsOnNav: true,
  },
  {
    path: "/post/:postId",
    element: <PostItemPage />,
    withAuthorization: false,
    label: "New Post",
    IsOnNav: false,
  },
];

export default RouterInfo;

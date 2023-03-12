import PostDetailPage from "../pages/PostDetailPage";
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
    element: <PostDetailPage />,
    withAuthorization: false,
    label: "New Post",
    IsOnNav: false,
  },
];

export default RouterInfo;

import BookmarkDetailPage from "../pages/BookmarkDetailPage";
import BookmarkPage from "../pages/BookmarkPage";
import LoginPage from "../pages/LoginPage";
import PostDetailPage from "../pages/PostDetailPage";
import PostListPage from "../pages/PostListPage";
import SignupPage from "../pages/SignupPage";
import SubcribePage from "../pages/SubcribePage";

export interface RouterItem {
  id: number;
  path: string;
  element: JSX.Element;
  withAuthorization: boolean;
  label: string;
  IsOnNav: boolean;
}

const RouterInfo: RouterItem[] = [
  {
    id: 0,
    path: "/",
    element: <PostListPage />,
    withAuthorization: false,
    label: "New 피드",
    IsOnNav: true,
  },
  {
    id: 1,
    path: "/post/:postId",
    element: <PostDetailPage />,
    withAuthorization: false,
    label: "Post Detail",
    IsOnNav: false,
  },
  {
    id: 2,
    path: "/bookmark",
    element: <BookmarkPage />,
    withAuthorization: true,
    label: "북마크",
    IsOnNav: true,
  },
  {
    id: 3,
    path: "/bookmark/:postId",
    element: <BookmarkDetailPage />,
    withAuthorization: true,
    label: "북마크 Detail",
    IsOnNav: false,
  },
  {
    id: 4,
    path: "/subscribe",
    element: <SubcribePage />,
    withAuthorization: true,
    label: "구독관리",
    IsOnNav: true,
  },
  {
    id: 5,
    path: "/login",
    element: <LoginPage />,
    withAuthorization: false,
    label: "로그인/회원가입",
    IsOnNav: true,
  },
  {
    id: 6,
    path: "/signup",
    element: <SignupPage />,
    withAuthorization: false,
    label: "로그인/회원가입",
    IsOnNav: false,
  },
];

export default RouterInfo;

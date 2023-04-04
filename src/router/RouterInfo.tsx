import BookmarkDetailPage from "../pages/BookmarkDetailPage";
import BookmarkPage from "../pages/BookmarkPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
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
  IsOnNav?: "both" | "inLogin" | "inLogout";
}

const RouterInfo: RouterItem[] = [
  {
    id: 0,
    path: "/",
    element: <MainPage />,
    withAuthorization: false,
    label: "메인",
  },
  {
    id: 1,
    path: "/posts",
    element: <PostListPage />,
    withAuthorization: false,
    label: "New 피드",
    IsOnNav: "both",
  },
  {
    id: 2,
    path: "/post/:postId",
    element: <PostDetailPage />,
    withAuthorization: false,
    label: "Post Detail",
  },
  {
    id: 3,
    path: "/bookmark",
    element: <BookmarkPage />,
    withAuthorization: true,
    label: "북마크",
    IsOnNav: "inLogin",
  },
  {
    id: 4,
    path: "/bookmark/:postId",
    element: <BookmarkDetailPage />,
    withAuthorization: true,
    label: "북마크 Detail",
  },
  {
    id: 5,
    path: "/subscribe",
    element: <SubcribePage />,
    withAuthorization: true,
    label: "구독관리",
    IsOnNav: "inLogin",
  },
  {
    id: 6,
    path: "/login",
    element: <LoginPage />,
    withAuthorization: false,
    label: "로그인/회원가입",
    IsOnNav: "inLogout",
  },
  {
    id: 7,
    path: "/signup",
    element: <SignupPage />,
    withAuthorization: false,
    label: "로그인/회원가입",
  },
];

export default RouterInfo;

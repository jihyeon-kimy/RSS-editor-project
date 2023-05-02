# STUDY FEED!

### 1. 프로젝트 소개

- 프로젝트 요약 : 최신 기술 블로그 글을 모아 보여주고, 페이지 내에서 AI 채팅을 통해 심화학습을 도와주는 웹 사이트
- 프로젝트 목적 : 전체 프로젝트 범위에서 컴포넌트를 설계하고, Redux 비동기처리, FireBase로 DB 관리 등을 학습하고자 제작했다.  
- 프로젝트 기간 : 2023.03.10 - 03.27
- 개발 인원 : 1명(개인 프로젝트)

<br />

### 2. 아키텍쳐

- React, Styled-components, axios, Redux, Firebase, OpenAi

<img src="https://user-images.githubusercontent.com/78922001/232003359-6a79230d-78ec-4988-bbad-3195883d2ef9.png"  width="700" />
   
                                                                                                                                     
<br />

### 3. 실행 방법

```jsx
# install
$ npm run install

# run
$ npm start
```

<br />

### 4. 구현 기능
<img src="https://user-images.githubusercontent.com/78922001/232010228-da2367cf-f7b5-42e1-ab46-d7d06f940459.png"  width="700" />

- 전체
  - media query를 활용한 반응형 웹 구현
- 로그인 및 회원가입
  - 아이디, 패스워드 입력에 따른 유효성 검사(react-hook-form)
  - fireBase Authentication을 활용한 백엔드 구현
- 피드 리스트 및 상세 페이지
  - Redux Toolkit의 createAsyncThnuk를 활용한 피드 리스트 업데이트 비동기 처리
- 구독 관리, 북마크 리스트 및 상세 페이지
  - 로그인 여부에 따른 제한 접근 라우팅
  - fireBase를 활용한 회원 구독 및 북마크 DB 관리
  - 구독 페이지 추가, 삭제, 활성/비활성 처리
  - 북마크 페이지 추가, 삭제 처리
- Open AI를 사용한 AI챗봇 기능 구현
  - create Portal을 활용한 Modal 랜더링 DOM 지정

<br />

### 5. 프로젝트/라우터 구조

<details>

<summary>프로젝트 구조</summary>

```jsx
📦src
 ┣ 📂api
 ┃ ┣ 📜aiChatbot.ts
 ┃ ┣ 📜auth.ts
 ┃ ┣ 📜bookmark.ts
 ┃ ┣ 📜subscribe.ts
 ┃ ┣ 📜token.ts
 ┃ ┗ 📜user.ts
 ┣ 📂components
 ┃ ┣ 📂Authorization
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Bookmark
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂BookmarkDetail
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Common
 ┃ ┃ ┣ 📂ItemDetail
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂PostItem
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📜Card.tsx
 ┃ ┃ ┗ 📜PageHeader.tsx
 ┃ ┣ 📂FloatingQA
 ┃ ┃ ┣ 📂ChattingModal
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.ts
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂Nav
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂SideBar
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Login
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.ts
 ┃ ┣ 📂PostDetail
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂PostList
 ┃ ┃ ┣ 📂CorsError
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂List
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.ts
 ┃ ┣ 📂Signup
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.ts
 ┃ ┗ 📂Subscribe
 ┃ ┃ ┣ 📂AddSubscribeItem
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂SubscribeItem
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useAuth.ts
 ┃ ┣ 📜useBookmark.ts
 ┃ ┣ 📜usePostDetail.ts
 ┃ ┣ 📜useRedux.ts
 ┃ ┣ 📜useRouter.ts
 ┃ ┣ 📜useSubscribe.ts
 ┃ ┣ 📜useToggleComponent.ts
 ┃ ┗ 📜useVerifyToken.ts
 ┣ 📂lib
 ┃ ┣ 📂axios
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂constants
 ┃ ┃ ┗ 📜defaultSubscribeList.ts
 ┃ ┗ 📂token
 ┃ ┃ ┗ 📜index.ts
 ┣ 📂pages
 ┃ ┣ 📜BookmarkDetailPage.tsx
 ┃ ┣ 📜BookmarkPage.tsx
 ┃ ┣ 📜LoginPage.tsx
 ┃ ┣ 📜MainPage.tsx
 ┃ ┣ 📜PostDetailPage.tsx
 ┃ ┣ 📜PostListPage.tsx
 ┃ ┣ 📜SignupPage.tsx
 ┃ ┗ 📜SubcribePage.tsx
 ┣ 📂router
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜RouterInfo.tsx
 ┣ 📂store
 ┃ ┣ 📜authSlice.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜postSlice.ts
 ┣ 📂styles
 ┃ ┣ 📜color.ts
 ┃ ┣ 📜GlobalStyle.ts
 ┃ ┣ 📜postion.ts
 ┃ ┣ 📜text.ts
 ┃ ┗ 📜z-index.ts
 ┣ 📂types
 ┃ ┣ 📜bookmark.ts
 ┃ ┣ 📜subscribe.ts
 ┃ ┗ 📜userData.ts
 ┣ 📜App.tsx
 ┗ 📜index.tsx
```

</details>

<details>

<summary>라우터 구조</summary>

- / : 메인화면
- /posts : 피드 리스트 보기
- /post/:postId : 피드 자세히 보기
- /bookmark: 북마크한 피드 리스트 보기
- /bookmark/:postId : 북마크한 피드 자세히 보기
- /subscribe: 구독관리
- /login : 로그인
- /signup : 회원가입

</details>


<br />

### 6. 데모 영상

https://user-images.githubusercontent.com/78922001/232002948-2182469c-20c7-49c2-a448-d7a69b6be6f6.mp4


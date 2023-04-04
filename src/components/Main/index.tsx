import {
  MainContainer,
  MainText,
  Title,
  Instructions,
  Highlight,
  MainIcons,
  Circle,
} from "./style";

const Main = () => {
  return (
    <MainContainer>
      <MainText>
        <Title>
          관심있는 기술 블로그를 모아
          <br /> 한 곳에서 읽고 공부하세요
        </Title>
        <Instructions>
          <li>
            1. <Highlight>기술블로그를 구독</Highlight>하고 최신 글 받아보기
          </li>
          <li>
            2. 기억하고 싶은 아티클 <Highlight>북마크</Highlight> 해두기
          </li>
          <li>
            3. 궁금한 점이 생기면 <Highlight>AI에게 바로바로</Highlight> 해결하기
          </li>
        </Instructions>
      </MainText>
      <MainIcons>
        <Circle>상태관리</Circle>
        <Circle>최적화</Circle>
        <Circle>사용자관점</Circle>
        <Circle>리팩토링</Circle>
      </MainIcons>
    </MainContainer>
  );
};

export default Main;

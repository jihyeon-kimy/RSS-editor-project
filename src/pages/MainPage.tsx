import styled, { keyframes } from "styled-components";
import Layout from "../components/Layout";
import color from "../styles/color";
import { customMedia } from "../styles/GlobalStyle";
import { flexBox } from "../styles/postion";
import text from "../styles/text";

const MainPage = () => {
  return (
    <Layout>
      <MainContainer>
        <MainText>
          <Title>
            관심있는 기술 블로그를 모아
            <br /> 한 곳에서 읽고 공부하세요
          </Title>
          <UseInfo>
            <li>
              1. <Highlight>기술블로그를 구독</Highlight>하고 최신 글 받아보기
            </li>
            <li>
              2. 기억하고 싶은 아티클 <Highlight>북마크</Highlight> 해두기
            </li>
            <li>
              3. 궁금한 점이 생기면 <Highlight>AI에게 바로바로</Highlight> 해결하기
            </li>
          </UseInfo>
        </MainText>
        <MainIcons>
          <Circle>상태관리</Circle>
          <Circle>최적화</Circle>
          <Circle>사용자관점</Circle>
          <Circle>리팩토링</Circle>
        </MainIcons>
      </MainContainer>
      <div></div>
    </Layout>
  );
};

export default MainPage;

export const Pop = keyframes`
from {
  top: -90px;
  border: 1px solid ${color.border};
}

to{
  top: 90px;
  border: 1px solid ${color.blue};
}
`;

export const Slide = keyframes`
from{
opacity: 0;
transform: translateX(-50%);
}
to{
  opacity: 1;
transform: translateX(0%);
}`;

const MainContainer = styled.div`
  ${flexBox({ justify: "space-between", alignItem: "center" })}
  margin-top: 300px;
  padding: 20px;

  ${customMedia.lessThan("lg")`
    margin-top: 200px;
    padding: 0 80px;
  `}

  ${customMedia.lessThan("md")`
    align-items: flex-start;
    padding: 80px 20px;
  `}
`;

const MainText = styled.div`
  animation: ${Slide} 1600ms ease-in-out;
`;

const Title = styled.h2`
  ${text.textStyle30()}
  font-weight: 500;
`;

const UseInfo = styled.ul`
  margin-top: 40px;

  li {
    ${text.textStyle18()}
    margin-bottom: 5px;
  }
`;

const Highlight = styled.span`
  background-color: ${color.blueLight};
  padding: 5px;
  border-radius: 10px;
  font-weight: 600;
`;

const MainIcons = styled.div`
  position: relative;

  ${customMedia.lessThan("lg")`
    ${flexBox({ direction: "column" })}`};

  ${customMedia.lessThan("md")`
    display: none`};
`;

const Circle = styled.div`
  display: inline-block;
  position: relative;
  text-align: center;
  line-height: 100px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 10px;
  border: 1px solid ${color.border};

  ${customMedia.lessThan("lg")`
  line-height: 80px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin: 15px;
  `}

  :nth-child(1) {
    animation: ${Pop} 1600ms 0ms infinite linear alternate;
  }
  :nth-child(2) {
    animation: ${Pop} 1600ms 400ms infinite linear alternate;
  }
  :nth-child(3) {
    animation: ${Pop} 1600ms 800ms infinite linear alternate;
  }
  :nth-child(4) {
    animation: ${Pop} 1600ms 1200ms infinite linear alternate;
  }
`;

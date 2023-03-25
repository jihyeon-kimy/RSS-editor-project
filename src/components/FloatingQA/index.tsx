import styled from "styled-components";
import color from "../../styles/color";
import text from "../../styles/text";
import ChattingModal from "./ChattingModal";

const FloatingQA = () => {
  return (
    <>
      <ChattingModal />
      <FloatingButton onClick={() => alert("기능 구현중입니다.")}>
        피드 내용 중 궁금한게 생겼다면💡
      </FloatingButton>
    </>
  );
};

export default FloatingQA;

const FloatingButton = styled.button`
  ${text.textStyle18(color.white)};
  position: fixed;
  bottom: 30px;
  left: 50%;
  padding: 15px 90px;
  background-color: ${color.primary};
  border-radius: 20px;
  opacity: 0.9;
  color: ${color.white};
  font-weight: 600;
  cursor: pointer;
  transform: translateX(-50%);
`;

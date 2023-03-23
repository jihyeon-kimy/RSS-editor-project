import { RiAlarmWarningLine } from "react-icons/ri";
import { Button, Content, CorsErrorConatiner, Title } from "./style";

const CORSAnywhereUrl = "https://cors-anywhere.herokuapp.com/";

const CorsError = () => {
  return (
    <CorsErrorConatiner>
      <span>CLICK HERE!</span>
      <Button
        type="button"
        onClick={() => {
          window.open(CORSAnywhereUrl);
        }}>
        <RiAlarmWarningLine />
      </Button>
      <Title>CORS오류로 로딩에 실패했습니다</Title>
      <Content>
        구독하는 페이지에서 외부 접근을 차단했습니다. <br />위 사이트에 방문하여,CORS
        Anywhere 데모 서버를 실행한 후에 새로고침 해주세요!
      </Content>
    </CorsErrorConatiner>
  );
};

export default CorsError;

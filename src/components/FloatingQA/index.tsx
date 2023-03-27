import ChattingModal from "./ChattingModal";
import { BsQuestionCircle } from "react-icons/bs";
import useToggleComponent from "../../hooks/useToggleComponent";
import { FloatingButton } from "./style";
import ReactDOM from "react-dom";

const FloatingQA = () => {
  const {
    visible: visibleChattingModal,
    openComponent: openChattingModal,
    closeComponent: closeChattingModal,
  } = useToggleComponent();

  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <ChattingModal visible={visibleChattingModal} onClose={closeChattingModal} />,
        portalElement!
      )}
      {ReactDOM.createPortal(
        <FloatingButton onClick={openChattingModal} visible={!visibleChattingModal}>
          <span>💡 피드 내용 중 궁금한게 생겼다면 💡</span>
          <BsQuestionCircle />
        </FloatingButton>,
        portalElement!
      )}
    </>
  );
};

export default FloatingQA;

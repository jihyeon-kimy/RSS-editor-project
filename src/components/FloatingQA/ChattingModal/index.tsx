import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";
import { OPENAI_getResponse } from "../../../api/aiChatbot";
import {
  ChatItem,
  ChatList,
  Chattingform,
  ChattingHeader,
  ChattingModalContainer,
} from "./style";

interface ChattingModalProps {
  visible: boolean;
  onClose: () => void;
}

interface chagLogItem {
  type: "request" | "response";
  text: string;
}

const ChattingModal: React.FC<ChattingModalProps> = ({ visible, onClose }) => {
  const [chatLog, setChatLog] = useState<chagLogItem[]>([]);
  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (input: any) => {
    setChatLog((prev) => [...prev, { type: "request", text: input.chat }]);
    const translatedInput = await OPENAI_getResponse(input.chat);
    setChatLog((prev) => [...prev, { type: "response", text: translatedInput! }]);
    reset();
  };

  return (
    <ChattingModalContainer visible={visible}>
      <ChattingHeader>
        <h5>AI Chatbot에게 문의하기</h5>
        <AiOutlineClose className="closeButton" onClick={onClose} />
      </ChattingHeader>
      <ChatList>
        {chatLog?.map((item, idx) => (
          <ChatItem
            key={idx}
            className={item.type === "request" ? "request" : "response"}>
            {item.text}
          </ChatItem>
        ))}
      </ChatList>
      <Chattingform onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="메시지를 입력해주세요"
          {...register("chat", { required: true })}
        />
        {!isSubmitting && (
          <button type="submit">
            <BsSend />
          </button>
        )}
        {isSubmitting && (
          <ThreeDots
            height="30"
            width="30"
            radius="9"
            color="#3da5f5"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        )}
      </Chattingform>
    </ChattingModalContainer>
  );
};

export default ChattingModal;

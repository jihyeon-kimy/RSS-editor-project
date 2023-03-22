import React from "react";
import Card from "../../Common/Card";
import { useForm } from "react-hook-form";
import { MdAdd } from "react-icons/md";
import {
  ErrorMessage,
  NameInputContainer,
  SubmitButton,
  SubscribeItemForm,
  UrlInputContainer,
} from "./style";

interface formValues {
  name: string;
  rssLink: string;
}

interface AddSubscribeItemProps {
  onAddItem: (subscribItem: { name: string; rssLink: string }) => Promise<void>;
}

const AddSubscribeItem: React.FC<AddSubscribeItemProps> = ({ onAddItem }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<formValues>();

  const submitHandler = async (data: formValues) => {
    await onAddItem(data);
  };

  return (
    <Card>
      <SubscribeItemForm onSubmit={handleSubmit(submitHandler)}>
        <NameInputContainer>
          <input
            className={errors.name && "error"}
            type="text"
            placeholder="구독명(별칭)"
            {...register("name", {
              required: "구독명은 필수 입력입니다.",
              maxLength: { value: 9, message: "9자리 이하의 구독명을 입력해주세요." },
            })}
          />
          {errors.name && <ErrorMessage role="alert">{errors.name.message}</ErrorMessage>}
        </NameInputContainer>
        <UrlInputContainer>
          <input
            className={errors.rssLink && "error"}
            type="url"
            placeholder="RSS-link"
            {...register("rssLink", { required: "url 필수 입력입니다." })}
          />
          {errors.rssLink && (
            <ErrorMessage role="alert">{errors.rssLink.message}</ErrorMessage>
          )}
        </UrlInputContainer>
        <SubmitButton
          type="submit"
          disabled={isSubmitting}
          className={(errors.rssLink || errors.rssLink) && "error"}>
          <MdAdd />
        </SubmitButton>
      </SubscribeItemForm>
    </Card>
  );
};

export default AddSubscribeItem;

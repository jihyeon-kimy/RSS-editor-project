import Card from "../../Common/Card";
import { useForm } from "react-hook-form";
import { subscribeItem } from "../../../types/subscribe";
import { MdAdd } from "react-icons/md";
import {
  ErrorMessage,
  NameInputContainer,
  SubmitButton,
  SubscribeItemForm,
  UrlInputContainer,
} from "./style";
import { FB_AddSubscribeItem } from "../../../api/subscribe";

interface AddSubscribeItemProps {
  subscribeList: subscribeItem[];
  reloadUpdatedSubscirbeList: () => Promise<void>;
}

interface formValues {
  name: string;
  rssLink: string;
}

const AddSubscribeItem: React.FC<AddSubscribeItemProps> = ({
  subscribeList,
  reloadUpdatedSubscirbeList,
}) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<formValues>();

  const onSubmit = async (subscribeItem: any, subscribeList: subscribeItem[]) => {
    await FB_AddSubscribeItem(subscribeItem, subscribeList);
    await reloadUpdatedSubscirbeList();
  };

  return (
    <Card>
      <SubscribeItemForm onSubmit={handleSubmit((item) => onSubmit(item, subscribeList))}>
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

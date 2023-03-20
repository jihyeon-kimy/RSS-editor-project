import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Link } from "react-router-dom";
import { postSignup } from "../../api/auth";
import { addNewUser } from "../../api/subscribe";
import { useRouter } from "../../hooks/useRouter";
import {
  HeaderMessage,
  SignupButton,
  SignupContainer,
  SignupForm,
  SignupHeader,
} from "./style";

interface formValues {
  email: string;
  password: string;
}

const Signup = () => {
  const { routeTo } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<formValues>();

  const submitHandler: SubmitHandler<formValues> = async (userData: formValues) => {
    try {
      const signUpRes = await postSignup(userData);
      await addNewUser(signUpRes.data.email);
      if (signUpRes.status === 200) routeTo("/login");
    } catch (error) {
      // TODO: 에러 상황에 따른 안내 모달만들기
      alert(`에러발생 ${error}`);
      console.log("에러발생", error);
    }
  };

  // NOTE: axios 에러와 그 외의 에러를 아래처럼 나눠서 쓰는 코드를 구글링하다가 발견
  // axios.isAxiosError 좋은 듯! 추후 적용
  // try {
  //   const { data } = await axios.get('/user?ID=12345');
  //   user = data.userDetails;
  // } catch (error) {
  //   if (axios.isAxiosError(error)) {
  //     handleAxiosError(error);
  //   } else {
  //     handleUnexpectedError(error);
  //   }
  // }

  return (
    <SignupContainer>
      <SignupHeader>
        <h3
          onClick={() => {
            routeTo("/");
          }}>
          RSS-Reader
        </h3>
        <HeaderMessage>
          <span>회원이신가요?</span>
          <Link to="/login">로그인하기</Link>
        </HeaderMessage>
      </SignupHeader>
      <SignupForm onSubmit={handleSubmit(submitHandler)}>
        <input
          className={errors.email && "error"}
          type="email"
          placeholder="test@email.com"
          {...register("email", {
            required: "이메일은 필수 입력입니다.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.email && <small role="alert">{errors.email.message}</small>}
        <input
          className={errors.password && "error"}
          type="password"
          placeholder="****************"
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
            minLength: {
              value: 8,
              message: "8자리 이상 비밀번호를 사용하세요",
            },
          })}
        />
        {errors.password && <small role="alert">{errors.password.message}</small>}
        <SignupButton>
          <button disabled={isSubmitting}>회원가입 하기</button>
        </SignupButton>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;

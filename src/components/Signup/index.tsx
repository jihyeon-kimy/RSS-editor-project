import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Link } from "react-router-dom";
import { FB_Signup } from "../../api/auth";
import { FB_AddNewUser } from "../../api/user";
import { useRouter } from "../../hooks/useRouter";
import { authFormValue } from "../../types/userData";
import {
  HeaderMessage,
  SignupButton,
  SignupContainer,
  SignupForm,
  SignupHeader,
} from "./style";

const Signup = () => {
  const { routeTo } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<authFormValue>();

  const submitHandler: SubmitHandler<authFormValue> = async (userData) => {
    try {
      const signUpRes = await FB_Signup(userData);
      if (signUpRes.status === 200) {
        await FB_AddNewUser(signUpRes.data.email);
        enqueueSnackbar("회원가입이 완료되었습니다.", {
          autoHideDuration: 2000,
          variant: "success",
        });
        routeTo("/login");
      }
    } catch (error) {
      enqueueSnackbar(`회원가입 오류가 발생했습니다: ${error}`, {
        autoHideDuration: 2000,
        variant: "error",
      });
      console.log("에러발생", error);
    }
  };

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
          placeholder="이메일"
          {...register("email", {
            required: "이메일은 필수 입력입니다.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "이메일 형식에 맞지 않습니다(@도메인 포함).",
            },
          })}
        />
        {errors.email && <small role="alert">{errors.email.message}</small>}
        <input
          className={errors.password && "error"}
          type="password"
          placeholder="비밀번호"
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

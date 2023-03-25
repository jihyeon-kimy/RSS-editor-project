import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FB_Login } from "../../api/auth";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "../../hooks/useRouter";
import useVerifyToken from "../../hooks/useVerifyToken";
import { authFormValue } from "../../types/userData";
import {
  HeaderMessage,
  LoginButton,
  LoginContainer,
  LoginForm,
  LoginHeader,
} from "./style";

const Login = () => {
  const { routeTo } = useRouter();
  const { login } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<authFormValue>();
  const { checkTokenValidation } = useVerifyToken();

  useEffect(() => {
    checkTokenValidation();
  }, [checkTokenValidation]);

  const submitHandler: SubmitHandler<authFormValue> = async (userData) => {
    try {
      const loginRes = await FB_Login(userData);
      if (loginRes.status === 200) {
        const expirationTime = new Date(
          new Date().getTime() + +loginRes.data.expiresIn * 1000
        );
        const handleduserData = {
          email: loginRes.data.email.replace(".", ""),
          refreshToken: loginRes.data.refreshToken,
          expiresIn: expirationTime.toString(),
        };
        login(handleduserData);
      }
    } catch (error) {
      enqueueSnackbar(`로그인 오류가 발생했습니다: ${error}`, {
        autoHideDuration: 2000,
        variant: "error",
      });
      console.log("로그인 에러발생", error);
    }
  };

  return (
    <LoginContainer>
      <LoginHeader>
        <h3
          onClick={() => {
            routeTo("/");
          }}>
          RSS-Reader
        </h3>
        <HeaderMessage>
          <span>회원이 아니신가요?</span>
          <Link to="/signup">회원가입하기</Link>
        </HeaderMessage>
      </LoginHeader>

      <LoginForm onSubmit={handleSubmit(submitHandler)}>
        <input
          className={errors.email && "error"}
          type="email"
          placeholder="이메일"
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
        <LoginButton>
          <button disabled={isSubmitting}>로그인 하기</button>
        </LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;

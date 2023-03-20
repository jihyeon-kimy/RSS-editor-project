import { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FB_Login } from "../../api/auth";
import { useAppDispatch } from "../../hooks/useRedux";
import { useRouter } from "../../hooks/useRouter";
import { validateToken } from "../../hooks/validateToken";
import { login } from "../../store/authSlice";
import {
  HeaderMessage,
  LoginButton,
  LoginContainer,
  LoginForm,
  LoginHeader,
} from "./style";

interface formValues {
  email: string;
  password: string;
}

const Login = () => {
  const { routeTo } = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<formValues>();

  const verifyTokenFromStorage = useCallback(async () => {
    const verifyRes = await validateToken();
    if (!!verifyRes) {
      // TODO: 자동 로그인이 되었다는 알림 표시
      dispatch(login(verifyRes));
      routeTo("/");
    }
  }, [dispatch, routeTo]);

  useEffect(() => {
    verifyTokenFromStorage();
  }, []);

  const submitHandler = async (userData: formValues) => {
    try {
      const loginRes = await FB_Login(userData);
      if (loginRes.status === 200) {
        const expirationTime = new Date(
          new Date().getTime() + +loginRes.data.expiresIn * 1000
        );
        dispatch(
          login({
            email: loginRes.data.email,
            refreshToken: loginRes.data.refreshToken,
            expiresIn: expirationTime.toString(),
          })
        );
        routeTo("/");
      }
    } catch (error) {
      alert(`에러발생 ${error}`);
      console.log("에러발생", error);
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

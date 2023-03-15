import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { postLogin } from "../../api/auth";
import { useAppDispatch } from "../../hooks/useRedux";
import { useRouter } from "../../hooks/useRouter";
import { login } from "../../store/authSlice";
import color from "../../styles/color";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";

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

  const submitHandler = async (userData: formValues) => {
    try {
      const loginRes = await postLogin(userData);
      if (loginRes.status === 200) {
        dispatch(login(loginRes.data.refreshToken));
        routeTo("/");
      }
    } catch (error) {
      // TODO: 에러 상황에 따른 안내 모달만들기
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

const LoginContainer = styled.div`
  ${flexBox({ direction: "column" })}
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

const LoginHeader = styled.div`
  h3 {
    ${text.textStyle30(color.blue)}
    margin-bottom: 10px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
  }
`;

const HeaderMessage = styled.div`
  ${text.textStyle14()}
  margin-bottom: 50px;
  font-weight: 600;

  a {
    ${text.textStyle14(color.blueDark)}
    padding: 0 5px;
    font-weight: 600;
  }
`;

const LoginForm = styled.form`
  ${flexBox({ direction: "column", alignItem: "flex-start" })}

  input {
    width: 300px;
    height: 40px;
    margin-bottom: 8px;
    border-radius: 5px;
    border: 1px solid ${color.border};
    outline: none;
    transition: border 200ms ease-in-out;

    :hover,
    :active,
    :focus {
      border: 2px solid ${color.blue};
    }

    &.error {
      border: 1px solid ${color.red};
    }
  }

  small {
    ${text.textStyle13(color.red)}
    position: relative;
    left: 10px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

const LoginButton = styled.div`
  height: 45px;
  margin-top: 20px;

  button {
    ${text.textStyle16(color.white)}
    width: 300px;
    height: 45px;
    background-color: ${color.blue};
    border-radius: 5px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: margin 200ms ease-in-out;

    :hover {
      margin-top: 5px;
    }
  }
`;

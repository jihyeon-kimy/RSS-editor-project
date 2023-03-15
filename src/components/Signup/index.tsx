import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { postSignup } from "../../api/auth";
import { useRouter } from "../../hooks/useRouter";
import color from "../../styles/color";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";

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

const SignupContainer = styled.div`
  ${flexBox({ direction: "column" })}
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

const SignupHeader = styled.div`
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

const SignupForm = styled.form`
  ${flexBox({ direction: "column", alignItem: "flex-start" })}

  input {
    width: 300px;
    height: 45px;
    margin-bottom: 8px;
    padding: 5px;
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

const SignupButton = styled.div`
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

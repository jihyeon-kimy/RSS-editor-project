import styled from "styled-components";
import color from "../../styles/color";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";

export const LoginContainer = styled.div`
  ${flexBox({ direction: "column" })}
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

export const LoginHeader = styled.div`
  h3 {
    ${text.textStyle30(color.blue)}
    margin-bottom: 10px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
  }
`;

export const HeaderMessage = styled.div`
  ${text.textStyle14()}
  margin-bottom: 50px;
  font-weight: 600;

  a {
    ${text.textStyle14(color.blueDark)}
    padding: 0 5px;
    font-weight: 600;
  }
`;

export const LoginForm = styled.form`
  ${flexBox({ direction: "column", alignItem: "flex-start" })}

  input {
    ${text.textStyle16()}
    width: 350px;
    height: 50px;
    margin-bottom: 8px;
    padding: 10px;
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

export const LoginButton = styled.div`
  margin-top: 20px;

  button {
    ${text.textStyle16(color.white)}
    display: block;
    width: 350px;
    height: 50px;
    margin-bottom: 5px;
    background-color: ${color.blue};
    border-radius: 5px;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }
`;

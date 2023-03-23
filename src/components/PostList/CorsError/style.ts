import styled from "styled-components";
import color from "../../../styles/color";
import { flexBox } from "../../../styles/postion";
import text from "../../../styles/text";

export const CorsErrorConatiner = styled.div`
  ${flexBox({ direction: "column" })}
  padding: 20px 0;
  span {
    ${text.textStyle12(color.red)}
    font-weight: 600;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin-bottom: 20px;

  svg {
    font-size: 50px;
  }

  &:hover {
    svg {
      color: ${color.red};
    }
  }
`;

export const Title = styled.h3`
  ${text.textStyle18()}
  margin-bottom: 10px;
  font-weight: 600;
`;

export const Content = styled.p`
  ${text.textStyle14()}

  padding: 20px;
  text-align: center;
  border: 1px solid ${color.border};
`;

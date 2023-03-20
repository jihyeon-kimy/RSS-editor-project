import styled from "styled-components";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";

export const FlexBox = styled.div`
  ${flexBox({ direction: "column" })}
  padding: 20px;
  ${text.textStyle18()};

  h4 {
    margin-bottom: 30px;
    font-weight: 600;
  }

  button {
    ${text.textStyle18()};
    cursor: pointer;
  }
`;

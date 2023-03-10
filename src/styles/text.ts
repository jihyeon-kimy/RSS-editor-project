import { css } from "styled-components";
import color from "./color";

const textStyle12 = (textColor: string = color.primary) => css`
  color: ${textColor};
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.005em;
`;

const textStyle13 = (textColor: string = color.primary) => css`
  color: ${textColor};
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.001em;
`;

const textStyle14 = (textColor: string = color.primary) => css`
  color: ${textColor};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.001em;
`;

const textStyle16 = (textColor: string = color.primary) => css`
  color: ${textColor};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.001em;
`;

const textStyle18 = (textColor: string = color.primary) => css`
  color: ${textColor};
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.002em;
`;

const textStyle24 = (textColor: string = color.primary) => css`
  color: ${textColor};
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -0.001em;
`;

const text = {
  textStyle12,
  textStyle13,
  textStyle14,
  textStyle16,
  textStyle18,
  textStyle24,
};

export default text;

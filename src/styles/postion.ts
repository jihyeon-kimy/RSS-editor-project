import { css } from "styled-components";

interface flexBoxProps {
  direction?: string;
  justify?: string;
  alignItem?: string;
}

export const flexBox = (obj: flexBoxProps) => css`
  display: flex;
  flex-direction: ${obj?.direction ?? "row"};
  justify-content: ${obj?.justify ?? "center"};
  align-items: ${obj?.alignItem ?? "center"};
`;

interface positionType {
  type?: string;
}

export const posCenterX = (obj: positionType) => css`
  position: ${obj?.type ?? "absolute"};
  left: 50%;
  transform: translateX(-50%);
`;

export const posCenterY = (obj: positionType) => css`
  position: ${obj?.type ?? "absolute"};
  top: 50%;
  transform: translateX(-50%);
`;

export const posCenterCenter = (obj: positionType) => css`
  position: ${obj?.type ?? "absolute"};
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`;

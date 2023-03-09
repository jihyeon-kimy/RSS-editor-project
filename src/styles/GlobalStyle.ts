import { createGlobalStyle } from "styled-components";
import { generateMedia } from "styled-media-query";
import reset from "styled-reset";
import color from "./color";

export const customMedia = generateMedia({
  md: "768px",
  lg: "1200px",
});

const GlobalStyle = createGlobalStyle`
    ${reset}

    .visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
    }

    html, body {
    margin: 0;
    padding: 0;
    background-color: ${color.background};
    }

    * {
        box-sizing: border-box;
    }

    a {
    text-decoration: none
    }
`;

export default GlobalStyle;

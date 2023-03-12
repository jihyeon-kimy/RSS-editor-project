import styled from "styled-components";
import color from "../../styles/color";

const LoadingSpinner = () => {
  return <Spinner />;
};

export default LoadingSpinner;

const Spinner = styled.div`
  display: inline-block;

  &:after {
    content: " ";
    display: block;
    width: 30px;
    height: 30px;
    margin: 20px;
    border-radius: 50%;
    border: 6px solid ${color.blue};
    border-color: ${color.blue} transparent ${color.blue} transparent;
    animation: spinner 1.2s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

import styled, { keyframes } from "styled-components";
import text from "../../styles/text";
import { customMedia } from "../../styles/GlobalStyle";

interface PageHeaderProps {
  title: string;
  subTitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subTitle }) => {
  return (
    <Title>
      <h3>{title}</h3>
      <strong>{subTitle}</strong>
    </Title>
  );
};

export default PageHeader;

export const Slide = keyframes`
  from{
    opacity: 0;
    transform: translateY(10%);
  }
  to{
    opacity: 1;
    transform: translateY(0);

  }
`;

const Title = styled.div`
  padding: 50px 25px 30px;
  font-weight: 600;
  animation: ${Slide} 600ms ease-in-out;

  h3 {
    ${text.textStyle30()};
    margin-bottom: 10px;
  }

  strong {
    ${text.textStyle20()};
    font-weight: 500;
  }

  ${customMedia.lessThan("md")`
    h3{
      ${text.textStyle24()};
      margin-bottom: 5px;
    }

    strong{
      ${text.textStyle18()};
    }
  `}
`;

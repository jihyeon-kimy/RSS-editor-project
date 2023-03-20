import styled from "styled-components";
import text from "../../styles/text";

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

const Title = styled.div`
  padding: 50px 25px 30px;
  font-weight: 600;

  h3 {
    ${text.textStyle24()};
    margin-bottom: 10px;
  }

  strong {
    ${text.textStyle18()};
  }
`;

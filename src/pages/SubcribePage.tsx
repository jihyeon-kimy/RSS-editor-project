import Layout from "../components/Layout";
import PageHeader from "../components/Common/PageHeader";
import Subscribe from "../components/Subscribe";

const SubcribePage = () => {
  return (
    <Layout>
      <PageHeader title="구독 관리" subTitle="관심있는 페이지를 추가해보세요!" />
      <Subscribe />
    </Layout>
  );
};

export default SubcribePage;

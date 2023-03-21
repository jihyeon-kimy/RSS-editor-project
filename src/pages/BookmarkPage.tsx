import Bookmark from "../components/Bookmark";
import Card from "../components/Common/Card";
import PageHeader from "../components/Common/PageHeader";
import Layout from "../components/Layout";

const BookmarkPage = () => {
  return (
    <Layout>
      <PageHeader title="북마크" subTitle="기억하고 싶은 피드를 한 곳에" />
      <Card>
        <Bookmark />
      </Card>
    </Layout>
  );
};

export default BookmarkPage;

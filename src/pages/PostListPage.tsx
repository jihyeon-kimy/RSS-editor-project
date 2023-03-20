import PageHeader from "../components/Common/PageHeader";
import Card from "../components/Common/Card";
import Layout from "../components/Layout";
import PostList from "../components/PostList";

const PostListPage = () => {
  return (
    <Layout>
      <PageHeader title="피드 리스트" subTitle="편하게 모아보는 꿀같은 피드" />
      <Card>
        <PostList />
      </Card>
    </Layout>
  );
};

export default PostListPage;

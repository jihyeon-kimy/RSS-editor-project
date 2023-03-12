import PageHeader from "../components/Common/PageHeader";
import PostCard from "../components/Common/PostCard";
import Layout from "../components/Layout";
import PostList from "../components/PostList";

const PostListPage = () => {
  return (
    <Layout>
      <PageHeader title="피드 리스트" subTitle="편하게 모아보는 꿀같은 피드" />
      <PostCard>
        <PostList />
      </PostCard>
    </Layout>
  );
};

export default PostListPage;

import { useEffect, useState } from "react";
import RSSParser from "rss-parser";
import styled from "styled-components";
import color from "../../styles/color";
import text from "../../styles/text";
import subscribeList from "./subscribeList";
import { customMedia } from "../../styles/GlobalStyle";
import PostItem from "./PostItem";

const PostList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newPostList, setNewPostList] = useState<any[]>();

  // 일부 RSS  피드는 CORS 보안 때문에 브라우저에 로드할 수 없습니다.
  // 이 문제를 해결하려면 프록시를 사용할 수 있습니다.
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    const parser = new RSSParser();
    setIsLoading(true);
    (async () => {
      let parsedPostList: any[] = [];
      for (let subscribeItem of subscribeList) {
        if (!subscribeItem.enabled) return;
        try {
          let parsedPost = await parser.parseURL(CORS_PROXY + subscribeItem.rssLink);
          parsedPostList = [...parsedPostList, ...parsedPost.items];
        } catch {
          console.log(
            `🚒삐뽀삐보🚒 ${subscribeItem.name} fetch 에러 발생! RSSLink 오타 혹은 CORS보안 이슈로 브라우저에 로드가 안되는 것인지 확인하세요!`
          );
        }
      }
      setNewPostList(parsedPostList);
    })();
    setIsLoading(false);
  }, []);

  return (
    <PostListContainer>
      <Title>
        <h3>피드 리스트</h3>
        <strong>편하게 모아보는 꿀같은 피드</strong>
      </Title>
      <List>
        {isLoading && <p>로딩중입니다...</p>}
        {newPostList?.map((newPostItem, idx) => (
          <PostItem
            key={idx}
            title={newPostItem?.title}
            content={newPostItem[`content:encodedSnippet`] || newPostItem.contentSnippet}
            author={newPostItem?.creator || newPostItem?.author}
            date={newPostItem?.isoDate?.substr(0, 10)}
          />
        ))}
      </List>
    </PostListContainer>
  );
};

export default PostList;

const PostListContainer = styled.section`
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.div`
  padding: 50px 25px 30px;
  font-weight: 600;

  h3 {
    ${text.textStyle24()};
  }

  strong {
    ${text.textStyle18()};
  }
`;

const List = styled.ol`
  margin: 0 auto;
  /* padding: 10px; */
  margin: 10px;
  background-color: ${color.white};
  border: 1px solid ${color.border};
  border-radius: 10px;

  ${customMedia.lessThan("md")`
    border-top: 1px solid ${color.border};
    border-bottom: 1px solid ${color.border};
  `}
`;

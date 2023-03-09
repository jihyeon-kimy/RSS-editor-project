import RSSParser from "rss-parser";

const PostList = () => {
  let parser = new RSSParser();

  // 일부 RSS  피드는 CORS 보안 때문에 브라우저에 로드할 수 없습니다.
  // 이 문제를 해결하려면 프록시를 사용할 수 있습니다.
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

  parser.parseURL(
    CORS_PROXY + "https://blog.zarathu.com/index.xml ",
    function (err, feed) {
      if (err) throw err;
      console.log(feed);
      // feed.items.forEach(function (entry) {
      //   console.log(entry.title + ":" + entry.link);
      // });
    }
  );
  return <h1>This is Page A</h1>;
};

export default PostList;

import uuid from "react-uuid";

const SUBSCRIBE_LIST = [
  {
    id: uuid(),
    name: "29CM",
    rssLink: "https://medium.com/feed/29cm",
    enabled: true,
  },
  {
    id: uuid(),
    name: "42Seoul",
    rssLink: "https://42place.innovationacademy.kr/feed",
    enabled: false,
  },
  {
    id: uuid(),
    name: "당근마켓",
    rssLink: "https://medium.com/feed/daangn",
    enabled: true,
  },
  {
    id: uuid(),
    name: "네이버 플레이스",
    rssLink: "https://medium.com/feed/naver-place-dev",
    enabled: true,
  },
  {
    id: uuid(),
    name: "리디북스",
    rssLink: "http://www.ridicorp.com/story-category/tech-blog/feed/",
    enabled: true,
  },
  {
    id: uuid(),
    name: "로켓펀치",
    rssLink: "https://blog.rocketpunch.com/feed/",
    enabled: true,
  },
  {
    id: uuid(),
    name: "쏘카",
    rssLink: "https://tech.socarcorp.kr/feed.xml",
    enabled: true,
  },
];

export default SUBSCRIBE_LIST;

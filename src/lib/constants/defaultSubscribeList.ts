import uuid from "react-uuid";

const SUBSCRIBE_LIST = [
  {
    id: uuid(),
    name: "42Seoul",
    rssLink: "https://42place.innovationacademy.kr/feed",
    enabled: false,
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
  {
    id: uuid(),
    name: "가비아",
    rssLink: "https://library.gabia.com/feed",
    enabled: true,
  },
  {
    id: uuid(),
    name: "다나와",
    rssLink: "https://danawalab.github.io/feed",
    enabled: true,
  },
];

export default SUBSCRIBE_LIST;

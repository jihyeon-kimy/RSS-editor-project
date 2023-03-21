import React from "react";
import Card from "../Card";
import { PostContent, PostHeader, Updated } from "./style";

interface ItemDetailProps {
  title: string;
  author: string;
  date: string;
  content: string;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ title, author, date, content }) => {
  return (
    <Card>
      <PostHeader>
        <h2>{title}</h2>
        <span>작성자 : {author}</span>
        <Updated>{date}</Updated>
      </PostHeader>
      <PostContent
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </Card>
  );
};

export default ItemDetail;

import fetch from "isomorphic-fetch";
import React from "react";
import List from "../components/list";
interface ListProps {
  words: Array<{
    [key: string]: {
      count: number;
      retweet_count: number;
      favorite_count: number;
      tweets: string[];
      tweets_with_word: number;
    };
  }>;
}

function Index(props: ListProps) {
  return (
    <List.ol aria-label={"The ordered list of top IoT buzzwords"} tabIndex={0}>
      {props.words.map((word, index) => (
        <List.li
          aria-label={`List item number ${index}`}
          tabIndex={0}
          key={index}
        >
          {word[0]}
        </List.li>
      ))}
    </List.ol>
  );
}

Index.getInitialProps = async function() {
  // Branch factor here is unavoiable due to CORS.
  let url: string;
  if (process.env.NODE_ENV === "production") {
    url = "https://buzzwordsofiot.com";
  } else {
    url = "http://localhost:8004";
  }
  const data = await (await fetch(`${url}/api/aggregateIoT`)).json();
  return { words: data };
};

export default Index;

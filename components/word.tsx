import Button from "./button";
import T from "./typography";
import Container from "./container";
import List from "./list";
import Tweet from "./tweet";
export interface WordProps {
  count: number;
  retweetCount: number;
  favoriteCount: number;
  tweets: Array<{ fullText: string; id: string }>;
  tweetData: Object;
  tweetsWithWord: number;
}
export default (props: {
  word: string;
  totalUniqueWords: number;
  wordNumber: number;
  data: WordProps;
  goBack: () => void;
}) => {
  console.log(props.data.tweetData);
  return (
    <>
      <T.h1
        style={{ margin: "0rem 2rem 3rem 2rem" }}
        aria-label="Header for individual word"
        tabIndex={0}
      >
        {props.word}
      </T.h1>
      <T.p
        style={{ margin: "0rem 0rem 0rem 2rem" }}
      >{`buzzword no. ${props.wordNumber + 1} of ${
        props.totalUniqueWords
      } unique words`}</T.p>
      <Container style={{ height: "80%" }} direction={"row"}>
        <Container
          style={{ height: "80%", width: "45%", margin: "2rem" }}
          direction={"column"}
          left
          outline
        >
          <T.h5
            aria-label={"Title for stats across sampled tweets"}
            tabIndex={0}
            style={{ textDecoration: "underline", marginBottom: "2rem" }}
          >
            {"Stats Across 100 Tweets"}
          </T.h5>
          <List.ul tabIndex={0}>
            <List.li tabIndex={0}>{`Occurrences of word: ${
              props.data.count
            }`}</List.li>
            <List.li tabIndex={0}>{`Number of retweets featuring word: ${
              props.data.retweetCount
            }`}</List.li>
            <List.li tabIndex={0}>{`Number of favorites featuring word: ${
              props.data.favoriteCount
            }`}</List.li>
            <List.li tabIndex={0}>{`Number of tweets with word: ${
              props.data.tweetsWithWord
            }`}</List.li>
          </List.ul>
        </Container>
        <Container
          style={{ height: "80%", width: "45%", margin: "2rem" }}
          direction={"column"}
          outline
        >
          <T.h5
            aria-label={"Title for stats across sampled tweets"}
            tabIndex={0}
            style={{ textDecoration: "underline", marginBottom: "2rem" }}
          >
            {`Tweets featuring: ${props.word}`}
          </T.h5>
          <List.ul tabIndex={0} style={{ listStyle: "none" }}>
            {props.data.tweets.map((tweet, index) => (
              <List.li key={index} tabIndex={0}>
                <a href={`https://twitter.com/statuses/${tweet.id}`}>
                  <Tweet word={props.word} tweet={tweet.fullText} />
                </a>
              </List.li>
            ))}
          </List.ul>
        </Container>
      </Container>
      <Button
        aria-label="Button to go back to words list"
        tabIndex={0}
        onClick={() => props.goBack()}
        onKeyPress={event => {
          const code = event.keyCode || event.which;
          if (code == 13) {
            props.goBack();
          }
        }}
      >
        Go back
      </Button>
    </>
  );
};

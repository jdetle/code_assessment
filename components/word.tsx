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
  return (
    <Container direction={"column"} style={{ padding: "4rem 2rem 0rem 2rem" }}>
      <T.h1 style={{}} aria-label="Header for individual word" tabIndex={0}>
        {props.word}
      </T.h1>
      <T.p
        style={{ margin: "0.3rem 0.3rem 0rem 2rem" }}
      >{`buzzword no. ${props.wordNumber + 1} of ${
        props.totalUniqueWords
      } unique words`}</T.p>
      <Container
        direction={"row"}
        style={{
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        <Container
          style={{ height: "30rem", marginBottom: "1rem" }}
          direction={"column"}
          halfSize
          left
          outline
          center
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
          style={{ height: "30rem", marginBottom: "1rem" }}
          direction={"column"}
          halfSize
          left
          outline
          center
        >
          <T.h5
            aria-label={"Title for stats across sampled tweets"}
            tabIndex={0}
            style={{ textDecoration: "underline", width: "100%" }}
          >
            {`Relevant Tweets`}
          </T.h5>
          <List.ul
            tabIndex={0}
            style={{
              listStyle: "none",
              padding: "0rem 0rem 0rem 0.5rem",
              width: "100%"
            }}
          >
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
        style={{ marginLeft: "2rem" }}
        onKeyPress={event => {
          const code = event.keyCode || event.which;
          if (code == 13) {
            props.goBack();
          }
        }}
      >
        {"Go Back"}
      </Button>
    </Container>
  );
};

import Button from "./button";
import T from "./typography";
import Container from "./container";
import List from "./list";
export interface WordProps {
  count: number;
  retweet_count: number;
  favorite_count: number;
  tweets: string[];
  tweets_with_word: number;
}
export default (props: {
  word: string;
  wordNumber: number;
  data: WordProps;
  goBack: () => void;
}) => {
  return (
    <div>
      <T.h1
        style={{ marginBottom: "3rem" }}
        aria-label="Header for individual word"
        tabIndex={0}
      >
        {props.word}
      </T.h1>
      <T.p>{`(buzzword no. ${props.wordNumber + 1})`}</T.p>
      <Container halfSize left outline style={{ margin: "2rem" }}>
        <T.h5
          aria-label={"Title for stats across sampled tweets"}
          tabIndex={0}
          style={{ textDecoration: "underline" }}
        >
          {"Stats Across 100 Tweets"}
        </T.h5>
        <List.ul tabIndex={0}>
          <List.li tabIndex={0}>{`Occurrences of word: ${
            props.data.count
          }`}</List.li>
          <List.li tabIndex={0}>{`Number of retweets featuring word: ${
            props.data.retweet_count
          }`}</List.li>
          <List.li tabIndex={0}>{`Number of favorites featuring word: ${
            props.data.favorite_count
          }`}</List.li>
          <List.li tabIndex={0}>{`Number of tweets with word: ${
            props.data.tweets_with_word
          }`}</List.li>
        </List.ul>
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
    </div>
  );
};

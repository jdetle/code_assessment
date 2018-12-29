import Button from "./button";
import T from "./typography";
export interface WordProps {
  count: number;
  retweet_count: number;
  favorite_count: number;
  tweets: string[];
  tweets_with_word: number;
}
export default (props: {
  word: string;
  data: WordProps;
  goBack: () => void;
}) => {
  return (
    <div>
      <T.h1 aria-label="Header for individual word" tabIndex={0}>
        {props.word}
      </T.h1>
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

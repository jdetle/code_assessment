import Highlighter from "react-highlight-words";
import styled from "styled-components";
const TweetDiv = styled.div`
  margin-bottom: 2rem;
  font-weight: 800;
  width: 90%;
  @media (max-width: 420px) {
    font-size: 1rem;
    width: 100%;
    margin: 0;
  }
`;
export default function tweet(props: { tweet: string; word: string }) {
  return (
    <TweetDiv>
      <Highlighter
        highlightClassName="highlight"
        caseSensitive={false}
        searchWords={[`${props.word}`, `#${props.word}`]}
        autoEscape={true}
        textToHighlight={props.tweet}
      />
    </TweetDiv>
  );
}

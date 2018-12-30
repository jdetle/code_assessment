import Highlighter from "react-highlight-words";
import styled from "styled-components";
const TweetDiv = styled.div`
  margin-bottom: 2rem;
  div: font-size: 0.7rem;
  font-weight: 800;
`;
export default function tweet(props: { tweet: string; word: string }) {
  return (
    <TweetDiv>
      <Highlighter
        highlightClassName="YourHighlightClass"
        caseSensitive={false}
        searchWords={[` ${props.word} `, `#${props.word}`]}
        autoEscape={true}
        textToHighlight={props.tweet}
      />
    </TweetDiv>
  );
}

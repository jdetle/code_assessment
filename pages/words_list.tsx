import fetch from "isomorphic-fetch";
import React from "react";
import Container from "../components/container";
import List from "../components/list";
import BarChart from "../components/barchart";
import Word, { WordProps } from "../components/word";
import T from "../components/typography";
import styled from "styled-components";
const VizContainer = styled(Container)`
  @media (max-width: 420px) {
    display: none;
  }
`;
interface ListProps {
  words: Array<[string, WordProps]>;
  totalUniqueWords: number;
}

interface ListState {
  selectedWord?: [string, WordProps];
  selectedWordIndex?: number;
  barView: boolean;
}

export class TopTwenty extends React.Component<ListProps, ListState> {
  public static async getInitialProps() {
    // Branch factor here is unavoiable due to CORS.
    let url: string;
    if (process.env.NODE_ENV === "production") {
      url = "https://buzzwordsofiot.com";
    } else {
      url = "http://localhost:8004";
    }
    const data = await (await fetch(`${url}/api/aggregateV2`)).json();
    return { words: data.topWords, totalUniqueWords: data.totalUniqueWords };
  }
  public state: ListState = { barView: false };
  selectWord = (word: [string, WordProps], index: number) => {
    this.setState({
      selectedWord: word,
      selectedWordIndex: index
    });
  };
  public render() {
    const { selectedWord, selectedWordIndex } = this.state;
    const { words, totalUniqueWords } = this.props;
    if (selectedWord != null && selectedWordIndex != null) {
      return (
        <Word
          word={selectedWord[0]}
          data={selectedWord[1]}
          totalUniqueWords={this.props.totalUniqueWords}
          wordNumber={selectedWordIndex}
          goBack={() => this.setState({ selectedWord: undefined })}
        />
      );
    } else {
      return (
        <Container direction="row">
          <Container
            direction={"column"}
            style={{ height: "95%", padding: "4rem 2rem 0rem 2rem" }}
          >
            <T.h3>{`Top Words Out Of ${totalUniqueWords} Unique Words`}</T.h3>
            <List.ol
              aria-label={"The ordered list of top IoT buzzwords"}
              tabIndex={0}
            >
              {words.map((word, index) => (
                <List.li
                  aria-label={`IoT Buzzword List item number ${index}`}
                  tabIndex={0}
                  key={index}
                  onClick={() => this.selectWord(word, index)}
                  onKeyPress={event => {
                    const code = event.keyCode || event.which;
                    if (code == 13) {
                      this.selectWord(word, index);
                    }
                  }}
                >
                  {word[0]}
                </List.li>
              ))}
            </List.ol>
          </Container>
          <VizContainer direction="row" right>
            <BarChart words={this.props.words} />
          </VizContainer>
        </Container>
      );
    }
  }
}

export default TopTwenty;

import fetch from "isomorphic-fetch";
import React from "react";
import Container from "../components/container";
import List from "../components/list";
import Word, { WordProps } from "../components/word";
interface ListProps {
  words: Array<[string, WordProps]>;
}
interface ListState {
  selectedWord?: [string, WordProps];
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
    const data = await (await fetch(`${url}/api/aggregateIoT`)).json();
    return { words: data };
  }
  public state: ListState = {};
  public render() {
    const { selectedWord } = this.state;
    const { words } = this.props;
    if (selectedWord != null) {
      return (
        <Word
          word={selectedWord[0]}
          data={selectedWord[1]}
          goBack={() => this.setState({ selectedWord: undefined })}
        />
      );
    } else {
      return (
        <Container>
          <List.ol
            aria-label={"The ordered list of top IoT buzzwords"}
            tabIndex={0}
          >
            {words.map((word, index) => (
              <List.li
                aria-label={`IoT Buzzword List item number ${index}`}
                tabIndex={0}
                key={index}
                onClick={() => this.setState({ selectedWord: word })}
                onKeyPress={event => {
                  const code = event.keyCode || event.which;
                  if (code == 13) {
                    this.setState({ selectedWord: word });
                  }
                }}
              >
                {word[0]}
              </List.li>
            ))}
          </List.ol>
        </Container>
      );
    }
  }
}

export default TopTwenty;

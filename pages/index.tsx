import Link from "next/link";
import React from "react";
import Button from "../components/button";
import Container from "../components/container";
import T from "../components/typography";

const Title = "Buzzwords of IoT";
const Explanation =
  "The Internet of Things is a trending technology, with applications that can be found in a multitude of areas. We have summarized a breakdown of the top 20 buzzwords that are found in tweets containing the hashtag #IoT.";
const ClickHere = "Buzzwords of IoT";

export default function Index() {
  return (
    <div>
      <T.h1 aria-label={"Welcome title"} tabIndex={0}>
        {Title}
      </T.h1>
      <T.p
        aria-label={"An explanation for the purpose of the site"}
        tabIndex={0}
      >
        {Explanation}
      </T.p>
      <Container>
        <Link href="/words_list">
          <Button primary xl href="/words_list">
            {ClickHere}
          </Button>
        </Link>
      </Container>
    </div>
  );
}

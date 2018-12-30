import Link from "next/link";
import React from "react";
import Button from "../components/button";
import Container from "../components/container";
import T from "../components/typography";
const Title = "#IoT";
const Explanation =
  "The Internet of Things is a trending technology domain with applications that can be found in many areas. We have summarized a breakdown of the top 20 buzzwords that are found in tweets containing the hashtag #IoT.";
const ClickHere = "Top 20 Buzzwords";

export default function Index() {
  return (
    <div>
      <Container direction={"column"} center>
        <div aria-hidden={true} id="index_title" role="banner">
          {Title}
        </div>
      </Container>
      <Container direction={"column"} center>
        <Container direction={"column"} center halfSize>
          {" "}
          <T.p
            center
            aria-label={"An explanation for the purpose of the site"}
            tabIndex={0}
          >
            {Explanation}
          </T.p>
          <Link href="/words_list">
            <Button primary xl href="/words_list">
              {ClickHere}
            </Button>
          </Link>
        </Container>
      </Container>
    </div>
  );
}

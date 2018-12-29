import Link from "next/link";
import React from "react";
import Button from "../components/button";
import Container from "../components/container";
import T from "../components/typography";
export default () => {
  return (
    <>
      <Container center>
        {" "}
        <T.p>
          {
            "Uh oh! It looks like something when wrong, click the button to go back."
          }
        </T.p>
        <Link href="/">
          <Button primary>{"Go Home"}</Button>
        </Link>
      </Container>
    </>
  );
};

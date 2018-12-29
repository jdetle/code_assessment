import Link from "next/link";
import React from "react";
import Button from "../components/button";
import T from "../components/typography";
export default () => {
  return (
    <>
      <T.h1>
        {
          "Uh oh! It looks like something when wrong, click the button to go back."
        }
      </T.h1>
      <Link href="/words_list">
        <Button primary href="/words_list">
          {"Go home"}
        </Button>
      </Link>
    </>
  );
};

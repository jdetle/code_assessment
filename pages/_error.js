import Link from "next/link";
import React from "react";
import Button from "../components/button";
import T from "../components/typography";
export default () => {
  return (
    <>
      <T.p>
        {
          "Uh oh! It looks like something when wrong, click the button to go back."
        }
      </T.p>

      <Link href="/words_list">
        <Button primary href="/">
          {"Go home"}
        </Button>
      </Link>
    </>
  );
};

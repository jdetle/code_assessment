const twit = require("twit");
if (process.env.ENV === "DEV") {
  import {
    consumer_key,
    consumer_secret,
    access_token,
    access_token_secret
  } from "./dev-secrets";
} else {
  const {
    consumer_key,
    consumer_secret,
    access_token,
    access_token_secret
  } = process.env;
}
function fetchTweets() {
  const T = new twit({
    consumer_key,
    consumer_secret,
    access_token,
    access_token_secret,
    timeout_ms: 60 * 1000,
    strictSSL: true
  });
  T.get("search/tweets", { q: "#IoT since:2011-07-11", count: 100 }, function(
    err,
    data,
    response
  ) {
    console.log(data);
  });
}
fetchTweets();

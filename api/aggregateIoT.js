const Twit = require("twit");
const { STOP_WORDS, DROPPED_SYMBOLS, DROPPED_REGEXES } = require("./constants");

function fetchTweets() {
  const {
    CONSUMER_KEY,
    CONSUMER_SECRET,
    ACCESS_TOKEN,
    ACCESS_TOKEN_SECRET
  } = process.env;
  const T = new Twit({
    consumer_key: CONSUMER_KEY,
    consumer_secret: CONSUMER_SECRET,
    access_token: ACCESS_TOKEN,
    access_token_secret: ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000,
    strictSSL: true
  });
  return T.get("search/tweets", {
    q: "#IoT since:2011-07-11",
    lang: "en",
    count: 100
  });
}
function preprocessText(text) {
  const words = text.trim().split(/\s+/g);
  const meaningful_words = words
    .map(word => {
      word = word.toLowerCase();
      DROPPED_SYMBOLS.forEach(element => {
        if (word != null) word = word.match(element) != null ? null : word;
      });
      DROPPED_REGEXES.forEach(regex => {
        if (word != null) word = word.match(regex) != null ? null : word;
      });
      STOP_WORDS.forEach(stop_word => {
        if (word != null) word = word === stop_word ? null : word;
      });
      return word;
    })
    .filter(word => word != null);
  return meaningful_words;
}
fetchTweets()
  .then(response => Promise.resolve(response.data.statuses))
  .then(tweets => {
    const filteredTweetText = tweets
      .map(tweet => tweet.text)
      .map(preprocessText);
    console.log(filteredTweetText);
  });

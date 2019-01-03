const Twit = require("twit");

function filterPunctuation(word) {
  /**
   * Filter punctuation from word using regexes.
   * @param word : string - Word with possible punctuation.
   * @return word : string - Word without attached punctuation.
   */
  if (word != null) word = word.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  return word;
}

function replaceBetween(str, start, stop) {
  /**
   * Replace text in between start and stop indices with whitespace.
   * @param str : string - string to have text replaced with whitespac
   * @param start : number - start index, inclusive
   * @param stop: number - stop index, exclusive.
   */
  let diff = stop - start;
  let spaces = "";
  for (var i = 0; i < diff; i++) {
    spaces += " ";
  }
  return str.substring(0, start) + spaces + str.substring(stop);
}

function fetchTweets() {
  /**
   * Fetch tweets using twit
   * Note: Must source ./secrets.env file in order for this function to work.
   * @return Promise - Promise with response that should contain tweets with the #IoT tag.
   */
  const { CONSUMER_KEY, CONSUMER_SECRET } = process.env;
  const T = new Twit({
    consumer_key: CONSUMER_KEY,
    consumer_secret: CONSUMER_SECRET,
    app_only_auth: true,
    timeout_ms: 60 * 1000,
    strictSSL: true
  });
  return T.get("search/tweets", {
    q: "#IoT since:2011-07-11 exclude:replies exclude:retweets",
    lang: "en",
    tweet_mode: "extended",
    count: 100
  });
}

module.exports = { fetchTweets, replaceBetween, filterPunctuation };

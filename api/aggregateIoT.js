const Twit = require("twit");
const { STOP_WORDS, DROPPED_SYMBOLS, DROPPED_REGEXES } = require("./constants");

function fetchTweets() {
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
function aggregateMeaningfulInformation(tweets) {
  const words = {};
  tweets.forEach(tweet => {
    let addedWords = {};
    tweet.meaningfulWords.forEach(word => {
      addedWords[word] = true;
      if (words[word] != null) words[word].count++;
      else {
        words[word] = { count: 1 };
      }
    });
    Object.keys(addedWords).forEach(word => {
      if (words[word].retweet_count)
        words[word].retweet_count += tweet.retweet_count;
      else {
        words[word].retweet_count = tweet.retweet_count;
      }
      if (words[word].favorite_count)
        words[word].favorite_count += tweet.favorite_count;
      else {
        words[word].favorite_count = tweet.favorite_count;
      }
      if (words[word].tweets) words[word].tweets.push(tweet.full_text);
      else {
        words[word].tweets = [tweet.full_text];
      }
      if (words[word].tweets_with_word) words[word].tweets_with_word += 1;
      else {
        words[word].tweets_with_word = 1;
      }
    });
  });
  let topWords = Object.entries(words)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 20);
  return Promise.resolve(topWords);
}
function filterPunctuation(word) {
  if (word != null) word = word.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  return word;
}
function getMeaningfulWords(text) {
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
        if (word != null) word = word == stop_word ? null : word;
      });
      return filterPunctuation(word);
    })
    .filter(word => word != null && word != "" && word != "iot");
  return meaningful_words;
}
module.exports = (request, res) => {
  fetchTweets()
    .then(response => Promise.resolve(response.data.statuses))
    .then(tweets => {
      const tweetsWithMeaningfulWords = tweets.map(tweet => {
        tweet.meaningfulWords = getMeaningfulWords(tweet.full_text);
        console.log(tweet.meaningfulWords);
        return tweet;
      });

      return Promise.resolve(tweetsWithMeaningfulWords);
    })
    .then(aggregateMeaningfulInformation)
    .then(topWords => {
      res.end(JSON.stringify(topWords));
    });
};
